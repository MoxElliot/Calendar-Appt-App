import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } from '../../redux/slices/lessonControlSlice';
//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react

export default function LessonCreateAttachment ({lessonAttachment}) {


    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState(lessonAttachment);

    console.log('in lesson create attachment, lessonAttachment', attachArray)
    const removeIndex = useSelector(state => state.lessonControl.removeIndex)
    const attachClear = useSelector(state => state.lessonControl.attachClear);

    const dispatch = useDispatch();

    const firstUpdate = 0

    useEffect(() => {
        if(firstUpdate < 1) {
            console.log("in useEffect if", firstUpdate)
            ++firstUpdate
        } else {
            setAttachArray([])
            dispatch(clearLessonAttachmentList([]))
            dispatch(toggleAttachClear(false))
            console.log("in useEffect else", firstUpdate)
        }
    }, [attachClear]);
    
    const handleSearchAttachment = (e) => {
        e.preventDefault()
        if(e.target.files.length === 0){
            return attachArray
        } else {
        setSelectedFile(e.target.files[0].name);
        return attachArray
        }
    };
    
    const inputRef = useRef(null);
    const resetFileInput = () => {
        inputRef.current.value = null;
    };

    const handleAddAttachment = (e) => {
        e.preventDefault()
        resetFileInput();
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            dispatch(updateLessonAttachmentList(selectedFile))
            setAttachArray([...attachArray, selectedFile])
       }
        return attachArray
    };

    const handleRemoveAttachment = (e) => {
        e.preventDefault()
        attachArray.splice(e.target.id, 1)
        setAttachArray(attachArray)
        removeIndex = e.target.id
        dispatch(removeLessonAttachment(removeIndex))
    };

    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'
            method="post" encType="multipart/form-data">
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input 
                type='file' 
                name='file'
                ref={inputRef} 
                onChange={handleSearchAttachment} 
            />
           
                {attachArray.map((file, i) => {
                    return(
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
                    )})}
                 
            <button 
                className='btn p-0 w-75'
                onClick={handleAddAttachment}  
            >
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
                    
        </form>
    )
}