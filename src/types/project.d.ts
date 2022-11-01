export type Project = {
    id: string;
    name: string;
    owner: string;
    tokenTotal: number,
    pointPerToken: number,
    description: string,
}

export const ProjectNull: Project = {
    id: '',
    name: '',
    owner: '',
    tokenTotal: undefined,
    pointPerToken: undefined,
    description: '',
}
