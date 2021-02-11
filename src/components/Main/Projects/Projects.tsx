import React from "react"
import { categoryState, filteredProject } from "recoils/project"
import { useRecoilState, useRecoilValue } from "recoil"
import { projectType } from "types/projectType"
import ProjectCard from "../ProjectCard"
import "./Projects.scss"

export default function Projects() {
    const filteredProjectState = useRecoilValue(filteredProject)
    const [category, setCategory] = useRecoilState(categoryState)

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setCategory(value)
        console.log(filteredProjectState)
    }

    return (
        <div className="Projects">
            <div className="Projects_selectDiv">
                <select onChange={onChangeSelect}>
                    <option value="all">All</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="window">Window</option>
                    <option value="server">Server</option>
                </select>
            </div>
            <div className="Projects_projectsDiv">
                {filteredProjectState.map((element: projectType, index: number) => (
                    <ProjectCard
                        key={index}
                        project_name={element.project_name}
                        project_explanation={element.project_explanation}
                        project_image={element.project_image}
                        project_plarform={element.project_plarform}
                        project_productionPeriod={element.project_productionPeriod}
                        project_stack={element.project_stack}
                    />
                ))}
            </div>
        </div>
    )
}
