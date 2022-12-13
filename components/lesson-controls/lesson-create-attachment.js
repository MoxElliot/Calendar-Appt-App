import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } from '../../redux/slices/lessonControlSlice';
//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react

export default function LessonCreateAttachment () {


    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState([]);


    const removeIndex = useSelector(state => state.lessonControl.removeIndex)
    const attachClear = useSelector(state => state.lessonControl.attachClear);

    const dispatch = useDispatch();

    useEffect(() => {
            setAttachArray([])
            dispatch(clearLessonAttachmentList([]))
            dispatch(toggleAttachClear(false))
    }, [attachClear]);
    
    const handleSearchAttachment = (e) => {
        e.preventDefault()
        if(e.target.files.length === 0){
            return attachArray
        } else {
        setSelectedFile(e.target.files[0].name);
        return attachArray
    }}
    const handleAddAttachment = (e) => {
        e.preventDefault()
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            dispatch(updateLessonAttachmentList(selectedFile))
            setAttachArray([...attachArray, selectedFile])
       }
        return attachArray
    }
    const handleRemoveAttachment = (e) => {
        e.preventDefault()
        removeIndex = e.target.id
        dispatch(removeLessonAttachment(attachArray.splice(removeIndex, 1)))
       return attachArray
    }
    return ( 
        <form className='lessonControlAttachment m-2 p-2
            col col-md-4 col-6
            d-flex flex-column'
            method="post" encType="multipart/form-data">
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input type='file' name='file' onChange={handleSearchAttachment} />
           
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