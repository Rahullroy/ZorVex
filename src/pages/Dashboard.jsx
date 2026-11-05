import { useState } from 'react'
import Card from "../../components/card";
import ProjectCard from "../../components/ProjectCard";

function Dashboard() {
  const [count, setCount] = useState(0)

  const arr = [
    {
      title: "Website Redesign",
      progress: "In progress",
      level: "high",
      img: "https://tse1.mm.bing.net/th/id/OIP.4eQEtI9t-o_MQZxrC_F3SgHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    <div className="flex flex-col gap-6">
      <ProjectCard />  
      <div className="flex flex-col items-start justify-between gap-1 bg-white w-full rounded-2xl overflow-hidden relative m-2 p-4 border border-gray-100">
        <div className='flex w-full items-center justify-between'>
          <h1 className='text-3xl font-bold m-3 ml-4'>ALL PROJECT</h1>
          <div className='flex items-center justify-between gap-1'>
            <input 
              type="text" 
              placeholder="Search..."
              className="px-3 py-2 w-[250px] rounded border border-gray-300 m-3 text-sm outline-none"
            />  
            <button className='border border-black text-xs font-semibold px-3 py-1 rounded-full bg-blue-200 m-2'>
              + New Project
            </button>
          </div>
        </div>

        <div className='grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
          {arr.map(function(elem){
            return (
              <Card 
                key={elem.title}
                title={elem.title}
                progress={elem.progress}
                level={elem.level}
                img={elem.img}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;