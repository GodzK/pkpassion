import React from 'react';

function Card({ data }) {
  console.log(data);

  return (
    <div>
      <h3>Profile Card</h3>
      {data?.map((val) => (
        <div >
         <img src ={val.img}  alt="" width="550px" height="550px"/>
         <p>Name :{val.name} </p>
         <p>Age :{val.age} </p>
         <p>City : {val.city} </p>
         <p>Followers:{val.followers} </p>
         <p>likes:{val.likes} </p>
         <p>photos:{val.photos} </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
