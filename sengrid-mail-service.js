module.exports = {
    sendNoteLeadStatusChange: sendNoteLeadStatusChange
}

function sendNoteLeadStatusChange(userEmail, emailMessage) {

    let sendMailPromise = new Promise(function (resolve, reject) {
        const sgMail = require('sendgrid')(process.env.SENDGRID_API_KEY);

        const email = new sgMail.Email();

        email.addTo(userEmail);
        email.setFrom(process.env.ORG_FROM_EMAIL);
        email.setSubject('Important Message')
        email.setHtml(emailMessage)

        sgMail.send(email, resolve())
    })
    return sendMailPromise

}