// the stretch challenge

import { getDB } from '../config/db.js';

export const getProfessionalData = async () => {
    try {
        const db = getDB();
        const data = await db.collection('professionals').findOne({});
        
        return data || null;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};