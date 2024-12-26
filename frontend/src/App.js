// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'
import TripsPage from './pages/TripsPage.js'

//import TripsPage from './pages/TripsPage';

// For Create and Edit, use the form OR table design; not both.

// If your schema requires SHORT data input, then use the TABLE design.
import EditTripPageTable from './pages/EditTripPageTable';
import AddTripPageTable from './pages/AddTripPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [trip, setTripToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1>
            Izzy Lerman
            <img src = "android-chrome-192x192.png"
            alt = "alien logo"/>
            </h1>
            <p>Software Student at Oregon State University</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/topics" element={<TopicsPage/>} />
                    
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/travel-log" element={<TripsPage setTrip = {setTripToEdit}/>}/>
                 
                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddTripPageTable />} />
                     <Route path="/update" element={<EditTripPageTable tripToEdit={trip} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>
              &copy; 2024 Izzy Lerman
            </p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;