import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, download, me, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { useMediaQuery } from '../utils/MobileDetector';
import { resumeDownload } from '../constants/resume-download';

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navBarColour = (clicked: boolean) => {
        let colour = '';

        if (scrolled) {
            colour = clicked ? '[#F9F9F9]' : 'secondary';
        } else {
            colour = 'tertiary';
        }

        return `text-${colour}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
            } transition-all duration-300`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={me as string} alt="portait" className="w-9 h-9 object-contain rounded-full" />
                    <p className="text-[#F9F9F9] text-[18px] font-bold cursor-pointer flex ">
                        Shane
                        {isTablet ? null : <span>, Software Developer</span>}
                    </p>
                </Link>

                {scrolled && (
                    <Link
                        to={resumeDownload}
                        className="flex items-center gap-5"
                        onClick={() => {
                            setActive('');
                            window.scrollTo(0, 0);
                        }}
                    >
                        <p className="text-[#915EFF] text-[12px] font-bold cursor-pointer flex opacity-75">
                            {isMobile ? 'Too long; didn`t read' : 'tl;dr'}
                        </p>
                    </Link>
                )}

                <ul className={`${isMobile ? 'hidden' : ''} list-none flex flex-row gap-10`}>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${navBarColour(
                                active === nav.title,
                            )} hover:text-#f9f9f9 text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={`${isMobile ? '' : 'hidden'} flex flex-1 justify-end items-center`}>
                    <img
                        src={toggle ? (close as string) : (menu as string)}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'block'
                        } bg-#f9f9f9 absolute top-20 right-0 mt-2 mr-4 py-2 px-3 min-w-[200px] rounded-xl shadow-lg`}
                    >
                        <ul className="list-none flex flex-col gap-2">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? 'text-primary hover:text-primary-dark'
                                            : 'text-secondary hover:text-primary'
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
