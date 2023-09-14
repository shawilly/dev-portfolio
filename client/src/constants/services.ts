import { web, mobile, backend, creator } from "../assets";
import { IService } from "../typings/common.types";

export const services: IService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Support Operations",
    icon: creator,
  },
  {
    title: "Medical BioTechnologist",
    icon: backend,
  },
];
