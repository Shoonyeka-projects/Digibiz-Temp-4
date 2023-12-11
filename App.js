import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import LinkText from './pages/LinkText';
import Gallery from "./pages/Gallery";

export default function App() {
    return (
        <BrowserRouter basename="/">
             <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/pages/linktext"}`} component={LinkText} />
                <Route exact path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}