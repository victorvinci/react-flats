import React from 'react';

const Flat = (props) => {
  const selectFlatFunction = () => {
    props.selectFlat(props.lat)
  }


  return (  
    <div className="card" onClick={selectFlatFunction}>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-price">{props.price} {props.currency}</p>
      <img className="card-img" alt="" src={props.imageUrl}></img>
      <a className="card-link" href="#"></a>
    </div>
   );
}
 
export default Flat;