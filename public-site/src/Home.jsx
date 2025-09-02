import { Container, Typography, Box } from '@mui/material'
import PublicProjectList from './components/PublicProjectList';
import About from './About';


function Home({ projects, loading, error }) {    

    

    return (
        <>
            <Container
                sx = {{
                
                }}
                maxWidth="xl"
            >
                <div>
                    <Box
                        sx={{
                            minHeight: '100vh',
                            display:'flex',
                            flexDirection:'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                variant='h3'
                                // align='center'
                                sx={{
                                    // mt:
                                }}
                            >
                                Hi, I'm Trevor!
                            </Typography>
                            <Box
                                width={300}           
                                sx={{
                                    marginTop:4,
                                    p:2
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    // component='paragraph'
                                >
                                    I build things. From scalable data pipelines to user-friendly mobile apps, 
                                    I thrive on turning interesting ideas into tangible, software-driven realities.
                                </Typography>
                            </Box>
                        </Box>
                        
                    </Box>
                </div>
                <div>
                    <Typography variant='h5' align='left' marginBottom={3}>Some of my projects:</Typography>
                    <PublicProjectList projects={projects} loading={loading} error={error}/>
                </div>
                <div>
                    <Typography variant='h5' align='left' marginBottom={3}>About Me</Typography>
                    <About />
                </div>
            </Container>
        </>
    );
}

export default Home;