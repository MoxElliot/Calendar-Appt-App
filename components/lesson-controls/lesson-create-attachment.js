import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } from '../../redux/slices/lessonControlSlice';
//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react

export default function LessonCreateAttachment () {


    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [attachArray, setAttachArray] = useState([]);


    const removeIndex = useSelector(state => state.removeIndex)
    const attachClear = useSelector(state => state.attachClear);
    //let removeIndex = 0;

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("attachArray is updated", attachArray)
        console.log(" in useEffect:", attachClear)
        if(attachClear === true) {
            console.log("in UseEffect IF")
            setAttachArray([])
            dispatch(clearLessonAttachmentList([]))
            dispatch(toggleAttachClear(false))
        } else {
            console.log("in else UseEffect", attachArray)
            dispatch(clearLessonAttachmentList(attachArray))
        }
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
        console.log("includes",attachArray.includes(selectedFile))
       
        if(attachArray.includes(selectedFile) || selectedFile === undefined) {
            setIsSelected(!isSelected)
        } else {
            setIsSelected(!isSelected)
            dispatch(updateLessonAttachmentList(selectedFile))
            setAttachArray([...attachArray, selectedFile])
            console.log("attachArray in Handle", attachArray)
       }
        return attachArray
    }
    const handleRemoveAttachment = (e) => {
        // e.preventDefault()
        // console.log("in handle index", e.target.id)
        // removeIndex = e.target.id
        // console.log("removeIndex", removeIndex)
        // console.log("inHandle Remove Attach after Click", attachArray)
        // console.log("Spice", attachArray.slice(removeIndex, 1))
        // dispatch(removeLessonAttachment(removeIndex))
        // return attachArray
        e.preventDefault()
        console.log("in handle index", e.target.id)
        removeIndex = e.target.id
        console.log("removeIndex", removeIndex)
        dispatch(removeLessonAttachment(attachArray.splice(removeIndex, 1)))
        console.log("in hande remove", attachArray)
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