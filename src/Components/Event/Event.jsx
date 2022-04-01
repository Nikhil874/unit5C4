// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Event = () => {
  let {id}=useParams();
let[data,setData]=useState({});
const [sub,setSub]=useState(false);
useEffect(()=>{
geteventData()
},[])
const geteventData=()=>{
  axios.get(`http://localhost:8080/meetups/${id}`).then((res)=>{
  setData(res.data);
  })
}
// const [sub,setSub]=useState(false);
const handleClick=(value)=>{
  // console.log(value?"true":"false")
  setSub(value?false:true);
  console.log(sub);
}
  return (
    <div className="eventContainer">
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
        <div className="title">{data.title} </div>
             <div className="theme">{data.theme} </div>
             <div className="description">{data.description} </div>
             <div className="date">{data.date} </div>
             <div className="time">{data.time} </div>
             <div className="location">{data.location} </div>
             <div className="image"> <img src={data.image} alt="" /></div>

             {sub? <button  onClick={(sub) => {handleClick (sub)}} className="unsubscribe">Unsubscribe</button>:<button className="subscribe" onClick={(sub) => {handleClick (sub)}}>Subscribe</button>}
     
      
    </div>
  );
};
