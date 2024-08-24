import wind from "../images/wind.png";
import humidity from "../images/humidity.png";
import cloud from "../images/cloud.png";
function Info({weather}){
    const iconsrc = `https://flagcdn.com/144x108/${weather?.sys?.country.toLowerCase()}.png`;
    const weathericon = `https://openweathermap.org/img/w/${weather?.weather?.[0]?.icon}.png`;
    return(
        <div className="flex flex-col justify-center items-center mt-10 gap-4">
            <div className="flex gap-2">
                <div className="text-2xl font-semibold">{weather.name}</div>
                <div className="flex justify-center items-center">
                    <img src={iconsrc} alt="country" className="w-[20px] h-[20px]"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl">{weather.weather[0].description}</p>
                <img src={weathericon} alt="weather" className="w-[80px] h-[80px]"/>
            </div>
            <div className="text-3xl font-bold">
                {weather.main.temp}
            </div>
            <div className="flex gap-8 lg:h-[160px] lg:w-[400px] sm:gap-5 sm:w-[350px] sm:h-[130px]">
                <div className="flex flex-col card justify-center items-center">
                    <img src={wind} className="w-2/3" alt="wind"/>
                    <div>WINDSPEED</div>
                    <div>
                        {weather.wind.speed} m/s
                    </div>
                </div>
                <div className="flex flex-col card justify-center items-center">
                <img src={humidity} className="w-2/3" alt="humid"/>
                    <div>HUMIDITY</div>
                    <div>
                        {weather.main.humidity} %
                    </div>
                </div>
                <div className="flex flex-col card justify-center items-center">
                    <img src={cloud} className="w-2/3" alt="cloud"/>
                    <div>CLOUDS</div>
                    <div>
                        {weather.clouds.all} %
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;