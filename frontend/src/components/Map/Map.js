import React, { Component } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "./Map.css";

import * as schoolsData from "../../sample_data/schools.json";

class MapObj extends Component {
  state = {
    center: [-1.292066, 36.821945],
    zoom: 13,
    activeSchool: null,
  };
  render() {
    return (
      <div id="mapid">
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {schoolsData.features.map((school) => (
            <Marker
              key={school.slug}
              position={[
                school.geometry.coordinates[0][1],
                school.geometry.coordinates[0][0],
              ]}
              onClick={() => {
                this.setState({
                  activeSchool: school,
                });
              }}
            />
          ))}

          {this.state.activeSchool && (
            <Popup
              position={[
                this.state.activeSchool.geometry.coordinates[0][1],
                this.state.activeSchool.geometry.coordinates[0][0],
              ]}
              onClose={() => {
                this.setState({
                  activeSchool: null,
                });
              }}
            >
              <div>
                <h4>{this.state.activeSchool.properties.name}</h4>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    );
  }
}

export default MapObj;
