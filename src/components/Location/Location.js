import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import {Background, MapSizer, Li } from "./Styles";
import styled from "styled-components";

class Location extends Component {

    state = {
        data : {
        }
    }

    componentDidMount() {
        axios.get(`https://code-challenge-backend.herokuapp.com/locations/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <Background>
                <Li>Name: {this.state.data.name}</Li>
                <Li>Latitude: {this.state.data.latitude}</Li>
                <Li>Longitude: {this.state.data.longitude}</Li>
                <StyledLink to="/">Back</StyledLink>
                <MapSizer>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        center={{ lat: this.state.data.latitude, lng: this.state.data.longitude}}>
                    <Marker position={{ lat: this.state.data.latitude, lng: this.state.data.longitude}} />
                    </Map>
                </MapSizer>
            </Background>
        )
    }

}


const StyledLink = styled(Link)`
  position: relative;
  top: 33%;
  left: 12%;
  display: inline-block;
  padding: 30px 61px;
  border-radius: 4px;
  color: #F4910ECC;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 0.5px #282c34;
  text-align: center;
  overflow: hidden;
  margin: 25px;
  font-size: 2rem;
  font-family: 'Helvetica Neue', sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid #F4910ECC;
  transition: all 0.1s linear;
  &:hover {
    border: 1px solid transparent;
    transform: scale(1.1);
    background: #F4910ECC;
    color: lightslategrey;
    text-shadow: none;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0;
    right: 0;
    left: 50%;
    top: 0;
    width: 25%;
    font-size: 2rem;
    border: none;
  }
`;

export default GoogleApiWrapper({
    apiKey: 'PLACE YOUR APIKEY HERE'
})(Location);

