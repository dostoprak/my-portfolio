import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend istemcisini ortam değişkenindeki gizli anahtarla başlatıyoruz
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Formdan gelen JSON verisini ayrıştırıyoruz
    const { name, email, service, message } = await request.json();

    // Resend üzerinden e-posta gönderimini gerçekleştiriyoruz
    const data = await resend.emails.send({
      from: 'Portfolio Form <onboarding@resend.dev>',
      to: ['toprakbora82@gmail.com'], // <<< Kendi e-posta adresini buraya yaz
      subject: `Yeni İletişim Formu Mesajı: ${name}`,
      html: `
        <h2>Web Sitenden Yeni Bir Mesaj Geldi!</h2>
        <p><strong>Gönderen:</strong> ${name} (${email})</p>
        <p><strong>Hizmet:</strong> ${service || 'Belirtilmedi'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}