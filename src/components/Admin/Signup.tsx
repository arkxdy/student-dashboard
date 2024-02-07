
const Signup = () => {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
        </form>
    )
}
export default Signup;