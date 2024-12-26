import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiDeleteBin2Fill } from "react-icons/ri"
import {MdEditRoad } from 'react-icons/md';


function Trip({ trip, onEdit, onDelete }) {
    return (
        <tr>
            <td>{trip.locationTitle}</td>
            <td>{trip.length}</td>
            <td>{trip.startingDate.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin2Fill onClick={() => onDelete(trip._id)} /></td>
            <td><MdEditRoad onClick={() => onEdit(trip)} /></td>
        </tr>
    );
}

export default Trip;