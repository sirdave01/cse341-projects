import { body } from "express-validator";


export const validateContact = [

    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required"),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Must provide a valid email"),

    body("favoriteColor")
        .trim()
        .notEmpty()
        .withMessage("Favorite color is required"),

    body("birthday")
        .notEmpty()
        .withMessage("Birthday is required")

];