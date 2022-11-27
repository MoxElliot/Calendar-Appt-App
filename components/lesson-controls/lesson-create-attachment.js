import React, { useState } from 'react';
import Link from 'next/link';


//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react
const attachArray = []
export default function LessonCreateAttachment () {

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const handleSearchAttachment = (e) => {
        
        setSelectedFile(e.target.files[0].name);
        // setIsSelected(false)
        // attachArray.push(selectedFile)
        
        return attachArray
    }

    const handleAddAttachment = () => {
        console.log("includes",attachArray.includes(selectedFile))
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
        setIsSelected(!isSelected)
        attachArray.push(selectedFile)
       }
        return attachArray
    }
    console.log("attachArray", attachArray)
    
    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'>
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input type='file' name='file' onChange={handleSearchAttachment} />
           
                   {attachArray.map(file => 
                        <p key={file.toString()}>{file}</p>)}
                 
            <button 
                className='btn p-0 w-75'
                onClick={handleAddAttachment}  
            >
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
                    
        </form>
    )

}