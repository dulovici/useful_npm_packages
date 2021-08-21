import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup } from '@material-ui/core';

export const Buttons = () => {
    return (
        <div>
            <h1>Buttons</h1>
            {/* In button groups we can put mutual props. */}
            <ButtonGroup> 
                <Button 
                startIcon={<SaveIcon/>}
                variant='contained' 
                color='primary' 
                style={{width: '130px',fontSize: '10px', color: 'whitesmoke', marginRight: '10px'}} 
                >Save</Button>

                <Button 
                endIcon={<DeleteIcon/>}
                variant='contained' 
                color='secondary' 
                style={{width: '130px',fontSize: '10px', color: 'whitesmoke'}} 
                >Discard</Button>
            </ButtonGroup> 
        </div>
    )
}



//  https://material-ui.com/components/buttons/
//  https://material-ui.com/components/material-icons/