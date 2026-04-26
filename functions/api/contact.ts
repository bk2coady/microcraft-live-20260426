interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactFormData {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
}

const serviceLabels: Record<string, string> = {
  renovation: 'Home Renovation',
  'radon-test': 'Radon Testing',
  'radon-mitigation': 'Radon Mitigation',
  other: 'Other',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed.' }, 405);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json({ message: 'The contact form is not configured yet.' }, 500);
  }

  let data: ContactFormData;

  try {
    data = await request.json();
  } catch {
    return json({ message: 'Please submit the form again.' }, 400);
  }

  if (data.company) {
    return json({ ok: true });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim() || 'Not provided';
  const service = data.service?.trim() || 'other';
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return json({ message: 'Please fill out your name, email, and message.' }, 400);
  }

  const serviceLabel = serviceLabels[service] ?? service;
  const subject = `New microCRAFT inquiry: ${serviceLabel}`;
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedService = escapeHtml(serviceLabel);
  const escapedMessage = escapeHtml(message).replaceAll('\n', '<br />');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Phone:</strong> ${escapedPhone}</p>
        <p><strong>Service:</strong> ${escapedService}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
      text: [
        'New website inquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceLabel}`,
        '',
        message,
      ].join('\n'),
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend email error', await resendResponse.text());
    return json({ message: 'Unable to send your message right now.' }, 502);
  }

  return json({ ok: true });
};
