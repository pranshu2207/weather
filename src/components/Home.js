import { useState } from "react";
import location from "../images/location.png";
import Spinner from "./Spinner";
import Info from "./Info";
import Error from "./Error";
function Home(){
    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
    const [userData, setuserData] = useState([]);
    const [locate, setLocate] = useState(0);
    const [loading,setLoading] = useState(false);
    async function fetchUserweather(lat,long){
        setLoading(true);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
            const data = await response.json();
            setuserData(data);
            if (data.cod === "404"){
                setuserData([]);
            }
            console.log(data);
        }
        catch(error){
            console.log("somthing is wrong");
            setuserData([]);
        }
        setLoading(false);
    }
    function getLocation(){
        setLocate(1);
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition( (position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                console.log(lat);
                console.log(long);
                fetchUserweather(lat,long);
            });
        }
        else{
            
        }
    }
    return(
        <div>
            {
                locate === 0 ? (
                    <div className="flex flex-col justify-center items-center mt-20 gap-4">
                        <div className="mb-3"><img src={location} className="w-[80px] h-[80px]" alt="images"/></div>
                        <p className="font-bold text-3xl">Grant Location Access</p>
                        <p>Allow access to get Weather Information</p>
                        <button onClick={getLocation} className="bg-[#3F72AF] px-[20px] py-[5px] rounded-[5px] text-white">GRANT ACCESS</button>
                    </div>
                ) : (
                    loading ? (<Spinner/>) : (
                        userData.length !== 0 ? (<Info weather={userData}/>) : (<Error/>)
                    )
                )
            }
        </div>
    )
}
export default Home;