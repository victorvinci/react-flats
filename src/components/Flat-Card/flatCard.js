import React from 'react';

const Flat = (props) => {
  const selectFlatFunction = () => {
    props.selectFlat(props.index)
  }


  return (  
    <div className={`card${props.selected ? ' active' : ''}`} onClick={selectFlatFunction}>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-price">{props.price} {props.currency}</p>
      <img className="card-img" alt="" src={props.imageUrl}></img>
      <a className="card-link" href="#"></a>
    </div>
   );
}
 
export default Flat;