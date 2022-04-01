// User should be able to add/create new meetups 

import axios from "axios";
import { useState } from "react";

export const AddMeetup = () => {
  const [data,setData]=useState({
    title:"",
    location:"",
    date:"",
    time:"",
    theme:"",
    description:"",
    image:"",
  })
  const handleChange=(event)=>{
    console.log(event.target.value)
    const {id,value}=event.target;
    setData({...data,[id]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/meetups",data).then((res)=>{
      console.log("data added")
    })
  }

  return (
    <div className="addMeetupContainer">
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" id="title" className="title" onChange={(event) => { handleChange(event)}} required />
        <label>Location</label>
        <select value={""} id="location" className="location" onChange={(event) => {handleChange(event) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input 
        id="date"
          type="text"
          className="date"
          onChange={(event) => { handleChange(event)}}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
        id="time"
          type="text"
          className="time"
          onChange={(event) => {handleChange(event) }}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={""} id="theme" className="theme" onChange={(event) => {handleChange(event) }}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
        id="description"
          type="text"
          className="description"
          onChange={(event) => {handleChange(event) }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
        id="image"
          type="text"
          className="image"
          onChange={(event) => { handleChange(event)}}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
