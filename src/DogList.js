import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DogList.css';

export default class DogList extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-3 mb-5">Dog List</h1>
        <div className="row">
          {this.props.dogs.map(d => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
              <Link exact to={`/dogs/${d.name}`}>
                <img src={d.src} alt={d.name} />
                <h3 className="underline">{d.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
