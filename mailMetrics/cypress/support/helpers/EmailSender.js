class EmailSender {

    sendEmail(serverID, sendEmailAdress, subject, text){
        return cy.mailosaurCreateMessage(serverID, {
            to: sendEmailAdress, // must be a verified address
            subject: subject,
            text: text,
            send: true,
          })
    }

}


export default new EmailSender();