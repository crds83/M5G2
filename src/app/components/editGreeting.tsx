'use client'
import { useState } from "react"

type Props = {
    greetingObj: {
        _id: string;
        greeting: string;
    }
}
const EditGreeting = ({greetingObj}:Props)=>{
    const [greeting, setGreeting] = useState("");
    const changeGreeting = ()=>{
        fetch('/api',{
            method: "PUT",
            body: JSON.stringify({ greeting, id:greetingObj._id })
        })
    }

    const deleteGreeting = async () => {
        const response = await fetch('/api', {
            method: "DELETE",
            body: JSON.stringify({ id: greetingObj._id }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            alert("Greeting deleted successfully!");
           
        } else {
            alert("Failed to delete the greeting. Please try again");
        }
    };

    return (
        <div key={greetingObj._id.toString()}>
            <h1> {greetingObj.greeting} </h1>
            <input 
                value={greeting}
                onChange={(e)=>setGreeting(e.target.value)}
            ></input>
            <button onClick={changeGreeting}>change this greeting</button>
            <button onClick={deleteGreeting} style={{ marginLeft: '10px', color: 'red' }}>Delete this greeting</button>
        </div>
        
    )
}
export default EditGreeting 