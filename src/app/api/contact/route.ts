import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Create transporter using Outlook/Office365 (basic auth)
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

const resendClient = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendViaResend({ name, email, subject, message }: { name: string; email: string; subject: string; message: string; }) {
  if (!resendClient) throw new Error('Resend API key not configured');

  await resendClient.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'lindokuhlengcongo1@gmail.com',
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Message from ${name}</h2>
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  // confirmation to sender
  await resendClient.emails.send({
    from: 'Lindokuhle <onboarding@resend.dev>',
    to: email,
    subject: 'We received your message ✅',
    html: `
      <h2>Thanks for reaching out, ${name}!</h2>
      <p>I've received your message and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to connect with me on:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/">LinkedIn</a></li>
        <li><a href="https://github.com/lindokuhle1">GitHub</a></li>
        <li>WhatsApp: +27 733 642 729</li>
      </ul>
      <p>Best regards,<br><strong>Lindokuhle</strong></p>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Try Outlook SMTP first
    try {
      // Validate Outlook credentials are configured
      if (!process.env.OUTLOOK_EMAIL || !process.env.OUTLOOK_PASSWORD) {
        throw new Error('Outlook credentials not configured');
      }

      await transporter.sendMail({
        from: process.env.OUTLOOK_EMAIL,
        to: 'lindokuhlengcongo1@gmail.com',
        replyTo: email,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Message from ${name}</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      // Send confirmation email to the sender
      await transporter.sendMail({
        from: process.env.OUTLOOK_EMAIL,
        to: email,
        subject: 'We received your message ✅',
        html: `
          <h2>Thanks for reaching out, ${name}!</h2>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to connect with me on:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/">LinkedIn</a></li>
            <li><a href="https://github.com/lindokuhle1">GitHub</a></li>
            <li>WhatsApp: +27 733 642 729</li>
          </ul>
          <p>Best regards,<br><strong>Lindokuhle</strong></p>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Email sent successfully via Outlook SMTP' },
        { status: 200 }
      );
    } catch (smtpError: any) {
      console.error('SMTP error:', smtpError);

      // If basic auth is disabled or Outlook fails, try Resend if configured
      if (smtpError && smtpError.code === 'EAUTH' && resendClient) {
        try {
          await sendViaResend({ name, email, subject, message });
          return NextResponse.json(
            { success: true, message: 'Email sent via Resend because SMTP auth failed' },
            { status: 200 }
          );
        } catch (resendError) {
          console.error('Resend fallback error:', resendError);
          return NextResponse.json(
            { error: 'Both SMTP and Resend failed. Please contact via WhatsApp: +27 733 642 729' },
            { status: 500 }
          );
        }
      }

      // Generic error response
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact me via WhatsApp: +27 733 642 729' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Invalid request or internal error' },
      { status: 500 }
    );
  }
}
