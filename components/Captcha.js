import React, { useEffect } from 'react';

export default function Captcha({ onVerify }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onloadCallback = function() {
        grecaptcha.render('recaptcha', {
          sitekey: process.env.RECAPTCHA_SITE_KEY,
          callback: onVerify,
        });
      };
    }
  }, [onVerify]);

  return <div id="recaptcha"></div>;
}
