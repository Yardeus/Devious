import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./front/components/Header/HeaderContainer";
import React from "react";

const App = (props) => {


    return (
        <div className="App">
            <HeaderContainer/>
            <div className='content'>
               {/* <Route path='/employee' render={() => <EmployeeContainer />}/>*/}

            </div>
            {/*<Footer/>*/}


        </div>
    );
}

export default App;
