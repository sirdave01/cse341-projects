import mongoose from "mongoose";

export const validateId = (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            errors: [
                {
                    param: "id",
                    msg: "Invalid contact ID format",
                    value: id
                }
            ]
        });
    }

    next();
};