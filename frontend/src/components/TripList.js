import React from 'react';
import Trip from './Trip';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TripList({ trips, onDelete, onEdit }) {
    return (
        <table id="trips">
            <caption>List of Trips</caption>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Length (days)</th>
                    <th>Starting Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {trips.map((trip, i) => 
                    <Trip 
                        trip={trip} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TripList;
