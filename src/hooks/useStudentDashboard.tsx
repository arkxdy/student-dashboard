import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import { githubDashboard } from "../props/template";

//const [studentDashboard, setStudendentDashboard] = useState();
const useStudentDashboard = () => {
    const [studentDashboard, setStudendentDashboard] = useState<githubDashboard[]>();
    useEffect(() => {
        (async () => {
            await axios.get(`https://api.github.com/users`)
            .then((res) => {
                console.log('resStudentProfile',res);
                setStudendentDashboard(res.data);
            }).catch((error) => {
                console.log(error);
            })
        })();
        
       
    },[])


    return studentDashboard;
}
export default useStudentDashboard;