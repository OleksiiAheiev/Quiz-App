import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Typography } from '@mui/material';

const btn = {
    width: '150px',
    border: '#6c4298 1px solid',
    cplor: '#000'
};

function RadioButtonsGroup({ options }) {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Answer choices</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                {options &&
                    options.map((el, index) => (
                        <FormControlLabel sx={{mb: 2}} key={index} value={index.toString()} control={<Radio />} label={el} />
                    ))}
            </RadioGroup>
            <Button style={btn} type="submit" variant="outlined">
                <Typography>Next</Typography>
            </Button>
        </FormControl>
    );
}

export default RadioButtonsGroup;
