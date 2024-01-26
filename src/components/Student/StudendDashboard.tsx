import React from "react";
import Student from './Student'
import { githubDashboard } from "../../props/template";
import useStudentDashboard from "../../hooks/useStudentDashboard";

const StudentDashboard = () => {
    const studentDashboardData: githubDashboard[] | undefined = useStudentDashboard();
    console.log('dash', studentDashboardData);
    if(studentDashboardData === undefined){
        return (
            <div>Loading</div>
        )
    }
    return(
        <div className="px-2 grid grid-cols-4 gap-4">
            {studentDashboardData.map((item) => 
                <>
                    <Student login={item.login} type={item.type} repos_url={item.repos_url} id={item.id} avatar_url={item.avatar_url} node_id={""} gravatar_id={""} html_url={""} events_url={""} site_admin={item.site_admin}></Student>
                </>
            )}
            </div>
    );

}

export default StudentDashboard;