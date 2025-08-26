

const Login = () => {



    return (
         <div>

            <button onClick={()=> window.open(`${import.meta.env.VITE_BASE_URL}/auth/google`,"_self")} className="w-full" variant="outline">Login with Google</button>
         </div>
    )
}

export default Login;