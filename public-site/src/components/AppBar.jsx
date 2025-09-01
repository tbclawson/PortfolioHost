import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button, Box } from "@mui/material";
import {PersonOutline} from "@mui/icons-material";



function CustomAppBar() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <AppBar
            position="static"
            sx = {{
                background: 'transparent',
                boxShadow: 'none',
                padding: '0.5rem 1rem'
            }}
        >
            <Toolbar disableGutters>
                <Avatar sx={{m:1}}>
                    <PersonOutline></PersonOutline>
                </Avatar>
                <Button onClick={goHome}>
                    <Typography variant="h5" component="span" sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 'bold'}}>
                        Trevor Clawson
                    </Typography>
                </Button>
                <Box
                    sx={{flexGrow:1}}
                ></Box>
                
                    
                <Button sx={{ color: 'text.primary' }} onClick={goHome}>Home</Button>
                <Button sx={{ color: 'text.primary' }} onClick={goToAbout}>About</Button>
                <Button sx={{ color: 'text.primary' }}>Contact</Button>
            </Toolbar>
            

        </AppBar>

    );

};


export default CustomAppBar;