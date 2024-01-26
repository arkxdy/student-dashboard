import { useParams } from "react-router-dom";
import useStudentProfile from "../hooks/useStudentProfile";
import { githubProfile } from "../props/template";

const About = () => {
    
    const student:githubProfile | undefined = useStudentProfile('arkxdy');
    console.log("Test",student);
    const {userid} = useParams()
    return (
        <div>
            About! {userid}
            <span>{student?.name}</span>
        </div>
    )
}

export default About;