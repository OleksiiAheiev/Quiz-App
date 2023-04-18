import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function InputField({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          multiline
          label={label}
          value={value}
          inputRef={ref}
          onChange={onChange}
          margin='normal'
          error={!!error}
          helperText={error ? error.message : ''}
          {...props}
        />
      ))}
    />
  );
}

export default InputField;
