


const ImgComp = (props) => {
    return (
        <div className="hover:shadow-[0px_0px_7.3px_rgba(0,0,0,0.21)] rounded-xl max-lg:p-5 max-lg:pb-[13px] p-7 pb-3 w-[-webkit-fill-available] bg-[linear-gradient(100.47deg,rgba(255,255,255,0.21)-34.35%,rgba(245,177,255,0.21)32.86%,rgba(162,201,255,0.21)61.34%,rgba(174,110,253,0.21)98.74%)]">


            <div className="border-[#DCBFFF] border-1 rounded-[7px] w-[fit-content] p-[9px] bg-white block">
                <img className="w-13 max-md:w-10" src={props.img} alt="" />
            </div>

            <p className="mt-4 text-[#242424] text-[20px] max-md:text-[18px] font-semibold md:max-w-[200px]">{props.text}</p>

        </div>
    )
}


export default ImgComp;