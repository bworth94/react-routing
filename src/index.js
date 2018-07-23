import React from 'react';
import { render } from 'react-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Things from "./pages/Things";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/about'>About</Link>
                </li>
                <li>
                    <Link to ='/Things'>Favorite Things</Link>
                </li>

                <hr/>
            </ul>

            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/things' component={Things} />
        </div>
    </Router>
);

render (
    <App />,
    document.getElementById('root')
);

