import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
    vendorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vendor', 
        required: true 
    },
    serviceId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service', 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true, 
        min: 1, 
        max: 5 
    },
    comment: { 
        type: String, 
        maxlength: 500 
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Review = mongoose.model('Review', reviewSchema);

export default Review;