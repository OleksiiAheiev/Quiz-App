import { Typography, styled, Box } from '@mui/material';

const FooterStyles = styled(Box)(() => ({
    backgroundColor: "red",
    zIndex: '100'
}));
function Footer() {
    return (
        <FooterStyles>
            <Typography>footer</Typography>
        </FooterStyles>
    );
}

export default Footer;
