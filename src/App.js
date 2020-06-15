import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import State from "./components/StateBoard";
import City from "./components/CityTable";
import News from "./components/NewsBoard";
//import CoronaData from "./data/corona";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            CoronaData: [],
            NewsData: [],
            CityData: [],
            KoreaData: {},
            Datetime: null
        }
    }

    componentDidMount() {
         fetch("https://119.207.250.212:8080/corona")
             .then(res => res.json())
             .then(
                 (result) => {
                     this.setState({
                         isLoaded: true,
                         CoronaData : result,
                         NewsData : result.news,
                         KoreaData : result.confirm_status,
                         CityData : result.city_status,
                         Datetime : result.datetime
                     });
                 },
                 (error) => {
                     this.setState({
                         isLoaded: true,
                         error
                     });
                 }
             )
        }

    render() {
        let _Main = null;
        if(this.state.isLoaded){
            _Main = <State KoreaData={this.state.KoreaData} Update={this.state.Datetime} CoronaData = {this.state.CoronaData}></State>;
        }

        return (
            <div>
                {_Main}
                <City CityData={this.state.CityData}></City>
                <News NewsData={this.state.NewsData}></News>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
