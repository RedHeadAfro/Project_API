// express en mongoose verplichten 
import express from "express";
import mongoose from "mongoose";

// route file importeren 
import route from "./routes/index.js"

// Dit was nodig omwille van een CORS-error
import cors from "cors";

// app maakt gebruik van express
const app = express();

// connection met de database dmv mongoose (wachtwoord is hiervoor nodig)
mongoose.connect("mongodb+srv://adminOumaima:dolfijN16@cluster0.wijw1.mongodb.net/TestDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// connection met de database
const db = mongoose.connection;

// als er een error is die dan console loggen 
db.on('error', (error) => console.error(error));
// als het gelukt is dan console log je dat het gelukt is
db.once('open', () => console.log('You are in'));

// app verplichten cors te gebruiken omwille van CORS error
app.use(cors());
app.use(express.json());
// Dit is de route van waar je de data zou kunnen zien als je naar localhost:3000/images surft
app.use('/images', route);

// Dit is de poort 
app.listen('3000', () => console.log('Server up and running '));