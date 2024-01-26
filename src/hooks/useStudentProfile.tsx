import axios from "axios";
import { useEffect, useState } from "react";
import { githubProfile } from "../props/template";


const useStudentProfile = (username:string) => {
    const [studentProfile, setStudendentProfile] = useState<githubProfile>();
    useEffect(() => {
        (async () => {
            try{
                await axios.get(`https://api.github.com/users/${username}`)
                .then((res) => {
                    //console.log('resStudentProfile',res);
                    setStudendentProfile(res.data);
                }).catch((error) => {
                    console.log(error);
                    setStudendentProfile(error)
                })
                
                //setStudendentProfile(response);
            } catch(err){
                console.log(err);
            }
        })();
        
    },[username])

    return studentProfile;
}

export default useStudentProfile;