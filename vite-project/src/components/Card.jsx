
import React from 'react';
import Nav from './nav';

function card({ data }) {
  console.log(data);

  return (
    <div className="card">
      <h3 className="card-header">Profile Card</h3>
      {data?.map((val, index) => (
        <div className="card-body" key={index}>
          <img src={val.img} alt="" className="card-img-top bg-danger" style={{ width: "300px", height: "300px" }} />
          <div className="card-text">
            <p>Name: {val.name}</p>
            <p>Age: {val.age}</p>
            <p>City: {val.city}</p>
            <p>Followers: {val.followers}</p>
            <p>Likes: {val.likes}</p>
            <p>Photos: {val.photos}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default card;
