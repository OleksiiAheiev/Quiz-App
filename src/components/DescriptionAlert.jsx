import { Component } from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';

class DescriptionAlerts extends Component {
    render() {
        return (
            <Stack className="alertStyles" spacing={2} zIndex={111}>
                <Alert severity="success">
                    <AlertTitle>
                        The Quizz <strong>is start!</strong>
                    </AlertTitle>
                </Alert>
            </Stack>
        );
    }
}

export default DescriptionAlerts;
