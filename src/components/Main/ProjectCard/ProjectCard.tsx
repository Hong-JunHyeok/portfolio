import React from "react"
import "./ProjectCard.scss"
import { projects } from "recoils/project"
import { projectsType, projectType } from "types/projectType"

export default function ProjectCard({
    project_name,
    project_explanation,
    project_image,
    project_plarform,
    project_productionPeriod,
    project_stack,
}: projectType) {
    const mapStack = project_stack.map((element, index) => (
        <li key={index} className="projectCard_stack_stackItem">
            {element}
        </li>
    ))
    return (
        <div className="projectCard">
            <h1 className="projectCard_name">{project_name}</h1>
            <div className="projectCard_platform">{project_plarform}</div>
            <img src={project_image} alt="프로젝트 이미지" className="projectCard_img" />
            <div className="projectCard_explanation">{project_explanation}</div>
            <ul className="projectCard_stack">{mapStack}</ul>
            <div className="projectCard_productionPeriod">{project_productionPeriod}</div>
        </div>
    )
}
