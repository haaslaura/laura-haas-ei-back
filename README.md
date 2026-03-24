# Portfolio Website - Back-end

## 📌 Overview

This project is a server in Node.js/Express for my personal portfolio website.

It allows you to receive emails from a contact form. A route is set up for sending the email and two utilities can be used to create logs in the event of an error or successful delivery.

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime environment 
- **Express** – Framework for Node.js
- **nodemailer** - Node.js module for sending email
- **Brevo** (ex-Sendinblue) - SMTP relay platform used to send emails reliably and avoid spam filters
- **express-rate-limit** - Limits the number of admissible emails per minute
- **validator** - Sanitize the contact form fields

## ⚙️ Installation & Setup

To run the project locally:  

1. Clone the repository:  
`git clone https://github.com/haaslaura/laura-haas-ei-back.git`

2. Install dependencies:
`npm install`

3. Create a .env with :

```
EMAIL_USER=your_email
BREVO_SMTP_USER=your_brevo_auth_user
EMAIL_PASS=private_key
PORT=your_port_server
FRONTEND_URL=your_front_url
MAILER_API_URL=your_mailer_api
```

4. Start the development server:
`npm run start`

## 🎨 Front-end part

You can find the Front-end project and any informations about it at (https://github.com/haaslaura/laura-haas-ei-front).

## 📬 Contact
Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/laurahaas-developpement/) if you have any questions or feedback!

This projet is a work in progress. Stay tuned for updates! 🚀