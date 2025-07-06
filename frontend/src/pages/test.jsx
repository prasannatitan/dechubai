import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useDropzone } from 'react-dropzone';
import { FaImage } from 'react-icons/fa';

const test = () => {
    const [folders, setFolders] = useState(["Branding", "Digital Experience", "Cyber Security"]);
    const [popopen, setPopopen] = useState(false);
    const panel = useRef(null);
    const navigate = useNavigate();

   

    const handelcreateFolder = async (name) => {
        try {
            await axios.post(`${import.meta.env.VITE_BASE_URL}/filefolder`, { name });
        } catch (error) {
            console.log("Error creating folder:", error);
        }
    }

    


    useGSAP(function () {
        if (popopen) {
            gsap.to(panel.current, {
              opacity:1,
              display: "flex",
              position: "fixed",
              zIndex: 1000,
            })
        }else{
            gsap.to(panel.current, {
                opacity:0,
                display: "none",
            })
        }
    },[popopen])

    const handelsubmit = (e) => {
        e.preventDefault();
    }

   
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-300 via-purple-100 to-gray-300 p-6">
            <div className="flex flex-wrap gap-4">
                {folders.map((folder, i) => (
                    <div
                        key={i}
                        className="relative bg-white shadow-md p-4 rounded-xl w-[280px] hover:scale-105 transition-all cursor-pointer"
                        onClick={() => navigate(`/${encodeURIComponent(folder)}`)}
                    >
                        <p className="text-sm text-gray-500">Shared File: 26</p>
                        <h2 className="text-xl font-semibold text-purple-900">{folder}</h2>
                        <p className="text-sm text-gray-500">Shared Folder with You</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={()=> setPopopen(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow-md transition-all"
                >
                    + Add New Folder
                </button>

                <div ref={panel} className="opacity-0 h-screen hidden w-screen bg-[oklch(0_0_0/0.57)] absolute top-0 p-30 justify-center items-center">
                    <div className="bg-white p-7 max-w-[400px]">
                       
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default test;
