import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTripPageTable = () => {

    const [locationTitle, setLocation] = useState('');
    const [length, setLength] = useState('');
    const [startingDate, setStartDate] = useState('');
    
    const redirect = useNavigate();

    const addTrip = async () => {
        const newTrip = { locationTitle, length, startingDate };
        const response = await fetch('/travel-log', {
            method: 'post',
            body: JSON.stringify(newTrip),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added the trip to the log.`);
        } else {
            alert(`Unable to add the trip to the log: Error Code = ${response.status}`);
        }
        redirect("/travel-log");
    };


    return (
        <>
        <article>
            <h2>Add a trip</h2>
            <p>Use this page to add trips to the log. Each trip requires a location title (city or country)
                , length in days, and starting date.
            </p>
            <table id="trips">

                <caption>Enter trip details:</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Length</th>
                        <th>StartDate</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="location">Location</label>
                        <input
                            type="text"
                            placeholder="Location of the trip"
                            value={locationTitle}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td><label htmlFor="length">Length released</label>
                        <input
                            type="number"
                            value={length}
                            placeholder="Length of the trip"
                            onChange={e => setLength(e.target.value)} 
                            id="length" />
                    </td>

                    <td><label htmlFor="startDate">Start date</label>
                        <input
                            type="date"
                            placeholder="Starting date of the trip"
                            value={startingDate}
                            onChange={e => setStartDate(e.target.value)} 
                            id="startDate" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTrip}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTripPageTable;