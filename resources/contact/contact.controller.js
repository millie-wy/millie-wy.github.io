import { contactEmail } from "../../server.js";

export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    html: `<p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>`,
  };
  contactEmail.sendMail(mail, (err) =>
    err
      ? res.json({
          status:
            "Ouch! Something went wrong. <br/> Try resending or contact me on LinkedIn?",
        })
      : res.json({ status: "Your message has been sent!" })
  );
};
