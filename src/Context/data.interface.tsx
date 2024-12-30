export interface IContext {
    data : IData,
    loading: boolean
}

export interface IData{
    name: string;
    title: string;
    about: IAbout
    skills: ISkills;
    pageHeadings: IPageHeadings
    social: Array<ISocial>;
    experience: Array<IExperience>;
}

export interface IExperience{
    role: string;
    company: string;
    period: {
        from: string | number;
        to: string | number
    }
    responsibilities: Array<string>
}
export interface IPageHeadings{
    resume: PageHeadings
}

export interface PageHeadings{
    title: string;
    text?: string;
}

export interface ISocial{
    title: string;
    url: string;
}

export interface  IAbout{
    summary: string;
}

export interface ISkills{
    mainSkills : Array<string>
}
