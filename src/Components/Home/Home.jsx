import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const user=useSelector((store)=>store.user);
  const userobj=JSON.parse(localStorage.getItem("userLoginDetails"))
  console.log("home",userobj)
  // console.log("arr",userobj.interests)
  let toggle;
  if(userobj==null){
    toggle=false;
  }else{
    toggle=true;
  }
  const [data,setData]=useState([]);
useEffect(()=>{
getData();
},[]);

const getData=()=>{
  axios.get("http://localhost:8080/meetups").then((res)=>{
    setData([...res.data])
  })
}
  return (
    <div className="homeContainer">
      <div className="flex" >
      {data
        .filter((el) => { 
          // console.log(el.interests)
          if(userobj==null){
            return true;
          }
            if(userobj.interests.includes(el.theme)){
              return true;
            }
          }
       

        ).filter((e)=>{
          if(userobj==null){
            return true;
          }
          if(userobj.location==e.location){
            return true;
          }

        }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`/meetup/${el.id}`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
             <div className="title">{el.title} </div>
             <div className="theme">{el.theme} </div>
             <div className="description">{el.description} </div>
             <div className="date">{el.date} </div>
             <div className="time">{el.time} </div>
             <div className="location">{el.location} </div>
             <div className="image"> <img src={el.image} alt="" /></div>

            </Link>
          );
        })}
        </div>
{toggle? <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={"/addmeetup"}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div> :""}
     
    </div>
  );
};
