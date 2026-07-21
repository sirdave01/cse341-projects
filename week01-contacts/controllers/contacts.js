import mongoose from "mongoose";
import Contact from '../models/contacts.js';

// GET all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET single contact by ID
export const getContactById = async (req, res) => {

    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid contact ID"
            });
        }

        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json(contact);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// POST create a new contact
export const createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);

        const savedContact = await newContact.save();

        res.status(201).json({
            id: savedContact._id
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// PUT update a contact
export const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// DELETE a contact
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            return res.status(404).json({
                message: 'Contact not found'
            });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};