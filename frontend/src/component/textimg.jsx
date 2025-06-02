import { Link } from "react-router-dom"

const textimg = (props) => {
    return (
        <>
            {props.textimgdata.map((items, idx) => {
                return (
                    <div key={idx} className="md:flex lg:gap-20 gap-10 kjs">
                        <div className="md:w-[52%] flex justify-center items-center">
                            <img className="rounded-[20px] w-full" src={items.img} alt="" />
                        </div>
                        <div className="md:w-[48%] max-md:mt-7 flex flex-col justify-center items-start lg:gap-5 gap-3">

                            <h3 className="text-[#380A71] lg:text-[37px] text-[25px] font-bold leading-[45px] max-lg:leading-[33px] max-w-[480px]">{items.title}</h3>
                            <p className="text-[#4F4F4F] lg:font-semibold font-medium lg:text-[15px] text-[14px] lg:leading-[25px] leading-[20px]">{items.text}</p>
                           <div className="flex gap-9 max-lg:gap-3 justify-between max-md:my-2">
                             {items.data && (
                                items.data.map((items, idx) => {
                                    return (
                                        <div key={idx} className="max-w-[150px] max-lg:min-w-[120px]">
                                            <div className="flex flex-col items-center justify-center">
                                            <h3 className="text-[#380A71] text-[35px] max-lg:text-[23px] font-bold">{items.number}</h3>
                                            <p className="text-center text-[#4F4F4F] lg:font-semibold font-medium lg:text-[15px] text-[14px] lg:leading-[23px] leading-[20px]">{items.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            )}
                           </div>

                            {items.url && (
                                <Link className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[17px]" to={items.url}>Know More</Link>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default textimg