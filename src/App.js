import React from 'react';
import { wine } from './wines';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            wine: wine,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        const filteredWines = this.state.wine.filter(wine => {
            return wine.pairs.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col text-center p-5 pb-3"><h1 className="display-1 fw-bolder">Which Wine?</h1></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5 col-xl-4 text-center m-3 pt-0 p-3"><SearchBox searchChange={this.onSearchChange} /></div>
                </div>
                <div className="row justify-content-center">
                    <CardList wine={filteredWines}/>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center p-3">https://media.winefolly.com/AF-Poster.png</div>
                </div>
            </div>
        );
    }
}

export default App;