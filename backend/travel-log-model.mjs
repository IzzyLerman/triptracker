// Models for the Travel Log

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Could not connect to the MongoDB server.' });
    } else  {
        console.log('Connected to the MongoDB server succesfully.');
    }
});

// SCHEMA: Define the collection's schema.
const travelLogSchema = mongoose.Schema({
	locationTitle:    { type: String, required: true },
	length:     { type: Number, required: true },
	startingDate: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "travelLog".
const travelLog = mongoose.model('Travel Log', travelLogSchema);


// CREATE model *****************************************
const createTrip = async (locationTitle, length, startingDate) => {
    const trip = new travelLog({ 
        locationTitle: locationTitle, 
        length: length, 
        startingDate: startingDate 
    });
    return trip.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTrips = async () => {
    const query = travelLog.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTripByID = async (_id) => {
    const query = travelLog.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTripById = async (_id) => {
    const result = await travelLog.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTrip = async (_id, locationTitle, length, startingDate) => {
    const result = await travelLog.replaceOne({_id: _id }, {
        locationTitle: locationTitle,
        length: length,
        startingDate: startingDate
    });
    return { 
        _id: _id, 
        locationTitle: locationTitle,
        length: length,
        startingDate: startingDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createTrip, retrieveTrips, retrieveTripByID, updateTrip, deleteTripById }