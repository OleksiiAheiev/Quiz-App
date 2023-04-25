import React from 'react';
import { Button, Stack, styled } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputField from '../components/Forms/InputField';
import { categoriesThunks } from '../store/modules/categories';
import { quizRules } from '../helper/rules';

export const CreateQuizBtn = styled(Button)(() => ({
  width: '200px',
  color: '#6c4298',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
  '&.MuiButton-outlined': {
    borderColor: '#6c4298',
    color: '#6c4298',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#fff',
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  margin: '0 auto',
  marginTop: '50px',
  alignItems: 'center',
  minWidth: '300px',
  padding: '0 10px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  marginBottom: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
  [theme.breakpoints.up('md')]: {
    width: '600px',
  },
}));

const StyledInput = styled(InputField)(() => ({
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6c4298',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6c4298',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6c4298',
    '&.Mui-focused': {
      color: '#6c4298',
    },
  },
}));

function CreateQuiz() {
  const {
    control, handleSubmit, getValues, reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = getValues();
    dispatch(categoriesThunks.createCategory(data));
    reset();
  };

  return (
    <StyledStack>
      <StyledInput
        fullWidth
        type='text'
        control={control}
        name='category_name'
        label='Category name'
        margin='normal'
        variant='outlined'
        rules={quizRules.category}
      />
      <StyledInput
        fullWidth
        control={control}
        name='image'
        margin='normal'
        variant='outlined'
        label='Image link'
        rules={quizRules.image}
      />
      <StyledInput
        fullWidth
        type='textarea'
        rows={4}
        control={control}
        name='description'
        margin='normal'
        variant='outlined'
        label='Description'
        rules={quizRules.description}
      />
      <CreateQuizBtn
        size='medium'
        onClick={handleSubmit(onSubmit)}
      >
        Create new category
      </CreateQuizBtn>
    </StyledStack>
  );
}

export default CreateQuiz;
