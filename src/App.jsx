import { useState } from 'react'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  const arr = [
  {
    title: "Website Redesign",
    progress: "In progress",
    level: "high",
    img:"https://tse1.mm.bing.net/th/id/OIP.4eQEtI9t-o_MQZxrC_F3SgHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    
  },
  {
    title: "Build Login Page",
    progress: "To do",
    level: "medium",
    img: "https://img.freepik.com/premium-vector/login-page-system-abstract-background-template_143055-705.jpg?w=2000"
  },
  {
    title: "Fix Bugs",
    progress: "Completed",
    level: "low",
    img: "https://www.creativefabrica.com/wp-content/uploads/2021/08/23/Bug-fix-icon-Graphics-16223033-1.jpg"
  },


];

  return (
    <div className='flex items-center justify-between gap-1 bg-white w-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 '>
      <h1>ALL PROJECT</h1>
      {arr.map(function(elem){
        return (
        <Card key={elem.title}
          title={elem.title}
          progress={elem.progress}
          level={elem.level}
          img = {elem.img}/>
        )
      })}
    
 
    </div>
  )
}

export default App
