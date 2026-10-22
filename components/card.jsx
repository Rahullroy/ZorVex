import React from "react";
const Card=(props)=>{
    return(
        <div className= " bg-white w-full h-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col gap-3"> 
            <h1 className='font-bold bold text-lg text-gray-800 line-clamp-1'>{props.title}</h1>
            <div className="flex items-center justify-between gap-2">
                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {props.progress}
                </span>
                <span className="bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {props.level}
                </span>
            </div>
            
            <img className="object-cover h-60 w-full" src = {props.img}/>
            <button className="w-full  mt-2 bg-gray-600 overflow-hidden relative hover:bg-white-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 cursor-pointer">start working</button>


        </div>

    );
}
export default Card;
