import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTripPageTable = ({ tripToEdit }) => {
 
    const [locationTitle, setLocation]       = useState(tripToEdit.locationTitle);
    const [length, setLength]       = useState(tripToEdit.length);
    const [startingDate, setStartDate] = useState(tripToEdit.startingDate);
    
    const redirect = useNavigate();

    const editTrip = async () => {
        const response = await fetch(`/travel-log/${tripToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                locationTitle: locationTitle, 
                length: length, 
                startingDate: startingDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully edited the trip to ${tripToEdit.locationTitle}`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to edit the trip to ${tripToEdit.locationTitle}: Error Code ${response.status}. ${errMessage.Error}`);
        }
        redirect("/travel-log");
    }

    return (
        <>
        <article>
            <h2>Edit a trip</h2>
            <p>Use this page to update information about a trip already in the log.</p>
            <table id="trips">
                <caption>Enter the updated information:</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Length</th>
                        <th>Start Date</th>
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

                    <td><label htmlFor="length">Length</label>
                        <input
                            type="number"
                            value={length}
                            placeholder="Length of the trip"
                            onChange={e => setLength(e.target.value)} 
                            id="length" />
                    </td>

                    <td><label htmlFor="startDate">Start Date</label>
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
                            onClick={editTrip}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTripPageTable;