import React, {useState} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated/';


const optionToppings = [
    {value: 'Dorucak', label: '🍳Doručak'},
    {value: 'Rucak', label: '🍲Rucak'},
    {value: 'Dezert', label: '🍰Dezert'},
    {value: 'Pica', label: '🥃Pica'}
];

const optionSize = [
    {value: '9', label: '🍕 Small - 9 inches'},
    {value: '12', label: '🍕 Medium - 12 inches'},
    {value: '14', label: '🍕 Large- 14 inches'},
    {value: '18', label: '🍕 Extra large - 18 inches'}
];

export function ReactSelect() {
    const [toppings, setToppings] = useState([]);
    const [size, setSize] = useState({})

    function customTheme(theme) {
        console.log(theme)
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'orange',
                primary: 'green'
            },
            spacing: {
                ...theme.spacing,
                controlHeight: 30,
                baseUnit: 0,
              }
           

        }
    }

    return (
        <div style={{width: '300px'}}>
            <h1>Select</h1>
            <Select 
                options={optionToppings}
                theme={customTheme}
                onChange={setToppings}
                placeholder='Select pizza topings'
                noOptionsMessage={() => 'No other pizza topings.'}
                isMulti
                autoFocus
                autosize={true}
            />
            <Select 
                options={optionSize}
                theme={customTheme}
                onChange={setSize}
                placeholder='Select pizza size...'
                isSearchable
                width='200px'
            />
        </div>
    )
}


