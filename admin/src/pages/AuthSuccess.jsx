import { useEffect } from "react";
import axios from "axios";
import { useAuth } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const authsuccess = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const handelAuth = async () => {
            const urlParams = new URLSearchParams(window.location.search);
        
            const accessToken = urlParams.get('token');
          
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                try {
                    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/admin/verify`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        }
                    );
                    if (res.data.success) {
                        setUser(res.data.user)
                        navigate('/', { replace: true });
                       
                    }

                } catch (err) {
                    console.error("error fetching user", err)
                }
               
            }
        }
        handelAuth();
    }, [navigate]);
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4 text-green-600">Authentication Successful!</h1>
                <p className="text-gray-700">You have been successfully authenticated. You can now close this window and return to the application.</p>
            </div>
        </div>
    );
}

export default authsuccess;