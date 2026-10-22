import React from "react";

const ProjectCard = (props) => {
    return (
        <div className="flex bg-white h-full w-full rounded-2xl overflow-hidden relative m-4 px-8 py-8 ">
            <div className="flex flex-col bg-white h-full w-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md  ">
                Total Process: {props.totalProcess}
            </div>
            <div className="flex flex-col bg-white h-full w-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md  ">
                Active Process: {props.activeProcess}
            </div>
            <div className="flex flex-col bg-white h-full w-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md ">
                Completed: {props.completed}
            </div>
            <div className="flex flex-col bg-white h-full w-full rounded-2xl overflow-hidden relative m-2 p-4 shadow-md ">
                At Risk: {props.atRisk}
            </div>
        </div>
    );
};

export default ProjectCard;