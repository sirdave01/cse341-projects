import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import connectDB from './config/db.js';
import contactsRoutes from './routes/contacts.js';
import swaggerDocument from './swaggerConfig.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/contacts', contactsRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({
        message: 'Contacts API is running!',
        endpoints: {
            getAll: '/contacts',
            getOne: '/contacts/:id',
            documentation: '/api-docs'
        }
    });
});

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📌 Test it at: http://localhost:${PORT}/contacts`);
        console.log(`📚 Swagger Docs: http://localhost:${PORT}/api-docs`);
    });
}).catch((err) => {
    console.error('❌ Failed to start server due to database connection error');
});

export default app;