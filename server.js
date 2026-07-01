// server.js
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// MAIN route for the frontend
app.get('/professional', (req, res) => {
    res.json({
        professionalName: "Osigwe Uchechukwu David Caleb",

        base64Image: "",   // We'll add real image later

        nameLink: {
            firstName: "DavidCaleb",
            url: "https://bytehaven.world"
        },

        primaryDescription: " is a Passionate developer who wish to change his world with Tech.",

        workDescription1: "Currently learning how to build full-stack applications with Node.js and MongoDB.",

        workDescription2: "I enjoy solving problems and creating beautiful user experiences.",

        linkTitleText: "Connect with me on:",

        linkedInLink: {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/caleb-osigwe-294085253/"
        },

        githubLink: {
            text: "GitHub",
            link: "https://github.com/sirdave01/"
        }
    });
});

// Test route
app.get('/', (req, res) => {
    res.send(`<h1>✅ Server is running on port ${PORT}</h1><br><a href="/index.html">Open Frontend</a>`);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`Frontend available at: http://localhost:${PORT}/index.html`);
});