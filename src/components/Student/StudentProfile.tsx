import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { githubProfile } from "../../props/template";
import useStudentProfile from "../../hooks/useStudentProfile";
import UnderDevelopment from "../../pages/UnderDevelopment";


const StudentProfile = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const {username} = useParams();
    let user = "";
    if(username!=null){
        user = username;
    }
    const student:githubProfile | undefined = useStudentProfile(user);
    console.log("Test",student);
    if(username == null || username == ''){
        return(
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold text-gray-700">404</h1>
                    <p className="text-lg text-gray-600">Page Not Found</p>
                    <p className="text-gray-500 mt-2">The requested page could not be found.</p>
                    <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Go back to home</a>
                </div>
            </div>
        )
    }
    if(student?.name === 'AxiosError'){
        return(
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold text-gray-700">404</h1>
                    <p className="text-lg text-gray-600">Page Not Found</p>
                    <p className="text-gray-500 mt-2">The requested page could not be found.</p>
                    <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">Go back to home</a>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-8">
                <div className="bg-white shadow-md rounded-md p-6">
                <div className="flex items-center justify-center">
                    <img src={student?.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full"/>
                </div>

                <div className="mt-4 text-center">
                    <h2 className="text-lg font-semibold">{student?.name}</h2>
                    <p className="text-gray-500">{student?.location}</p>
                </div>

                <div className="flex justify-around mt-6">
                    <div className="text-center">
                    <span className="block text-2xl font-semibold">{student?.public_repos}</span>
                    <span className="text-gray-500">Repos</span>
                    </div>
                    <div className="text-center">
                    <span className="block text-2xl font-semibold">{student?.followers}</span>
                    <span className="text-gray-500">Followers</span>
                    </div>
                    <div className="text-center">
                    <span className="block text-2xl font-semibold">{student?.following}</span>
                    <span className="text-gray-500">Following</span>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-gray-700">
                    {}
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <Link to='/underdevelopment' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Edit Profile</Link>
                </div>
                </div>
            </div>
        </div>
    )
}
export default StudentProfile;