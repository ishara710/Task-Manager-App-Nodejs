const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email,name) => {
sgMail.send({
    to: email,
    from: 'isharamahapatra2@gmail.com',
    subject: 'Trying to send emails using Nodejs',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
})
}

const sendDeleteEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'isharamahapatra2@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. Let me know if there was something we could have done to kept you on board the app.`
    })
    }

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}