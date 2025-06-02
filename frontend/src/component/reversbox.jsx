const reversebox = (props) => {


    return (
        <>
            {props.reverboc.map((items, idx) => {
                return (
                    <div key={idx} className="md:flex ghf rounded-3xl overflow-hidden bg-[linear-gradient(180deg,#F5EEFF_0%,#FCF9FE_100%)] shadow-[0px_4px_19.5px_rgba(0,0,0,0.15)]">
                        <div className="md:w-[50.2%] flex justify-center items-center">
                            <img className="object-cover w-full h-full" src={items.img} alt="" />
                        </div>
                        <div className="md:w-[49.9%] max-md:mt-2  flex flex-col justify-center items-start lg:gap-5 gap-3 px-15 max-lg:px-7 py-7">
                            <img src={items.icon} alt="icon" className=" lg:rounded-[16px] rounded-[13px] max-lg:w-[50px] " />
                            <h3 className="text-[#380A71] xl:text-[35px] font-bold max-xl:leading-[30px] max-xl:text-[23px]"> {items.title}</h3>
                            <p className="text-[#4F4F4F] lg:font-semibold font-medium lg:text-[15px] text-[14px] lg:leading-[25px] leading-[20px]">{items.text}</p>
                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default reversebox