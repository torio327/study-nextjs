'use client'
import React, {useState} from 'react';
import {geminai, getTextFromTextAndImage} from "@/utils/utils";


const UseGemini = () => {
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState<string>("I solve a math quize")
    const [imageFile, setImageFile] = useState<File|null>(null)
    const [imageDescription, setImageDescription] = useState("")

    const onSubmit=async ()=>{
       const res=await geminai(prompt)
        setResponse(res)
        setPrompt("")
    }

    const handleFileChange=async(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setImageFile(e.target.files[0])
        }
    }

    const onSubmitImage=async()=>{
        if(!imageFile){
            return
        }
        const response=await getTextFromTextAndImage(imageFile.name)
        setImageDescription(response)
    }
    console.log(imageFile?.name)
    return (
        <div>
            <p>{response}</p>
            <textarea onChange={(e)=>setPrompt(e.target.value)} value={prompt}/>
            <button onClick={onSubmit}>Submit</button>

            <h1>Describe Image</h1>
            <input type={"file"} accept={"image/*"} onChange={handleFileChange}/>
            <button onClick={onSubmitImage}>Submit</button>
            <p>description</p>
            <p>{imageDescription}</p>
        </div>
    );
};

export default UseGemini;