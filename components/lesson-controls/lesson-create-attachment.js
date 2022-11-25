import React, { useState } from 'react';
import Link from 'next/link';

export default function LessonCreateAttachment () {

    const [selectedFIle, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const handleAttachment = (e) => {
        setSelectedFile(e.target.files[0]);
        setIsSelected(true)
    }

    return ( 
        <form className='lessonControlAttachment m-2 px-1
            col col-md-4 col-6
            d-flex flex-column'>
    
            <p className='lessonControlP m-0'>Lesson Attachments</p>
            <input type='file' name='file' onChange={handleAttachment} />
            <button className='btn p-0 w-75'>
                <label className='bi bi-plus'>Add Attachment</label>
            </button>
            <Link href="/">
                <a className='bi bi-paperclip'>game-review.sgf</a>
            </Link>
            <Link href="/">
                <a className='bi bi-paperclip'>OpeningProblems.sgf</a>
            </Link>
                    
        </form>
    )

}