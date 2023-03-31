import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';

function RadioButtonsGroup({ options, handleAnswerSelect }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handleAnswerSelect(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        {options
          && options.map((el, index) => (
            <FormControlLabel
              sx={{ mb: 2 }}
              key={index}
              value={index.toString()}
              control={<Radio />}
              label={el}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
