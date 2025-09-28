import classes from "./Footer.module.css"
import logo_white from "../../assets/My_logo.png"

const Footer = () => {
    return (
        <>
            <footer className={classes.footerSection}>
                <div className={classes.container}>
                    <div className={classes.logo_Title}>
                        <img src={logo_white} alt="logo_white" />
                        <p>Get out there & discover your next slope, mountain & destination!</p>
                    </div>
                    <div className={classes.linksData}>
                        <div className={classes.group}>
                            <h3>More on The Blog</h3>
                            <ul className={classes.links}>
                                <li><p >About AS</p></li>
                                <li><p >Contributors & Writers</p></li>
                                <li><p >Write For Us</p></li>
                                <li><p >Contact Us</p></li>
                                <li><p >Privacy Policy</p></li>
                            </ul>
                        </div>
                        <div className={classes.group}>
                            <h3>More on AS</h3>
                            <ul className={classes.links}>
                                <li><p >The Team</p></li>
                                <li><p >Jobs</p></li>
                                <li><p >Press</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;