import { atom, selector, GetRecoilValue } from "recoil"
import { projectType, projectsType } from "types/projectType"
import projectsData from "data/projects.json"
import { category } from "enum/category"

export const projects = atom<projectsType>({
    key: "project/projects",
    default: projectsData,
})

export const categoryState = atom({
    key: "project/category",
    default: "all",
})

export const filteredProject = selector({
    key: "project/project",
    get: ({ get }) => {
        const projectsState = get(projects)
        const category = get(categoryState)

        switch (category) {
            case "web":
                return projectsState.filter((element) => element.project_plarform === "web")
            case "mobile":
                return projectsState.filter((element) => element.project_plarform === "mobile")
            case "window":
                return projectsState.filter((element) => element.project_plarform === "window")
            case "server":
                return projectsState.filter((element) => element.project_plarform === "server")
            default:
                return projectsState
        }
        // return projectsState.find((element) => element.project_name === keyWord)
    },
})
