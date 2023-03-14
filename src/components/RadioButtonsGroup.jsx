import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

function RadioButtonsGroup({ options }) {
    console.log(options);

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Answer choices</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                {options &&
                    options.map((el, index) => (
                        <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={el} />
                    ))}
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonsGroup;
