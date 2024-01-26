import axios from "axios";
const getRequest = (url:string) => {
    axios.get(url)
        .then((response) => {
            console.log(`get`, response);
        })
        .catch((error) => {
            console.log(`error`, error);
        })
}