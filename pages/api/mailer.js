export default function handler(req, res) {
  if (req.method === 'POST') {
    const { clientName, clientPhone, clientComment } = req.body;

    if (!clientName || !clientPhone) {
      return res.status(403).json({ success: false, messgae: 'Получатель не передан!' });
    }

    const nodemailer = require('nodemailer');
    const transport = nodemailer.createTransport({
      ...process.env.mailConfiguration,
      secure: true,
    });

    const mailMessage = {
      from: `Webstudio56 <${process.env.mailSendFrom}>`,
      to: process.env.mailSendTo,
      subject: 'webStudio56: Получен запрос с сайта',
      html: `
        <html>
        <style>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
          html, body { font-family: "Fira", arial, sans-serif }
        </style>
        <body>
          <h1>Получено сообщение с сайта web<span style="color: gray">STUDIO</span><sup style="color: green; font-weight: bold">56</sup></h1>
          <p>Клиент по имени:  <b>${clientName}</b></p>
          <p>Номер телефона: <a href="tel:${clientPhone}"><b>${clientPhone}</b></a></p>
          <p>Оставил комментарий: </p>
          <p style="text-align: justify; color: #666; font-weight: 300; ">${clientComment}</p>
        </body>
        </html>
      `,
    };

    transport.sendMail(mailMessage, (err, data) => {
      if (err) {
        res.status(400).json({ success: false, message: err });
      } else {
        res.json({ success: true, data });
      }
    });
  } else {
    res.status(400).json({ success: false, message: 'Действие не доступно!' });
  }
}
