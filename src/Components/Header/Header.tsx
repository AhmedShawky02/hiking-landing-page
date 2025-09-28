import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MenuMobile from "./MenuMobile";
import classes from "../Header/Header.module.css";
import logo from "../../assets/My_logo.png";
import MenuPc from "./MenuPc";
import { AnimatePresence } from "framer-motion"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 850);
        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <header className={classes.header}>
            {menuOpen &&
                <div
                    onClick={() => setMenuOpen(false)}
                    className={classes.overrideOneLier}>
                </div>
            }

            {isMobile ? (
                <AnimatePresence>
                    {menuOpen && (
                        <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    )}
                </AnimatePresence>
            ) : (
                <MenuPc setMenuOpen={setMenuOpen} />
            )}

            {isMobile && !menuOpen && (
                <>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <button
                        className={classes.burger}
                        onClick={() => {
                            setMenuOpen(true);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <FiMenu className={classes.Icon} />
                    </button>
                </>
            )}
        </header>
    );
};

export default Header;
