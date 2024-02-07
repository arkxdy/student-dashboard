import { useState } from "react";
import { userLoginCredential } from "../../props/template";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userCredential, setUserCredential] = useState<userLoginCredential>();

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email address" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="button" 
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setUserCredential({
                                email: username,
                                password: password,
                            })}
                            >Sign Up</button>
                        </div>
                    </form>
                    <div>
                        {userCredential?.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;