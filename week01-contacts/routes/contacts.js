import express from 'express';

import { getAllContacts, getContactById, 
    createContact, updateContact,
    deleteContact
} from '../controllers/contacts.js';


const router = express.Router();

// GET all contacts
router.get('/', getAllContacts);

// GET single contact by ID
router.get('/:id', getContactById);

//CREATE contact
router.post('/', createContact);

//UPDATE contact
router.put('/:id', updateContact);

//DELETE contact
router.delete('/:id', deleteContact);

export default router;