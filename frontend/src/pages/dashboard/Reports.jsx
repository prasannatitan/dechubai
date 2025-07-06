import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Layout from "../../dashboard/Layout";
import 'remixicon/fonts/remixicon.css'
import axios from "axios";
import { toast } from "react-toastify";
import Uploadbox from "../../component/uploadBox";

const test = () => {
  const [folders, setFolders] = useState([{
    name: "",
    count: 0
}]);
  const [name, setName] = useState("");
  const [filecount, setFilecount] = useState(0);
  const [description, setDescription] = useState("");
  const [popopen, setPopopen] = useState(false);
  const [cfolder, setCfolder] = useState(false);

  const folderpanel = useRef(null);
  const panel = useRef(null);
  const navigate = useNavigate();

  const fatchFolder = async () => {
    try {
     
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/files/filefolder`);
      if (data.sucess) {
        
      setFolders(data.fileFolders.map(folder => ({
  name: folder.name,
  count: folder.fileUrls.length
})));

      
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error fetching folders: " + error.message);
    }
  }


  useEffect(() => {
    fatchFolder();
  }, []);



  const handelcreateFolder = async (e) => {
    e.preventDefault();
    const namedata = {
      name: name,
      description: description
    }
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/files/filefolder`, namedata);
      if (data.sucess) {
        setCfolder(false);
        toast.success("Folder created successfully");
        setName("");
        fatchFolder();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  }





  useGSAP(function () {
    if (popopen) {
      gsap.to(panel.current, {
        opacity: 1,
        display: "flex",
        position: "fixed",
        zIndex: 1000,
      })
    } else {
      gsap.to(panel.current, {
        opacity: 0,
        display: "none",
      })
    }
  }, [popopen])

  useGSAP(function () {
    if (cfolder) {
      gsap.to(folderpanel.current, {
        opacity: 1,
        display: "flex",
        position: "fixed",
        zIndex: 1000,
      })
    } else {
      gsap.to(folderpanel.current, {
        opacity: 0,
        display: "none",
      })
    }
  }, [cfolder])

 


  const handelsubmit = (e) => {
    e.preventDefault();
  }

  const foldersubmit = async (e) => {
    e.preventDefault();


  }
  return (
    <Layout>
      <div className="p-6">
        <div className="flex mb-5 justify-between items-center">
          <h3 className="text-2xl font-semibold text-[#200047] ">Project Folders</h3>

          <div className=" flex justify-center">
            <button
              onClick={() => setPopopen(true)}
              className="bg-black hover:bg-purple-700 text-white px-8 py-2 rounded-2xl shadow-md transition-all"
            >
              Upload Files
            </button>
            <div ref={panel} className="opacity-0 h-screen hidden w-screen left-0 bg-[oklch(0_0_0/0.57)] absolute top-0 p-30 justify-center items-center">
              <div className="bg-white p-7  rounded-2xl relative">
                <i onClick={() => setPopopen(false)} className="cursor-pointer z-2 absolute top-3 right-3 ri-close-large-line"></i>
                <Uploadbox folder={folders} setPopopen={setPopopen}/>
              </div>
            </div>
          </div>


        </div>
        <div className="grid grid-cols-3 flex-wrap gap-4">
          {folders.map((folder, i) => (
            <Link to={`/dashboard/reports/files/${encodeURIComponent(folder.name)}`} key={i}>
              <div
                key={i}
                className="relative bg-white shadow-md p-4 rounded-xl w-full h-[100px] hover:scale-105 transition-all cursor-pointer"

              >

                <div onClick={async (e) => {
                   e.stopPropagation();
                  e.preventDefault();
                  const{data} = await axios.delete(`${import.meta.env.VITE_BASE_URL}/files/filefolder/${encodeURIComponent(folder.name)}`);
                  if(data.sucess){
                    toast.success("Folder deleted successfully");
                  }else{
                    toast.error(data.message);
                  }
                  fatchFolder();
                 
                 
                }} className="absolute top-[10px] opacity-80 right-[10px] flex flex-col  gap-1 hover:bg-gray-200 hover:rounded-full w-fit h-fit px-2 py-1">
                <i className="ri-delete-bin-6-line"></i>
                </div>

              


                <p className="text-sm text-gray-500">Shared File: {folder.count}</p>
                <h2 className="text-xl font-semibold text-purple-900">{folder.name}</h2>
                <p className="text-sm text-gray-500">Shared Folder with You</p>
              </div>
            </Link>
          ))}
          <div className="border-2 border-dashed border-white w-full h-[100px] rounded-xl p-2 cursor-pointer" onClick={() => setCfolder(true)}>
            <div className="border-dashed border-gray-700 border-1 rounded-[8px] w-full h-full flex flex-col justify-center items-center">
              <i className="text-[25px] h-[32px] opacity-70 ri-folder-add-line"></i>
              <p className="opacity-80 text-sm font-medium">Create new Folder</p>
            </div>
          </div>
        </div>

        {/* folder popup */}


        <div ref={folderpanel} className="opacity-0 h-screen hidden w-screen bg-[oklch(0_0_0/0.57)] absolute left-0 top-0 p-30 justify-center items-center">
          <div className="bg-white p-7 max-w-[500px] w-full relative rounded-xl">
            <i onClick={() => setCfolder(false)} className="cursor-pointer absolute top-2 right-3 ri-close-large-line"></i>
            <h3 className="text-center text-[20px] font-semibold ">Create a New Folder</h3>
            <form onSubmit={(e) => {
              handelcreateFolder(e)

            }} className="mt-5 flex flex-col items-center">

              <input className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Folder Name"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                required
                autoComplete="off"
              />
              <textarea className="mt-3 w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Folder Description"
                type="textarea"

                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}

                autoComplete="off"
              />
              <button className="cursor-pointer mt-3 bg-black rounded-md text-white text-[14px] px-9 py-[6px]" type="submit">Create</button>
            </form>
          </div>
        </div>
        {/* folder popup */}


      </div>
    </Layout>
  );
};

export default test;
