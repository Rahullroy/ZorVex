import { useState } from 'react'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card task='Website Redesign' progress='In progress' level = 'high' img='https://tse3.mm.bing.net/th/id/OIP.C5r9AP9QuGMduyp_J5QtiQHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' />
 
    </div>
  )
}

export default App
