import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        picturePath: {
            type: String,
            default: "",
        },
        campaignTitle: {
            type: String,
            required: true,
        },
        story: {
            type: String,
            required: true,
        },
        goalAmount: {
            type: Number,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const Campaign = mongoose.model("Campaign", CampaignSchema);
export default Campaign;