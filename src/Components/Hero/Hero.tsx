import { FaFacebookSquare, FaInstagram, FaLongArrowAltDown } from "react-icons/fa";
import classes from "./Hero.module.css"
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div className={classes.HeroSection}>
                <div className={classes.sky}></div>
                <div className={classes.container}>
                    <h3 className={classes.subtitle}><span>&#8212;&#8212;&#8212;</span> A Hiking guide</h3>
                    <h2 className={classes.title}>Be prepared for the Mountains and beyond!</h2>
                    <button className={classes.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById("01");
                            if (section) {
                                const offset = 150; 
                                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top, behavior: "smooth" });
                            }
                        }}
                    >
                        scroll down
                        <FaLongArrowAltDown />
                    </button>
                </div>
            </div>
            <div className={classes.socialHero}>
                <p>Follow us</p>
                <FaInstagram className={classes.iconSocial} />
                <FaFacebookSquare className={classes.iconSocial} />
                <FaSquareXTwitter className={classes.iconSocial} />
            </div>
            <div className={classes.hill}></div>
            <div className={classes.mountains}></div>
        </>
    );
}

export default Hero;