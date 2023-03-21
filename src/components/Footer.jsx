import { Component } from 'react';
import {
    Typography,
    styled,
    Box,
    Stack,
    Avatar
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterStyles = styled(Box)(() => ({
    backgroundColor: '#fff',
    marginLeft: '2px',
    minHeight: '100px',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 40px 0',
}));

class Footer extends Component {
    render() {
        return (
            <FooterStyles>
                <Typography>© 2023 Quizz Inc.</Typography>
                <Stack direction="row" spacing={2}>
                    <Avatar>
                        <FacebookIcon />
                    </Avatar>
                    <Avatar>
                        <InstagramIcon />
                    </Avatar>
                    <Avatar>
                        <TwitterIcon />
                    </Avatar>
                    <Avatar>
                        <YouTubeIcon />
                    </Avatar>
                </Stack>
            </FooterStyles>
        );
    }
}

export default Footer;
