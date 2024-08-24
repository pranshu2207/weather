import { useState } from "react";

import { IoSearchSharp } from "react-icons/io5";
import Spinner from "./Spinner";
import Info from "./Info";
import Error from "./Error";

function Searchweather(){
    const API_key = "33ee56d27047a95962f8e3f9fe6d5488";
  const [city,setCity] = useState("");
  const [clicked,setClicked] =useState(true);
  const [loading,setLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  function changeHandler(event){
    const value = event.target.value;
    setCity(value);
    console.log(value);
  }
  
  async function fetchweatherData(){
    setLoading(true);
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
      const data = await res.json();
      setWeather(data);
      if (data.cod === "404"){
        setWeather([]);
      }
      console.log(data);
    }
    catch(error){
      console.log("Somthing went wrong");
      setWeather([]);
    }
    setLoading(false);
  }
  function clickHandler(){
    fetchweatherData();
    setClicked(false);
  }
    return(
        <div>
            <div className="flex justify-center items-center mt-20 gap-2">
                <input type="text" value={city} placeholder="Enter the city.." className="search lg:w-1/4 sm: w-2/4" onChange={changeHandler}/>
                <div className="bg-[#3F72AF] rounded-full w-[40px] h-[40px] flex justify-center items-center" onClick={clickHandler}><IoSearchSharp className="h-[30px] w-[30px]"/></div>
            </div>
            <div>
                {
                    clicked ? (<div></div>) : (
                        loading ? (<Spinner/>) : (
                            weather.length !== 0 ? (<Info weather={weather}/>) : 
                            (<Error/>)
                        )
                    )
                }
            </div>
        </div>
        
    )
}
export default Searchweather;