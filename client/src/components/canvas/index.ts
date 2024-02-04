import EarthCanvas from './Earth';
import ToolPour from './ToolPour';
import ComputersCanvas from './Computers';
import StarsCanvas from './Stars';

export { EarthCanvas, ToolPour, ComputersCanvas, StarsCanvas };

export const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
});
export const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
