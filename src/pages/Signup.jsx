import React, { useState } from "react";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup successful!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-[15px] font-semibold text-gray-600 mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter Your Name"
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </div>
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
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block text-[15px] font-semibold text-gray-600 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter Strong Password"
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            minLength={6}
                            autoComplete="off"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-500 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;