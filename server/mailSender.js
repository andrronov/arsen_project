import nodemailer from "nodemailer"
import "dotenv/config"

class MailSender{
   constructor(){
      this.transporter = nodemailer.createTransport({
         host: process.env.VITE_MAIL_HOST,
         port: process.env.VITE_MAIL_PORT,
         secure: true,
         auth: {
            user: process.env.VITE_MAIL_NAME,
            pass: process.env.VITE_MAIL_PASS,
         },
      });
   }

   async sendEmail(letter) {
      const info = await this.transporter.sendMail({
         from: process.env.VITE_MAIL_NAME,
         to: process.env.VITE_MAIL_NAME,
         subject: `Новая заявка от ${letter?.userName}, ${letter?.userPhone}`,
         html: `
               <div style="display: flex; flex-direction:column; background-color: #FFA800; padding: 10px; color: white">
                  <h1 style="font-style: italic; font-size: 1.5rem; justify-self: center;">JBY-Group</h1>
                  <p style="font-size:1.15rem">Имя: ${letter?.userName}</p>
                  <p style="font-size:1.15rem">Телефон: ${letter?.userPhone}</p>

               </div>
            `,
      });

      return info
   }
}

export default new MailSender()