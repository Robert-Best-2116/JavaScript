import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './views/Update';
//import Update from './components/Update';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div>
    	<BrowserRouter>
            <Routes>
	            <Route element={<Main/>} path="/home" default /> 
                <Route element={<Detail/>} path="/people/:id" />
                <Route element={<Update/>} path="/people/edit/:id"/>
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;