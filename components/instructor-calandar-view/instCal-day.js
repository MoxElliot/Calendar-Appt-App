

const timeSlotsArr = ["9:00AM", "3:00PM", "5:00PM"]

const d = new Date();
const today =  (d.getMonth() + " " + d.getDay() + " " + d.getDate())
const date = d.getDate()
const day = d.getDay()


export default function InstCalandarDay({handleLessonDet}) {
    

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <button
        className="time-slot
            btn btn-secondary my-1 w-100
            d-flex justify-content-center" 
            key={timeSlot.toString()}
            onClick={handleLessonDet}
        >
            <p className="m-0">{timeSlot}</p>
        </button>
    );

    return (
        <div className="time-slot-container">
            {timeSlots}
        </div>
    )

}


