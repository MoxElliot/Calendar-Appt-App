import React, { useState } from 'react';
import Link from 'next/link';
import nanoid from 'nanoid';

//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react
const attachArray = []
export default function LessonCreateAttachment () {

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [totalAttachments, setTotalAttachments] = useState(0);
    const handleSearchAttachment = (e) => {
        
        setSelectedFile(e.target.files[0].name);
        setIsSelected(true)
        attachArray.push(selectedFile)
       
        return attachArray
    }

    console.log("attachArray", attachArray)
    // const attachArray = [];
    // const handleAddAttachment = () => {
    //     console.log("in handleAddAttachment", attachArray)
    //     attachArray.push(
    //     selectedFile.name
    //     )
    //     return attachArray
    // }



    // const addAttachmentText = () => {

    //     console.log(selectedFile.name)
    //     const attachArray = [];
    //     for (let i = 0; i < totalAttachments; i++) (
    //         attachArray.push(
    //         <div>
    //             <p>File: {selectedFile.name}</p>
    //         </div>
    //         )
    //     )

    //     return attachArray;
    // }
    

    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'>
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input type='file' name='file' onChange={handleSearchAttachment} />
            {isSelected ? 
                ( 
                    <div>
                        <p>File: {selectedFile}</p>
                    </div>
                )
             : (
                <p>Select a File...</p>
            )}
           {attachArray.map(file => {
            return(
            <p>{file}</p>
            )})}
            <button 
                className='btn p-0 w-75'
                // onClick={handleAddAttachment}    
            >
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
                    
        </form>
    )

}