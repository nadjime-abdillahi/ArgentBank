import React, { useState } from "react";
import "./error404.scss";
import { Link } from "react-router-dom";


export const Error404 = () => {
    
    const [title, setTitle] = useState<String>("Home");

    // set up prop allowing app component to manage the page title
    React.useEffect(() => {
        document.title = "not found";
    }), [title];

    return (
        <main className="main bg-dark error404">
            <h2 className="error404__title"><Error404 pTitle={setTitle} /></h2>
            <Link className="error404__link" to="/">Back to homepage</Link>
        </main>
    );
};