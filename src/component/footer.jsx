
import { useState, useRef, useEffect } from "react"
import dechubai from '../assets/dechub logo.png'

const Footer = () => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const dropdownRef = useRef(null)

    const options = [
        { value: "Web Development", label: "Web Development" },
        { value: "SEO", label: "SEO" },
        { value: "UI/UX", label: "UI/UX" }
    ]
    const formHander = (e) => {
        e.preventDefault()
        console.log(email, phone, selected)
    }
    const handleSelect = (option) => {
        setSelected(option)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
            <footer className="bg-[#000]">
                <div className="max-w-[1440px] md:p-10 md:pb-4 p-5 mx-auto">
                    <div className='p-5 rounded-3xl flex flex-col items-center justify-center w-full bg-[linear-gradient(119.59deg,_#3E0F77_22.24%,_#FFB3B3_115.05%,_#211331_135.87%)] animate-water'>
                        <img className="drop-shadow-[2px_2px_22.3px_rgba(255,200,200,0.71)] h-[70px] w-[70px]" src={dechubai} alt="dechub logo" />
                        <h3 className="text-center font-semibold lg:text-[32px] text-white mt-4 leading-[27px] text-[23px]">Stay Updated with AI Growth Hacks</h3>

                        <form onSubmit={(e) => {
                            formHander(e)
                        }} className="mt-10 mb-5 flex flex-col gap-6 items-center">
                            <div className="flex flex-wrap justify-center gap-5 ">
                                <input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} className="bg-[rgba(255,255,255,0.21)] placeholder-[rgba(255,255,255,0.62)] rounded-3xl outline-none px-7 py-2 cursor-pointer" type="email" placeholder="Email Address" />
                                <input value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} className="bg-[rgba(255,255,255,0.21)] placeholder-[rgba(255,255,255,0.62)] rounded-3xl outline-none px-7 py-2 cursor-pointer" type="tel" placeholder="Phone Number" />
                                <div ref={dropdownRef} className="relative w-64">
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="bg-[rgba(255,255,255,0.21)] rounded-3xl outline-none px-7 cursor-pointer py-2 text-[rgba(255,255,255,0.62)] flex justify-between items-center"
                                    >
                                        {selected ? selected.label : "Specify your Service"}<i className="border-2 rounded h-[20px] w-[20px] text-[15px] ri-arrow-down-s-line"></i>
                                    </div>

                                    {isOpen && (
                                        <div className="absolute z-10 w-full mt-1 shadow rounded-xl overflow-hidden">
                                            {options.map((option) => (
                                                <div
                                                    key={option.value}
                                                    onClick={() => handleSelect(option)}
                                                    className="px-4 py-2 bg-[rgba(255,255,255,0.21)] text-[rgba(255,255,255,0.62)] outline-none px-7 py-2 cursor-pointer"
                                                >
                                                    {option.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input className="cursor-pointer bg-black text-white rounded-[17px] py-2 px-10" type="submit" />
                        </form>
                    </div>

                    <div className="md:flex p-10 max-md:p-5">
                        <div className="sm:flex sm:flex-row flex-col flex md:w-[65%] sm:gap-0 gap-10">
                            <div className="sm:w-[55%] w-[100%] lg:pr-35 sm:pr-20 pr-0 ">
                                <img className="drop-shadow-[2px_2px_22.3px_rgba(255,200,200,0.71)] h-[70px] w-[70px] mb-3" src={dechubai} alt="" />
                                <h2 className="font-bold text-[24px] leading-[32px] bg-gradient-to-r from-[#E6AEEE] to-[#FFB3B3] bg-clip-text text-transparent">Dechub.ai</h2>
                                <p className="text-white leading-[23px] mt-2 text-[15px]">A dedicated to bringing AI-powered solutions to businesses and brands. With a focus on efficiency, personalization, and business growth, we aim to help companies stay ahead in a fast-evolving market.</p>
                            </div>

                            <div className="sm:w-[30%] w-[100%]">
                                <h2 className="text-white text-[24px] pt-2 font-bold">Quick Links</h2>
                                <ul className="mt-5 flex flex-col gap-[7px]">
                                    <li className="text-white">About Us</li>
                                    <li className="text-white">Contact Us</li>
                                    <li className="text-white">Products</li>
                                    <li className="text-white">For Industries</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sm:flex sm:flex-row flex-col flex md:w-[35%] sm:gap-0 gap-10 md:mt-0 mt-10">
                            <div className="sm:w-[70%] pr-10">
                                <h2 className="text-white text-[24px] pt-2 font-bold">Contact</h2>
                                <div className="flex items-center gap-2 mt-5">
                                    <svg width="17px" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.66025 1.98518L1.86365 2.18436C1.92138 3.6765 2.22871 5.04694 2.74698 6.26501L4.10418 4.63911C4.33031 4.34814 4.34931 4.31136 4.35865 4.2857C4.37451 4.24203 4.38105 4.19553 4.37791 4.14918C4.37605 4.12166 4.36778 4.0805 4.22705 3.7285L3.75325 2.54401C3.65751 2.30476 3.59925 2.1603 3.54738 2.05487C3.52338 2.00604 3.50631 1.97742 3.49478 1.9604C3.48451 1.94528 3.47945 1.94048 3.47885 1.93989C3.43225 1.89565 3.37385 1.86578 3.31071 1.85392C3.30991 1.85376 3.30298 1.85244 3.28471 1.85299C3.26418 1.85362 3.23098 1.85654 3.17731 1.86566C3.06151 1.88534 2.91025 1.92268 2.66025 1.98518ZM3.40765 7.55421L5.13518 5.48466C5.14011 5.47877 5.14491 5.4728 5.14965 5.46674C5.16278 5.44984 5.17598 5.43296 5.18911 5.41608C5.35452 5.20428 5.52085 4.99132 5.61178 4.74111C5.69111 4.52279 5.72391 4.29028 5.70818 4.05853C5.69005 3.79292 5.58918 3.54226 5.48891 3.29294C5.48091 3.27306 5.47291 3.25319 5.46498 3.23332L4.98298 2.02836C4.89811 1.81614 4.82098 1.6233 4.74378 1.46635C4.66045 1.29688 4.55625 1.12434 4.39705 0.973142C4.16425 0.751955 3.87245 0.602755 3.55678 0.543489C3.34098 0.502975 3.14011 0.519529 2.95391 0.551169C2.78151 0.580475 2.57998 0.630862 2.35825 0.686309C2.35118 0.688089 2.34405 0.689869 2.33692 0.691655L1.02531 1.0196C0.728514 1.0938 0.520382 1.36045 0.520382 1.66635C0.520382 3.95254 1.04525 6.03114 2.00691 7.79361C2.01071 7.80081 2.01465 7.80801 2.01871 7.81514C2.52431 8.73694 3.14971 9.57194 3.88218 10.3044C4.71105 11.1333 5.67111 11.825 6.73978 12.3613C6.74765 12.3653 6.75551 12.3693 6.76351 12.3731C8.44423 13.2116 10.3924 13.6663 12.5204 13.6663C12.8263 13.6663 13.093 13.4581 13.1671 13.1613L13.4949 11.8496L13.5002 11.8283C13.5557 11.6065 13.606 11.4051 13.6354 11.2326C13.667 11.0464 13.6835 10.8455 13.643 10.6297C13.5838 10.3141 13.4346 10.0223 13.2134 9.78948C13.0622 9.63028 12.8896 9.52608 12.7202 9.44274C12.5632 9.36554 12.3704 9.28841 12.1581 9.20354L11.0807 8.77254C11.0579 8.76341 11.035 8.75421 11.0122 8.74501C10.7287 8.63094 10.4441 8.51634 10.1456 8.50714C9.88542 8.49921 9.62701 8.55221 9.39105 8.66208C9.12024 8.78808 8.90379 9.00548 8.68819 9.22208C8.67145 9.23888 8.65471 9.25568 8.63795 9.27241L6.93045 10.9531C6.14805 10.5142 5.44285 9.97941 4.82505 9.36161C4.28665 8.82328 3.81138 8.21854 3.40765 7.55421ZM8.21518 11.5593C9.3585 12.0053 10.6288 12.2699 12.0023 12.3231L12.2013 11.5263C12.2638 11.2763 12.3012 11.125 12.3209 11.0092C12.33 10.9555 12.3329 10.9223 12.3335 10.9018C12.3341 10.8835 12.3328 10.8767 12.3326 10.8759C12.3208 10.8127 12.2909 10.7543 12.2467 10.7077C12.2463 10.7073 12.2416 10.7022 12.2261 10.6917C12.2091 10.6802 12.1805 10.6631 12.1317 10.6391C12.0262 10.5873 11.8818 10.529 11.6425 10.4333L10.5855 10.0105C10.1832 9.84954 10.1352 9.84081 10.1046 9.83988C10.0526 9.83827 10.0009 9.84888 9.95369 9.87088C9.92593 9.88374 9.88529 9.91074 9.57889 10.2171L9.57515 10.2209L8.21518 11.5593Z" fill="white" />
                                    </svg>
                                    <p className="text-white">+91 123-456-7890</p>
                                </div>
                                <div className="flex items-center gap-2 mt-5">
                                    <svg width="16" height="19px" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 3.66602L12.5327 5.31453C10.8783 6.2336 10.0512 6.69318 9.17517 6.87335C8.39983 7.03277 7.60017 7.03277 6.82483 6.87335C5.94887 6.69318 5.12169 6.2336 3.46733 5.31453L0.5 3.66602M3.16667 12.8327H12.8333C13.7667 12.8327 14.2335 12.8327 14.59 12.651C14.9036 12.4913 15.1586 12.2363 15.3183 11.9227C15.5 11.5662 15.5 11.0994 15.5 10.166V3.83268C15.5 2.89927 15.5 2.43255 15.3183 2.07603C15.1586 1.76242 14.9036 1.50746 14.59 1.34767C14.2335 1.16602 13.7667 1.16602 12.8333 1.16602H3.16667C2.23325 1.16602 1.76653 1.16602 1.41002 1.34767C1.09641 1.50746 0.841442 1.76242 0.681658 2.07603C0.5 2.43255 0.5 2.89926 0.5 3.83268V10.166C0.5 11.0994 0.5 11.5662 0.681658 11.9227C0.841442 12.2363 1.09641 12.4913 1.41002 12.651C1.76653 12.8327 2.23324 12.8327 3.16667 12.8327Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <p className="text-white">hello@dechub.ai</p>
                                </div>
                                <div className="flex items-start gap-2 mt-5">
                                    <svg className="mt-1" width="16px" height="21" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 16.375C10.5625 13.225 13.625 10.4043 13.625 6.925C13.625 3.44561 10.8827 0.625 7.5 0.625C4.11726 0.625 1.375 3.44561 1.375 6.925C1.375 10.4043 4.4375 13.225 7.5 16.375Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 8.5C8.46652 8.5 9.25 7.71652 9.25 6.75C9.25 5.7835 8.46652 5 7.5 5C6.53347 5 5.75 5.7835 5.75 6.75C5.75 7.71652 6.53347 8.5 7.5 8.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-white">4th cross, J.P Nagar, Bangalore India</p>
                                </div>
                            </div>

                            <div className="sm:w-[30%]">
                                <div className="flex md:flex-col gap-5 md:justify-end items-end mb-4">
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-2 flex justify-center items-center"><svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4339 0.443497C21.3709 0.681777 22.1097 1.37958 22.362 2.26468C22.8304 3.88158 22.8124 7.25148 22.8124 7.25148C22.8124 7.25148 22.8124 10.6044 22.362 12.2213C22.1097 13.1064 21.3709 13.8042 20.4339 14.0425C18.7221 14.468 11.875 14.468 11.875 14.468C11.875 14.468 5.04582 14.468 3.31601 14.0254C2.37896 13.7872 1.64028 13.0893 1.38793 12.2043C0.9375 10.6044 0.9375 7.23448 0.9375 7.23448C0.9375 7.23448 0.9375 3.88158 1.38793 2.26468C1.64028 1.37958 2.39706 0.664756 3.31601 0.426476C5.02783 0.000976503 11.875 0.000976562 11.875 0.000976562C11.875 0.000976562 18.7221 0.000976712 20.4339 0.443497ZM15.3886 7.23438L9.69466 10.332V4.13668L15.3886 7.23438Z" fill="#E6AEEE" />
                                    </svg>
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-2 flex justify-center items-center">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.1262 3.75098C13.3737 3.75098 13.5998 3.84348 13.7721 3.99598C13.9757 4.17618 14.1042 4.44028 14.1042 4.73458C14.1042 5.27778 13.6663 5.71818 13.1262 5.71818C12.6918 5.71818 12.3236 5.43338 12.196 5.03938C12.165 4.94338 12.1482 4.84098 12.1482 4.73458C12.1482 4.19138 12.5861 3.75098 13.1262 3.75098ZM5.06364 0.885498C4.14628 0.927508 3.51936 1.07381 2.97189 1.28805C2.40493 1.50929 1.92487 1.8061 1.44531 2.28769C0.965654 2.76928 0.671238 3.25278 0.451294 3.82298C0.238212 4.37388 0.092744 5.00398 0.0509827 5.92658C0.00852528 6.85068 -0.0012207 7.14608 -0.0012207 9.49968C-0.0012207 11.8533 0.00852528 12.1487 0.0509827 13.0728C0.092744 13.9955 0.238212 14.6255 0.451294 15.1764C0.671238 15.7463 0.965753 16.2303 1.44531 16.7117C1.92487 17.1931 2.40493 17.4895 2.97189 17.7113C3.52036 17.9256 4.14628 18.0719 5.06364 18.1139C5.98299 18.1559 6.27631 18.1664 8.61663 18.1664C10.9569 18.1664 11.2507 18.1566 12.1695 18.1139C13.087 18.0719 13.7135 17.9256 14.2613 17.7113C14.8279 17.4895 15.3083 17.1933 15.7879 16.7117C16.2675 16.2301 16.5612 15.7463 16.7819 15.1764C16.995 14.6255 17.1411 13.9954 17.1822 13.0728C17.2239 12.148 17.2337 11.8533 17.2337 9.49968C17.2337 7.14608 17.2239 6.85068 17.1822 5.92658C17.1404 5.00388 16.995 4.37348 16.7819 3.82298C16.5612 3.25308 16.2667 2.77005 15.7879 2.28769C15.309 1.80534 14.8279 1.50929 14.262 1.28805C13.7135 1.07381 13.0869 0.926818 12.1702 0.885498C11.2514 0.843478 10.9576 0.833008 8.61723 0.833008C6.27701 0.833008 5.98299 0.842788 5.06364 0.885498ZM11.8024 9.49768C11.8024 11.2685 10.375 12.7041 8.61425 12.7041C6.85351 12.7041 5.42616 11.2685 5.42616 9.49768C5.42616 7.72688 6.85351 6.29138 8.61425 6.29138C10.375 6.29138 11.8024 7.72688 11.8024 9.49768ZM13.1282 9.49768C13.1282 12.0049 11.1072 14.0374 8.61425 14.0374C6.1213 14.0374 4.10034 12.0049 4.10034 9.49768C4.10034 6.99048 6.1213 4.95798 8.61425 4.95798C11.1072 4.95798 13.1282 6.99048 13.1282 9.49768Z" fill="#E6AEEE" />
                                        </svg>

                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-2 flex justify-center items-center">
                                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9271 0H15.3662L10.0366 6.3539L16.3068 15H11.3979L7.55282 9.7561L3.15296 15H0.711911L6.41234 8.2039L0.397705 0H5.43094L8.90708 4.793L12.9271 0ZM12.071 13.4769H13.4223L4.69713 1.44319H3.24642L12.071 13.4769Z" fill="#E6AEEE" />
                                        </svg>

                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-2 flex justify-center items-center">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3824 8.49838C17.3824 3.89838 13.6696 0.165039 9.09578 0.165039C4.52192 0.165039 0.81012 3.89838 0.81012 8.49838C0.81012 12.5317 3.66084 15.8901 7.43925 16.6651V10.9984H5.78171V8.49838H7.43925V6.41508C7.43925 4.80668 8.73982 3.49838 10.3387 3.49838H12.4108V5.99838H10.7533C10.2979 5.99838 9.92504 6.37338 9.92504 6.83168V8.49838H12.4108V10.9984H9.92504V16.7901C14.1091 16.3734 17.3824 12.8234 17.3824 8.49838Z" fill="#E6AEEE" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-md:flex-col px-10 md:justify-between justify-center max-lg:items-center max-lg:gap-5 mt-5 mb-4">
                        <div className="flex gap-10"><p className="text-white font-light">Privacy Policies</p><p className="text-white font-light">Terms of Use</p></div>
                        <div><p className="text-white font-light">Copyright dechub.ai</p></div>
                    </div>
                </div>
            </footer>
        
    )
}

export default Footer;