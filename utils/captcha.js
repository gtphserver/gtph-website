import fetch from 'node-fetch';

export const verifyCaptcha = async (captchaResponse) => {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: captchaResponse,
    }),
  });
  const data = await res.json();
  return data.success;
};
