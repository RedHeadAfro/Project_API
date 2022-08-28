import mongoose from "mongoose";

// Dit is de schema --> hoe je data zou moeten verzenden via POSTMAN
const Product = mongoose.Schema({
    // image url die ik nodig heb dus ik verplicht het anders kan ik niet verder
    imageURL: {
        type: String,
        required: true
    },
    // ik verplicht de description ook want dit kan ik gebruiken als alt-tag
    description: {
        type: String,
        required: true
    }
});

// en daarna export je de model zodat het ook van toepassing gaat
export default mongoose.model('Products', Product);