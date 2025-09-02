import { Typography, Box } from "@mui/material";



function About() {
    return (
        <>
            <Box
                marginBottom={10}
            >
                <Typography
                    variant="body1"
                    marginBottom={3}
                >
                    Hey, thanks for sticking around! Here's a little more to know about me.
                    I graduated from Arizona State University {' '}<em>(Fork 'em!')</em>{' '} with a Bachelor's degree in Data Science in 2022.
                    I loved homework and tests so much that I went back for round two getting a Master's degree in Computer Science 
                    that I just finished in July 2025! Now that I have some free time again, I enjoy binging TV shows, working out,
                    and playing soccer.   

                </Typography>
                <Typography
                    variant="body1"
                >
                    My time at ASU gave me a unique perspective that sits at the intersection of data and software. 
                    My Data Science roots sparked a passion for engineering robust data pipelines that tame high-velocity 
                    information streams. My Computer Science skills drive me to build intuitive, user-centric mobile 
                    apps like my {' '}<strong>Strengthify</strong>{' '} project. Ultimately, I love the challenge of working across the entire stack, 
                    from a complex backend system all the way to a polished user interface.   

                </Typography>
                
            </Box>
        </>
        
    );
}

export default About;