import { Component } from 'react';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material';
class RadioButtonsGroup extends Component {
    render() {
        const { options } = this.props;

        return (
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Answer choices</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    {options &&
                        options.map((el, index) => (
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
}

export default RadioButtonsGroup;
