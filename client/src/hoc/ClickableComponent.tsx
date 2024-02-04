import React, { ReactNode } from 'react';

type ClickableComponentProps = {
    component: React.ComponentType<any>;
    onClick?: () => void;
    className?: string;
};

const ClickableComponent: React.FC<ClickableComponentProps> = ({ component: Component, className, onClick }) => {
    return (
        <div
            className={`relative max-w-xs overflow-hidden bg-cover bg-no-repeat ${className}`}
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={onClick}
        >
            <Component />
            <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
        </div>
    );
};

export default ClickableComponent;
