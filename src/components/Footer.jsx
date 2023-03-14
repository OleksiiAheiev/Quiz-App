import { Typography, styled, Box } from '@mui/material';

const FooterStyles = styled(Box)(() => ({
    backgroundColor: '#fff',
    marginLeft: '2px',
    minHeight: '100px',
    zIndex: '100',
    textAlign: 'center',
    paddingTop: '50px'
}));
function Footer() {
    return (
        <FooterStyles>
            <Typography>© 2023 Quizz Inc.</Typography>
        </FooterStyles>
    );
}

export default Footer;
