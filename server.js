require("dotenv").config();

const cors = require("cors");
const express = require("express");
const rateLimit = require("express-rate-limit");
const emailRoutes = require("./routes/email")

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;
const MAILER_API_URL = process.env.MAILER_API_URL;


app.use(express.json());
app.set('trust proxy', 1);  // Trust 'X-Forwarded-*' headers


// Prevent requests from other sites
app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// Anti spam
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 10, // max 3 requests per minute
    message: {
        success: false,
        message: "Trop de tentatives. Réessayer dans une minute."
    },
});

app.use("/send", limiter);

// Routes
app.use("/send", emailRoutes);

// Start the server
app.listen(PORT, () => console.log(`Serveur en écoute sur ${MAILER_API_URL}:${PORT}`));