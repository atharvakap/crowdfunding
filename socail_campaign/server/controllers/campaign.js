import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import Campaign from '../models/Campaign.js';

export const createCampaign = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            picturePath,
            campaignTitle,
            story,
            goalAmount,
            endDate,
        } = req.body;

        const newCampaign = new Campaign({
            firstName,
            lastName,
            email,
            picturePath,
            campaignTitle,
            story,
            goalAmount,
            endDate,
        });
        await newCampaign.save();
        res.status(201).json(newCampaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};