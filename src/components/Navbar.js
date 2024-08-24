import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex flex-col justify-center items-center w-[100%] gap-20 ">
            <div className="font-bold text-4xl text-white mt-6">
                WEATHER APP
            </div>
            <div className="flex justify-between lg:w-1/3 font-semibold text-[20px] text-white sm: w-full px-5">
                <div><NavLink to="/">Your Weather</NavLink></div>
                <div><NavLink to="/search">Search Weather</NavLink></div>
            </div>
        </div>
    );
}
export default Navbar;