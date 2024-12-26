function HomePage() {
    return (
        <>
        <h2>Home</h2>
        <article>
            <p>
                My early college background was in math at Binghamton University in New York.
                I decided to switch to Computer Science to focus on a career path that is more practical
                and available. Currently, I want to work as a full-stack software engineer so I can be exposed 
                to different monetary structures within the industry, and so that I can sharpen
                my skills around talented and likeminded peers. Eventually, I'd like to either continue my education
                in the area of AI or data science.
            </p>
        </article>
        <p>
            This is a full-stack MERN site which uses several technologies.
            <ul>
                <li>
                    MongoDB for managing the database. MongoDB provides CRUD functionality for databases
                    via simple http requests. CRUD is the basic operation cycle for multi-component applications:
                    <ul>
                        <li>Create entries</li>
                        <li>Read entries</li>
                        <li>Update entries</li>
                        <li>Delete entries</li>
                    </ul>
                </li>
                <li>
                    Express is the central component of the application which defines the methods for accessing its endpoints.
                    It's also responsible for listening to incoming requests, and routing them to the correct components within the application.
                </li>
                <li>
                    React is responsible for organizing the front-end interface. The React archiecture
                    is based on components, which use JSX (JavaScript XML). Components process data and render the corresponding
                    UI elements in several phases. React's 'state', which represents the DOM's internal data at a given point,
                    can be used to reactively interact with express, which routes requests to the proper endpoint.
                </li>
                <li>
                    Node combines with Express to manage the back-end routing and logic efficiently. Node is necessary in order to
                    execute JavaScript code outside of the web browser. Node is is effective at managing asynchronous tasks as well, 
                    so it is used in many applications as an interface for the back-end and frnt-end.
                </li>
            </ul>
        </p>
        </>
    )
}

export default HomePage;