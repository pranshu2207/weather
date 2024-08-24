import notfound from "../images/notfound.png"
function Error(){
    return(
        <div className="lg:flex justify-center items-center mt-5 sm:mt-12">
            <img src={notfound} className="lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px]" alt="error"/>
        </div>
    )
}
export default Error;