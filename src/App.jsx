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
    <>
    <div className='flex flex-col items-start justify-between gap-1 bg-white w-full rounded-2xl overflow-hidden relative m-2 p-4  border border-gray-100'>
      <div className='flex w-full items-center justify-between'>
          <h1 className=' text-3xl font-bold'>ALL PROJECT</h1>
          <div className='flex items-center justify-between gap-1'>
            <h1><input 
              type="text" 
              placeholder="Search..."
              className='padding: "8px",
              width: "250px",
              borderRadius: "4px",
              border: "1px solid #ccc"
              m-3'
           />  
          </h1>
          <button className='border border-black text-xs font-semibold px-3 py-1 rounded-full bg-blue-200' >+ New Project</button>
          </div>
      </div>

      <div className='grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
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
    </div>
 
   </>
    
  )
}

export default App
