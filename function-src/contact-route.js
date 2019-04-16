'use strict';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export function handler(event, context, callback) {
    let form = JSON.parse(event.body).data;

    let html = `<h1>Form submission from ${form.name}</h1>
                <p>${form.message}</p>`;


    const msg = {
        to: form.department,
        from: form.email,
        subject: 'Contact Form Submission',
        text: form.message,
        html: html,
      };

      sgMail.send(msg);

}