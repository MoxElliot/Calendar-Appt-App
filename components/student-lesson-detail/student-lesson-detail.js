import React from 'react';
import studentLesDet from '../../styles/studentLessDet.module.scss';

export default function StudentLessonDetail({showLessonDet}) {

    if(!showLessonDet){
        return null;
    } 

    return (
        <div className={studentLesDet.lesDetContainer}>
            Lesson Detail
        </div>
    )
}