import React from 'react';
import Map from './Map';
import { useMap } from '../context/MapContext';

function Main() {
  const { volts, power, luminosity, current } = useMap();

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>

        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">Voltage {volts} </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link">View Details</a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">Current {current}</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">Luminosity {luminosity}</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body">Power {power}</div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1" />
                Location
              </div>
              <div className="card-body">
                <div>
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1" />
                Battery Percentage
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
