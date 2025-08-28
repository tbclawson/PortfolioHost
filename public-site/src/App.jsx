import { useState } from 'react'
import PublicProjectList from './components/PublicProjectList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My Portfolio</h1>
      <PublicProjectList />
    </div>
  )
}

export default App
