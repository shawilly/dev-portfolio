import { computer, presentation, programming, robot } from '../assets';
import { IService } from '../typings/common.types';

export const services: IService[] = [
    {
        title: 'Full Stack Developer',
        icon: programming,
    },
    {
        title: 'React Native Developer',
        icon: computer,
    },
    {
        title: 'Support Operations',
        icon: robot,
    },
    {
        title: 'Medical BioTechnologist',
        icon: presentation,
    },
];
