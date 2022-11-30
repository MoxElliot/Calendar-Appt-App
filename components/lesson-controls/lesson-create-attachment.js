import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { updateLessonAttachmentList } from '../../redux/slices/lessonControlSlice';


//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react
// const attachArray = []
export default function LessonCreateAttachment () {

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState([])

    const dispatch = useDispatch();
    
    const handleSearchAttachment = (e) => {
        e.preventDefault()
        if(e.target.files.length === 0){
            return attachArray
        } else {
        setSelectedFile(e.target.files[0].name);
        return attachArray}
    }

    const handleAddAttachment = () => {
        console.log("includes",attachArray.includes(selectedFile))
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            setAttachArray([...attachArray, selectedFile])
       }
        dispatch(updateLessonAttachmentList(attachArray))
        return attachArray
    }

    const handleRemoveAttachment = (e) => {
        attachArray.splice(e.target.id, 1)
        setAttachArray(attachArray)
        return attachArray
    }

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