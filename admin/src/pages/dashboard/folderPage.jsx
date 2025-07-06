
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../dashboard/Layout";
import { Download } from "lucide-react";
import axios from "axios";

const folderPage = () => {
    const { foldername } = useParams();
    const [fileUrls, setFileUrls] = useState([]);

    useEffect(() => {
        const fetchfile = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/files/get/${foldername}`);
                setFileUrls(data.fileUrls);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        }


        fetchfile();
    }, [foldername]);

    const handleDownload = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop().split("?")[0]; // Extract file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


    return (
        <Layout>
            <div>

                <div className="px-4 py-8 ">
                    <h1 className="text-2xl font-bold text-center mb-8">Uploaded Files</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {fileUrls?.map((fileUrl, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
                            >
                                <div className="p-3 flex justify-between items-center">
                                    <span className="text-sm font-medium truncate">
                                        Logo Image{String(index + 1).padStart(2, "0")}.jpg
                                    </span>

                                    <button
              onClick={() => handleDownload(fileUrl)}
              className="text-gray-600 hover:text-black"
              title="Download"
            >
              <Download size={18} />
            </button>
                                </div>

                                <img
                                    src={fileUrl}
                                    alt={`File ${index}`}
                                    className="w-full h-40 object-contain bg-[#fce6d0]"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </Layout>


    )
}

export default folderPage;