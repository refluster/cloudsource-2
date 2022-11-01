import axios from 'axios';
import { Project } from '../types/project.d';

const baseUrl = 'https://h7r7m5r0oj.execute-api.us-west-2.amazonaws.com/dev';

const getProjects = async (id?: string) => {
    const url = id? `${baseUrl}/project/${id}`: `${baseUrl}/project`;
    const config = {
        headers: {
        },
    };
    try {
        const res = await axios.get<Project[]>(url, config);
        console.log('data', res.data)
        return res.data;
    } catch(e) {
        console.error("Error in getAllDevices():: ", e);
    }
};

export default {
    getProjects
}
