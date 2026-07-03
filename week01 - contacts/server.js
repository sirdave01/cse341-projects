import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactsRoutes from './routes/contacts.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/contacts', contactsRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Contacts API is running!',
        endpoints: {
            getAll: '/contacts',
            getOne: '/contacts/:id'
        }
    });
});

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📌 Test it at: http://localhost:${PORT}/contacts`);
    });
}).catch((err) => {
    console.error("❌ Failed to start server due to database connection error");
});

export default app;