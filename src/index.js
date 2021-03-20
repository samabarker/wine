import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import { wine } from './wines';

ReactDOM.render(

                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col text-center p-5"><h1 className="display-1 fw-bolder">Which Wine?</h1></div>
                  </div>
                  <div className="row justify-content-center">
                    <CardList wine={wine}/>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col text-center p-5">https://media.winefolly.com/AF-Poster.png</div>
                  </div>
                </div>
                , document.getElementById('root'));


