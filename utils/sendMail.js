import nodemailer from "nodemailer";
 export async function main(mailTo) {
  

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "c18d6bd572c6a4", // generated ethereal user
      pass: "d50e86d44da7bc", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: 'kusumlamichhane2015@gmail.com', // sender address
    to: mailTo, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
