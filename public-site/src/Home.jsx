import { Container, Typography } from '@mui/material'
import PublicProjectList from './components/PublicProjectList';


function Home({ projects, loading, error }) {    

    

    return (
        <div>
        <Container
            sx = {{
            
            }}
            maxWidth="xl"
        >
            <Typography variant='h3' align='center'>My Portfolio</Typography>
            <PublicProjectList projects={projects} loading={loading} error={error}/>
        </Container>
        </div>
    );
}

export default Home;