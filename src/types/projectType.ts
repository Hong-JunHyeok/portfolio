export type projectType = {
    project_name: string // 프로젝트의 이름
    project_plarform: string //프로젝트의 플랫폼 ex)모바일 , 웹 등
    project_image: string //프로젝트의 이미지( 접속 가능한 웹사이트형태의 이미지 )
    project_stack: string[] //프로젝트의 스택 ex)typescript,recoil,scss 등
    project_explanation: string //프로젝트의 설명
    project_productionPeriod: string //프로젝트의 제작기간 : YYYY-MM-DD~YYYY-MM-DD
}

export type projectsType = projectType[]
