import logo from "../../assets/My_logo.png";
import {  BiHotel, BiMapPin, BiPlanet } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import classes from "./MenuPc.module.css";
import { motion } from "framer-motion"
import { CgProfile } from "react-icons/cg";

const MenuPc = ({ setMenuOpen }: { setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <motion.div
                className={classes.containerAnimation}
                initial={{ opacity: 0.5, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: -30 }}
                transition={{ duration: 0.4 }}
            >
                <nav className={classes.container}>
                    {/* اللوجو */}
                    <div className={classes.logoContainer}>
                        <img className={classes.Logo} src={logo} alt="logo" />
                    </div>

                    {/* الروابط */}
                    <ul className={classes.list}>

                        <li className={classes.li_Item}>
                            <a
                                className={classes.ALink}
                                href="#Equipment"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Equipment");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiMapPin className={classes.IConLinkHeader} />
                                Equipment
                            </a>
                        </li>

                        <li className={classes.li_Item}>
                            <a
                                className={classes.ALink}
                                href="#About us"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("About us");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiHotel className={classes.IConLinkHeader} />
                                About us
                            </a>
                        </li>

                        <li className={classes.li_Item}>
                            <a
                                className={classes.ALink}
                                href="#Blog"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Blog");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiPlanet className={classes.IConLinkHeader} />
                                Blog
                            </a>
                        </li>

                    </ul>

                    {/* الزرار / أكشن */}
                    <div className={classes.actionContainer}>
                        <a
                            href="#Account"
                            className={classes.accountLink}>
                            <CgProfile fontSize={25} />
                            Account
                        </a>
                    </div>
                </nav>
            </motion.div>
        </>
    );
}

export default MenuPc;