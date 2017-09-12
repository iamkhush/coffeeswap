import React from 'react';

import RoastTypeForm from './SignupComponents/roastType'
import RoastByDate from './SignupComponents/roastByDate'
import RoastLocationForm from './SignupComponents/roastLocation'
import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'


const getStarted = ({ fieldValues, nextStep, saveValues, currentFieldCount, maxFieldsCount }) => {
    const maxValuesInGetStarted = 3;

    const selectType = (event) => {
        saveValues({roastType: event.currentTarget.getAttribute('data-roasttype')});
        document.getElementsByClassName('roasttypeform')[0].querySelectorAll('img').forEach(function(el){el.classList.remove('roasttype-border')});
        event.currentTarget.classList.add('roasttype-border');
    }

    const selectDateImp = (event) => {
        saveValues({roastByDate: event.currentTarget.innerText});
        document.getElementsByClassName('roastbydateform')[0].querySelectorAll('span').forEach(function(el){el.classList.remove('dateimportance-selected')});
        event.currentTarget.classList.add('dateimportance-selected');
    }

    const selectLocation = (event) => {
        saveValues({roastLocation: event.currentTarget.getAttribute('data-location')});      
        document.getElementsByClassName('roastlocationform')[0].querySelectorAll('img').forEach(function(el){el.classList.remove('roasttype-border')});
        event.currentTarget.classList.add('roasttype-border');
    }

    const randomSelection = (event) => console.log(event);

    return (
        <div>
            <Header h1="Get Started" h2={<div><p>First, complete these three steps to tell us about your coffee preferences.</p><a onClick={randomSelection} href="#"> Not sure or want a surprise? Click here to choose default settings ></a></div>} />
            <form method="GET" action="/shipping">
                <RoastTypeForm selectType={selectType} />            
                <br />
                <RoastByDate selectDateImp={selectDateImp} />
                <br/><br/>
                <RoastLocationForm selectLocation={selectLocation} />                
            </form>
            <Footer maxFieldsCount={maxFieldsCount} currentFieldCount={currentFieldCount} 
                    maxValuesInThis={maxValuesInGetStarted} 
                    nextStep={nextStep} h1="Continue to Shipping Information" />
        </div>
    );
};


export default getStarted;