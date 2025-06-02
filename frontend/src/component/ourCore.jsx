


const ourCore = (props) => {
    return (
        <div className="flex xl:gap-20 max-md:flex-col gap-10">
            <div className="lg:w-[52%] flex justify-center items-center">
                <img className="rounded-3xl" src={props.img} alt="" />
            </div>
            <div className="lg:w-[48%] flex flex-col justify-center items-start">
                <div className="mb-3 p-[2px] inline-block rounded-[19px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]">
                    <div className="bg-white rounded-[17px]">
                        <div className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent text-[16px] font-medium px-7 py-[6px]">{props.btn}</div>
                    </div>
                </div>
                <h3 className="text-[37px] font-bold text-[#380A71] mb-2 max-lg:text-[29px] max-md:text-[24px]">{props.title}</h3>
                <p className="text-[#4F4F4F] lg:font-semibold font-medium lg:text-[15px] text-[14px] lg:leading-[25px] leading-[20px] xl:pr-23">{props.text}</p>
                <div className="flex flex-wrap xl:gap-4 gap-3 mt-5 xl:pr-20">
                    {props.point.map((item, index) => {
                        return (
                            <div key={index} className="gap-2  border-1 rounded-full p-2 px-[12px] inline-block">
                                <div className="flex justify-start items-center gap-[10px]">
                                    <div className="border-[rgba(96,57,143,0.18)] border-1 bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center">
                                        <img className="w-[17px]" src={item.icon} alt="" />
                                    </div>
                                    <p className="text-[#000] text-[14px] font-semibold">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ourCore  