import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import React from 'react'; // Important pour le JSX
import EmailTemplate from '@/components/visit-mail-template';

export async function POST(request: Request) {
  try {
    const { name, email,phone, date, subject, message } = await request.json();
    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Utilisation du JSX au lieu d’appeler directement EmailTemplate
    const emailHtml = await render(
      React.createElement(EmailTemplate, {
        name,
        email,
        phone: phone,
        visitDate:date,
        message
      })
    );

    // Envoi du mail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject:  "Demande de visite du chantier",
      html: emailHtml,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
