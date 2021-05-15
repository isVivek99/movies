import React, {useEffect, useState} from 'react'
import Header from './movies/Header'
import MainPage from './movies/MainPage'
import WatchList from './movies/WatchList'
import Watched from './movies/Watched'
import Add from './movies/Add'
import { GlobalProvider } from './context/GlobalState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
 
    return (
        <GlobalProvider>
            <>
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <MainPage />
                    </Route>

                    <Route path="/watchlist">
                        <WatchList />
                    </Route>
                    
                    <Route path="add">
                        <Add />
                    </Route>

                </Switch>   
            </Router>
            </>    
        </GlobalProvider>
    )
}

export default App
//if i pass props as movie={movie} i get a single object of each movie
// but if i pass it as {... movie} it spreads and gives each data seperately and can be
//easily destructured after passing
//the spread operator doesnt pass value but directly passes te bject in some sense
// it becomes easy to destructure the props