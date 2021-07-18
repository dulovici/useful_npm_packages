import React, {useState} from 'react';
import './datePick.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const DatePick = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div>
            <DatePicker 
            selected={selectedDate} 
            onChange={(date) => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy' 
            // minDate={new Date()}
            // maxDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            />
        </div>
    )
}


// https://reactdatepicker.com/#example-default  DATE-PICKER DOCUMENTATION