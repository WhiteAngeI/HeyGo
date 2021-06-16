import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Layout from './components/Layout/Layout';
import SearchBox from './components/SearchBox/SearchBox';
import Location from './components/Location/Location';

class App extends Component {
    render() {
        return (
            <Router>
                    <Route path="/Location/:id" component={Location}/>
                    <Route exact path="/">
                        <Layout />
                        <SearchBox />
                    </Route>
            </Router>
        );
    }
}

export default App;