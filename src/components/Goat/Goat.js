import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    const { goat, freeAGoat } = this.props;
    e.preventDefault();
    freeAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="goat col-3">
        <div className="card">
          <img className="card-img-top" src={goat.imgUrl} alt="Goat Card"/>
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.beardLength}</p>
          </div>
          <div className="card-footer">
            {
              goat.isBusy ? (
                <button className="btn btn-danger" onClick={this.freeGoatEvent}>Free the Goat</button>
              ) : (
                <button className="btn btn-dark" onClick={this.useGoatEvent}>Use the Goat</button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
