import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { connectDB } from './config/db.js';
import { getProfessionalData } from './models/professional.js';

dotenv.config();

const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Connect to MongoDB
connectDB().catch(console.error);

// Main route
app.get('/professional', async (req, res) => {
    let data = await getProfessionalData();

    if (!data) {
        // Fallback if nothing in database
        data = {
            professionalName: "Osigwe Uchechukwu David Caleb",
            base64Image: "",   // ← Paste your base64 here
            nameLink: { firstName: "ByteHaven Tech Solutions Ltd", url: "https://bytehaven.world" },
            primaryDescription: " is a Passionate developer who wish to change his world with Tech.",
            workDescription1: "Currently learning how to build full-stack applications with Node.js and MongoDB.",
            workDescription2: "I enjoy solving problems and creating beautiful user experiences.",
            linkTitleText: "Connect with me on:",
            linkedInLink: { text: "LinkedIn", link: "https://www.linkedin.com/in/caleb-osigwe-294085253/" },
            githubLink: { text: "GitHub", link: "https://github.com/sirdave01/" }
        };
    }

    res.json(data);
});

app.get('/', (req, res) => {
    res.send(`<h1>✅ Server running</h1><a href="/index.html">Open Frontend</a>`);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});