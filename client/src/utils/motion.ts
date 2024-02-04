import { Variants, Transition, CustomValueType, Tween } from 'framer-motion';

export type TransitionType = string;
export type TransitionDelay = number;
export type TransitionDuration = number;
export type VariantDirection =
    | string
    | number
    | CustomValueType
    | (string | number | CustomValueType | undefined)[]
    | [null, ...(string | number | CustomValueType | undefined)[]]
    | undefined;

export const textVariant = (delay?: TransitionDelay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay: delay || 0,
            },
        },
    } as Variants;
};

export const fadeIn = (
    direction: VariantDirection,
    type: TransitionType,
    delay: TransitionDelay,
    duration: TransitionDuration,
) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    } as Variants;
};

export const zoomIn = (delay: TransitionDelay, duration: TransitionDuration) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    } as Variants;
};

export const slideIn = (
    direction: VariantDirection,
    type: TransitionType,
    delay: TransitionDelay,
    duration: TransitionDuration,
) => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    } as Variants;
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    } as Variants;
};
