import React from 'react';

const Flat  = (props) => {
  return (  
    <div className="card">
      <h2 className="card-title">{props.name}</h2>
      <p className="card-price">{props.price} {props.currency}</p>
      <img className="card-img" alt="" src={props.imageUrl}></img>
      <a className="card-link" href="#"></a>
    </div>
   );
}
 
export default Flat;