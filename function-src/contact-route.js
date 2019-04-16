'use strict';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export function handler(event, context, callback) {
    console.log(JSON.parse(event.body).data);
    let form = JSON.parse(event.body).data;
    const msg = {
        to: form.department,
        from: form.email,
        subject: 'Contact Form Submission',
        text: form.message,
        html: form.message,
      };

      sgMail.send(msg);

}