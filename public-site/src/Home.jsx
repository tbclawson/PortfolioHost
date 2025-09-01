import { Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import CustomAppBar from './components/AppBar';
import PublicProjectList from './components/PublicProjectList';


function Home() {    

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };

    return (
        <div>
        <CustomAppBar goToAbout={goToAbout}></CustomAppBar>
        <Container
            sx = {{
            
            }}
            maxWidth="xl"
        >
            <Typography variant='h3' align='center'>My Portfolio</Typography>
            <PublicProjectList />
        </Container>
        </div>
    );
}

export default Home;