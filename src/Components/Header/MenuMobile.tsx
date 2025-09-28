import classes from './MenuMobile.module.css'
import logo from "../../assets/My_logo_Black.png";
import { BiBookContent, BiInfoCircle, BiWrench } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import { FiX } from 'react-icons/fi';
import { motion } from "framer-motion"

const MenuMobile = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <motion.div
                className={classes.containerAnimation}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.4 }}
            >
                <nav className={`${classes.container} ${menuOpen ? classes.open : ""}`}>
                    <div className={classes.logoContainer}>
                        <img className={classes.Logo} src={logo} alt="logo" />
                    </div>

                    <h3 className={classes.Menu_h3}>Menu</h3>

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
                                <BiWrench className={classes.IConLinkHeader} />
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
                                <BiInfoCircle className={classes.IConLinkHeader} />
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
                                <BiBookContent className={classes.IConLinkHeader} />
                                Blog
                            </a>
                        </li>

                    </ul>

                    {/* Close Menu ( While Change By Position )*/}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FiX className={classes.IconCloseMenu} />
                    </button>
                </nav>
            </motion.div>
        </>
    );
}

export default MenuMobile;