/**
 * Success log
 */
const fs = require("fs");

function logEmail({ firstname, lastname, email, phone, message }) {
    const logEntry = `
  [${new Date().toISOString()}]
  Prénom : ${firstname}
  Nom : ${lastname}
  Email : ${email}
  Téléphone : ${phone}
  Message : ${message}
  ---------------------------
  `;
    
    fs.appendFile("emails.log", logEntry, (err) => {
        if (err) console.error("Erreur lors de l'écriture dans le fichier log :", err);
    });
};

module.exports = logEmail;