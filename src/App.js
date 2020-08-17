import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import State from "./components/StateBoard";
import City from "./components/CityTable";
import News from "./components/NewsBoard";
import FileData from "./data/corona";

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

    async componentDidMount() {
        try{
            const response = await fetch("https://rssenjoy.com/corona");
            const json= await response.json();
            this.setState({
                         isLoaded: true,
                         CoronaData : json,
                         NewsData : json.news,
                         KoreaData : json.confirm_status,
                         CityData : json.city_status,
                         Datetime : json.datetime
                     });
                 } catch(error){
                    this.setState({
                        isLoaded: false,
                        CoronaData : FileData,
                        NewsData : FileData.news,
                        KoreaData : FileData.confirm_status,
                        CityData : FileData.city_status,
                        Datetime : FileData.datetime
                    })
                 }
    }

    render() {
        return (
            <div>
                <State KoreaData={this.state.KoreaData} Update={this.state.Datetime} CoronaData = {this.state.CoronaData}></State>
                <City CityData={this.state.CityData}></City>
                <News NewsData={this.state.NewsData}></News>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
