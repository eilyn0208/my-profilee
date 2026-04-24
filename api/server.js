import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, subject, message }) => {
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return 'All fields are required';
  }
  if (!EMAIL_REGEX.test(email)) return 'Invalid email';
  if (name.length > 80)        return 'Name too long';
  if (subject.length > 150)    return 'Subject too long';
  if (message.length > 2000)   return 'Message too long';
  return null;
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body ?? {};
  const validationError = validate({ name, email, subject, message });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to:   'eilynrsesendez@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
                <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr/>
                <p style="white-space:pre-wrap">${message}</p>
            `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[resend]', error);
    return res.status(502).json({ error: 'Failed to send message' });
  }
};

export default handler;