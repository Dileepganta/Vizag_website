import React from 'react';
import '../styles/District.css'
function DistrictInfo({ data }) {
  return (
    <div className="district-info">
      <h3 className="district-title">
        <i className="fas fa-chart-area"></i> District at a Glance
      </h3>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-map-marked-alt"></i>
          <span className="label">Area</span>
          <span className="value">{data.area}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-users"></i>
          <span className="label">Population</span>
          <span className="value">{data.population}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-book-reader"></i>
          <span className="label">Literacy Rate</span>
          <span className="value">{data.literacyRate}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-building"></i>
          <span className="label">Revenue Division</span>
          <span className="value">{data.revenueDiv}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-landmark"></i>
          <span className="label">Mandals</span>
          <span className="value">{data.mandals}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-home"></i>
          <span className="label">Villages</span>
          <span className="value">{data.villages}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-city"></i>
          <span className="label">Municipal Corporations</span>
          <span className="value">{data.corporations}</span>
        </div>
        <div className="info-item">
          <i className="fas fa-building"></i>
          <span className="label">Municipality</span>
          <span className="value">{data.municipality}</span>
        </div>
      </div>
    </div>
  );
}

export default DistrictInfo;