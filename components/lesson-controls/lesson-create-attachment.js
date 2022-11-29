import React, { useState, useEffect } from 'react';
import Link from 'next/link';


//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react
// const attachArray = []
export default function LessonCreateAttachment () {

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState([])
    const handleSearchAttachment = (e) => {
        if(e.target.files.length === 0){
            console.log("etarget in if", e.target.files)
            console.log("etartget length in If", e.target.files.length)
            return attachArray
        } else {
        console.log("etarget in else", e.target.files)
        console.log("etartget length in else", e.target.files.length)
        setSelectedFile(e.target.files[0].name);
        // setIsSelected(false)
        // attachArray.push(selectedFile)
        
        return attachArray}
    }

    const handleAddAttachment = () => {
        console.log("includes",attachArray.includes(selectedFile))
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            setAttachArray([...attachArray, selectedFile])
            // attachArray.push(selectedFile)
       }
        return attachArray
    }


        const handleRemoveAttachment = (e) => {
          //  e.preventDefault();
            // attachArray(selectedFile.filter(i => i !== item))
            attachArray.splice(e.target.id, 1)
            setAttachArray(attachArray)
            return attachArray
            // console.log("lenth", e.target.id - attachArray.length)
            //console.log("splice", attachArray.splice(e.target.id, 1)
        }

    // console.log("attachArray", attachArray)
    
    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'>
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input type='file' name='file' onChange={handleSearchAttachment} />
           
                {attachArray.map((file, i) => 
                    <div key={file.toString()} >
                        <button 
                            className='btn'
                            id={i}
                            onClick={handleRemoveAttachment}
                        > 
                        x 
                        </button>
                        <label> {file}</label>
                    </div>
                    )}
                 
            <button 
                className='btn p-0 w-75'
                onClick={handleAddAttachment}  
            >
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
                    
        </form>
    )

}