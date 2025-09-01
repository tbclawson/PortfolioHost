import { useState } from 'react'
import PublicProjectList from './components/PublicProjectList'
import { Container, Typography } from '@mui/material'
import CustomAppBar from './components/AppBar';



function App() {

  return (
    <div>
      <CustomAppBar></CustomAppBar>
      <Container
        sx = {{
          
        }}
        maxWidth="xl"
      >
        <Typography variant='h3' align='center'>My Portfolio</Typography>
        <PublicProjectList />
      </Container>
    </div>
  )
}

export default App
