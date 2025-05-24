import { Link } from "react-router-dom";

const ImgCont = (props) => {
    const words = props.title.trim().split(' ')
    const last = words.pop()
    const first = words.join(' ')
    return (
        <div className="md:flex lg:gap-23 gap-10">
            <div className="md:w-[55%] flex justify-center items-center">
                <img className="rounded-[20px]" src={props.img} alt="" />
            </div>
            <div className="md:w-[45%] max-md:mt-7 flex flex-col justify-center items-start lg:gap-5 gap-3">
                <img src={props.icon} alt="icon" className="max-lg:w-[65px] lg:rounded-[16px] rounded-[13px]" style={{ boxShadow: '3px 4px 13px rgba(0,0,0,0.25)' }} />
                <h3>  {first && <span className="text-[#380A71] lg:text-[35px] text-[25px] font-bold">{first} </span>}
                    <span className="text-black lg:text-[35px] text-[25px] font-bold">{last}</span></h3>
                <p className="text-[#4F4F4F] lg:font-semibold font-medium lg:text-[15px] text-[14px] lg:leading-[25px] leading-[20px]">{props.text}</p>
                <Link className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[17px]" to={props.url}>Get Started</Link>
            </div>
        </div>
    )
}

export default ImgCont