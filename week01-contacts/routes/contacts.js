import express from 'express';

import {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from '../controllers/contacts.js';

import { validateContact } from '../validators/contact.js';

import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

// GET all contacts
router.get('/', getAllContacts);

// GET single contact by ID
router.get('/:id', getContactById);

// CREATE contact
// #swagger.parameters['body'] = {
//     in: 'body',
//     required: true,
//     schema: {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         favoriteColor: 'Blue',
//         birthday: '1995-01-01'
//     }
// }
router.post('/', validateContact,
    validateRequest, createContact);

// UPDATE contact
// #swagger.parameters['body'] = {
//     in: 'body',
//     required: true,
//     schema: {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         favoriteColor: 'Blue',
//         birthday: '1995-01-01'
//     }
// }
router.put('/:id',
    validateContact, validateRequest, updateContact);

// DELETE contact
router.delete('/:id', deleteContact);

export default router;