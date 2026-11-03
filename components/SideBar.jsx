import React from "react";

const SideBar = (props)=>{
    return(
        <>
        <div className="flex flex-col bg-white h-full rounded-md overflow-hidden relative m-1 px8 py-8 transform translate-y-6 items-stretch text-left">
            <div className="Menu flex flex-col  justify-between g-2 ">
            <h1  className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Menu</h1>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
                Dashboard : {props.Dashboard}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Tasks : {props.Tasks}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Project : {props.Project}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Analytics : {props.Analytics}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Calender : {props.Calender}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Team Members : {props.TeamMembers}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Reports : {props.Reports}
            </span>
            <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Messages : {props.Messages}
            </span>
        </div>
        <br></br>
        <div className="General flex flex-col items-stretch text-left justify-between g-2 my-3 border-t border-gray-100 ">
            <span className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
                Settings: {props.Settings}
            </span>
            <span className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
                Help&Support : {props.HelpSupport}
            </span>
            <span className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition">
                Logout : {props.Logout}
            </span>
        </div>
        </div>
         

        </>
       
    );
}
export default SideBar;
