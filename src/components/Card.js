import axios from "../axios";
import { useEffect } from "react";

const Operators = () => {
    

    useEffect(() => {
        axios.get(``, {})
            .then((res) => console.log("Data",res.data))
    }, [])

    return (<div style={{ height: 430, width: '28%', ml: 2 }}>
        <h5>
            Operators
        </h5>
    </div>)
}

export default Operators;