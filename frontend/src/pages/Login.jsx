import React, { useState, useContext } from "react";
import logo from '../assets/dechub logo.png'
import { Link, useNavigate } from "react-router-dom";
import stroke from '../assets/home/stroke.svg'
import axios from 'axios'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from 'react-toastify'
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const Login = () => {

	const { isLoggedIn } = useAuth();
	if (isLoggedIn) {
		return <Navigate to="/dashboard/home" replace />
	}
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const submitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			const token = await result.user.getIdToken();


			toast.success("Login Successful!");
			setEmail('');
			setPassword('');
			navigate('/');
			setLoading(false);
		} catch (err) {
			setLoading(false);
			alert(err.message);
		}
	};
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
			<header className="absolute top-1 flex justify-between w-full items-center px-4">
				<Link to="/"><img className="w-16" src={logo} alt="logo" /></Link>
				<Link to="/" className="px-4 font-medium rounded-lg flex gap-2 py-[6px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] text-white">
					<i className="ri-arrow-left-long-line"></i>Home
				</Link>
			</header>
			<div style={{
				clipPath: "polygon(100% 100%, 0% 100%, 0.00% 53.58%, 2.00% 53.39%, 4.00% 52.84%, 6.00% 51.93%, 8.00% 50.71%, 10.00% 49.21%, 12.00% 47.49%, 14.00% 45.62%, 16.00% 43.65%, 18.00% 41.65%, 20.00% 39.70%, 22.00% 37.87%, 24.00% 36.22%, 26.00% 34.81%, 28.00% 33.69%, 30.00% 32.90%, 32.00% 32.46%, 34.00% 32.40%, 36.00% 32.71%, 38.00% 33.39%, 40.00% 34.40%, 42.00% 35.72%, 44.00% 37.30%, 46.00% 39.08%, 48.00% 40.99%, 50.00% 42.98%, 52.00% 44.97%, 54.00% 46.88%, 56.00% 48.66%, 58.00% 50.24%, 60.00% 51.56%, 62.00% 52.57%, 64.00% 53.25%, 66.00% 53.56%, 68.00% 53.50%, 70.00% 53.06%, 72.00% 52.27%, 74.00% 51.15%, 76.00% 49.74%, 78.00% 48.09%, 80.00% 46.26%, 82.00% 44.31%, 84.00% 42.31%, 86.00% 40.34%, 88.00% 38.47%, 90.00% 36.75%, 92.00% 35.25%, 94.00% 34.03%, 96.00% 33.12%, 98.00% 32.57%, 100.00% 32.38%)"
			}} className="absolute left-0 h-screen w-full bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]"></div>
			<div className="m-3 z-2 relative w-full max-w-md bg-white max-md:mt-20 rounded-xl shadow-md p-8">
				<h2 className="text-2xl font-bold mb-1 text-gray-800 text-center">
					Login to Your Account
				</h2>
				<img src={stroke} alt="stroke" className="mb-10 w-70 mx-auto" />
				{/* <form onSubmit={(e) => submitHandler(e)} className="space-y-5">
					
					<div>
						<label className="block text-[15px] font-semibold text-gray-600 mb-1" htmlFor="email">
							Email
						</label>
						<input
							className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter Your Email"
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							required
							autoComplete="email"
						/>
					</div>
					<div>
						<label className="block text-[15px] font-semibold text-gray-600 mb-1" htmlFor="password">
							Password
						</label>
						<input
							className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter Your Password"
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							required
							minLength={6}
							autoComplete="current-password"
						/>
					</div>
					<button
						type="submit"
						className={`${loading ? "opacity-[30%]" : "opacity-[1]"} w-full bg-[#2a2a2a] cursor-pointer text-700 text-white py-2 rounded-lg font-semibold hover:bg-black transition`}>
						{loading ? "Logging in..." : "Login"}
					</button>
				</form> */}


				<button onClick={() => window.open(`${import.meta.env.VITE_BASE_URL}/auth/google`, "_self")} className="w-full border border-gray-200 flex justify-center gap-3 shadow-lg cursor-pointer hover:shadow-md hover:bg-gray-100 py-2 rounded-md" variant="outline">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						className="w-6 h-6" // you can adjust Tailwind size
					>
						<path
							fill="#EA4335"
							d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
						/>
						<path
							fill="#4285F4"
							d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
						/>
						<path
							fill="#FBBC05"
							d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
						/>
						<path
							fill="#34A853"
							d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
						/>
					</svg>
					Continue with Google</button>


				{/* <p className="mt-6 text-center text-gray-500 text-sm">
					Don't have an account?{" "}
					<Link to="/signup" className="text-blue-600 hover:underline">
						Sign up
					</Link>
				</p> */}
			</div>
			<footer className="z-2 relative text-center mt-4 text-white text-md">
				&copy; {new Date().getFullYear()} dechub.ai. All rights reserved.
			</footer>
		</div>
	);
};

export default Login;
