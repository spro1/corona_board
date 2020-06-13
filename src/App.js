import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import State from "./components/StateBoard";
import City from "./components/CityTable";
import News from "./components/NewsBoard";
import CoronaData from "./data/corona";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CityData : CoronaData.city_status,
            KoreaData : CoronaData.confirm_status,
            NewsData : CoronaData.news
        }
    }
    render() {
        return (
            <div>
                <State KoreaData={this.state.KoreaData}></State>
                <City CityData={this.state.CityData}></City>
                <News NewsData={this.state.NewsData}></News>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
