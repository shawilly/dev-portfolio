import { computer, presentation, programming, robot } from '../assets';
import { IService } from '../typings/common.types';

export const services: IService[] = [
    {
        title: 'Full Stack Developer',
        icon: programming,
    },
    {
        title: 'Website Development',
        icon: computer,
    },
    {
        title: 'Support Operations',
        icon: robot,
    },
    {
        title: 'Medical BioTechnology',
        icon: presentation,
    },
];
