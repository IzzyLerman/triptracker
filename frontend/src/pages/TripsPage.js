import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TripList from '../components/TripList';
import { Link } from 'react-router-dom';

function TripsPage({ setTrip }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [trips, setTrips] = useState([]);

    // RETRIEVE the entire list of trips
    const loadTrips = async () => {
        const response = await fetch('/travel-log');
        const trips = await response.json();
        setTrips(trips);
    } 
    

    // UPDATE a single trip
    const onEditTrip = async trip => {
        setTrip(trip);
        redirect("/update");
    }


    // DELETE a single trip  
    const onDeleteTrip = async _id => {
        const response = await fetch(`/travel-log/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/travel-log');
            const trips = await getResponse.json();
            setTrips(trips);
        } else {
            console.error(`Successfully deleted trip with ID: ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the trips
    useEffect(() => {
        loadTrips();
    }, []);

    // DISPLAY the trips
    return (
        <>
            <h2>Travel Log</h2>
            <p>This page holds a continuous log of my favorite trips for school, family traveling,
                or solo tourism. Included is the length and starting date for each trip for record keeping
                purposes. 
            </p>
            <Link to="/create">Add Trip</Link>
            <TripList 
                trips={trips} 
                onEdit={onEditTrip} 
                onDelete={onDeleteTrip} 
            />
        </>
    );
}

export default TripsPage;