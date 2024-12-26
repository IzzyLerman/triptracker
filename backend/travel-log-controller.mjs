// Controllers for the Trip Collection

import 'dotenv/config';
import express from 'express';
import * as trips from './travel-log-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travel-log', (req,res) => { 
    trips.createTrip(
        req.body.locationTitle, 
        req.body.length,
        req.body.startingDate
        
        )
        .then(trip => {
            console.log(`The trip to "${trip.locationTitle}" was added to the collection.`);
            res.status(201).json(trip);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'A new trip could not be created.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travel-log', (req, res) => {
    trips.retrieveTrips()
        .then(trips => { 
            if (trips !== null) {
                console.log(`All trips were retrieved from the collection.`);
                res.json(trips);
            } else {
                res.status(404).json({ Error: 'There are no trips currently in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not connect to the collection to retrieve trips.' });
        });
});


// RETRIEVE by ID controller
app.get('/travel-log/:_id', (req, res) => {
    trips.retrieveTripByID(req.params._id)
    .then(trip => { 
        if (trip !== null) {
            console.log(`"The trip to ${req.body.locationTitle}" was retrieved, based on its ID.`);
            res.json(trip);
        } else {
            res.status(404).json({ Error: 'That trip was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to search for trips in the collection.' });
    });

});


// UPDATE controller ************************************
app.put('/travel-log/:_id', (req, res) => {
    trips.updateTrip(
        req.params._id, 
        req.body.locationTitle, 
        req.body.startingDate, 
        req.body.length
    )
    .then(trip => {
        console.log(`"The trip to ${req.body.locationTitle}" was updated.`);
        res.json(trip);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Could not access the collection and update the trip.' });
    });
});


// DELETE Controller ******************************
app.delete('/travel-log/:_id', (req, res) => {
    trips.deleteTripById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} trip was deleted.`);
                res.status(200).send({ Success: 'Successfully deleted the trip.' });
            } else {
                res.status(404).json({ Error: 'Could not find the trip specified.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Could not access the collection to delete the trip.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});