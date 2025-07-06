import {Link} from "react-router-dom"

const PageNotFound = ()=>{
    return(
        <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center" >
            <h1 className="text-[40px] text-gray-900 font-bold">404 Page Not Found</h1>
            <Link to="/" className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[10px] rounded-[10px] text-[18px] max-md:text-[17px] max-sm:text-[16px] max-md:py-[8px] max-md:px-8">Go Back to Homepage</Link>
        </div>
    )
}

export default PageNotFound;