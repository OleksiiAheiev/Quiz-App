import { Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';

const Buttons = styled(Button)(() => ({
    marginBottom: '30px',
    display: 'block',
    width: 100,
    backgroundColor: '#6c4298',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgb(136 84 192 / .8)',
        color: '#000',
    },
}));

function Categories({ category, id }) {
    //console.log(id);
    return (
        <Buttons variant="contained" value={category.id} key={id}>
            <Typography>{category.category_name}</Typography>
        </Buttons>
    );
}

export default Categories;