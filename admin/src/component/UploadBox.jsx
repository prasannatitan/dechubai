import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {auth} from '../firebase'

const uploadbox = (props) => {
    const user = auth.currentUser;
    const [files, setFiles] = useState([]);
    const [foldername, setFoldername] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFiles([...e.dataTransfer.files]);
    };

    const handelsubmit = async (e) => {
        e.preventDefault();
        if (!foldername) {
            toast.error("Please select a folder to upload files");
            return;
        } else {
             setUploading(true);
            const formDataToSend = new FormData();
            formDataToSend.append('title', "title");
            formDataToSend.append('postedBy', "postedBy");
            formDataToSend.append('foldername', foldername);
            formDataToSend.append('image', files[0]);

            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            if (data.success) {
                toast.success("Files uploaded successfully");
                setUploading(false);
                props.setPopopen(false);
                console.log(uploading)
                setFiles([]);
                setFoldername("");
            } else {
                toast.error(data.message);
            }

        }
    }
    return (
        <div className=" flex flex-col items-center justify-center bg-white p-4">
            <h2 className="text-2xl font-semibold mb-6">Upload Files</h2>

            <div className="flex gap-6 mb-6">
                {/* Left Upload Box */}
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="w-[250px] h-[250px] border-2 border-dashed border-black rounded-xl bg-gray-100 flex flex-col items-center justify-center p-4 text-center"
                >
                    <div className="text-4xl mb-4">📤</div>
                    <p className='text-sm'>Drag and Drop the files</p>
                    <p className="my-2 font-semibold">or</p>
                    <label className="bg-black text-white px-4 py-2 text-sm rounded-xl cursor-pointer">
                        Upload Files
                        <input
                            type="file"
                            name='image'
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                {/* Right Preview Box */}
                <div className="w-[250px] h-[250px] rounded-xl border border-gray-200 flex items-center justify-center text-sm text-gray-600">
                    {files.length === 0 ? (
                        <p>No Files Uploaded Yet</p>
                    ) : (
                        <ul className="text-left px-4 overflow-y-auto max-h-[90%] w-full">
                            {Array.from(files).map((file, index) => (
                                <li key={index} className="truncate">{file.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className='w-full'>
                <select required name="" id="" onChange={(e) => setFoldername(e.target.value)} className="text-sm pr-10 w-full h-[40px] border border-gray-300 rounded-md px-3 mb-4">
                    <option value="">Select Folder to Upload Files</option>
                    {props.folder?.map((folder, index) => {
                        return (
                            <option key={index} value={folder.name}>{folder.name}</option>
                        )
                    })
                    }
                </select>
            </div>
            {/* Save Button */}
            <button
            disabled={uploading}
                onClick={(e) => {handelsubmit(e)}}
                className={`${uploading ? "opacity-[30%]" : "opacity-[1]"} cursor-pointer bg-black text-white px-6 py-2 rounded-md`}
            >
                {uploading ? "Uploading..." : "save"}
            </button>
        </div>
    );
};

export default uploadbox;
