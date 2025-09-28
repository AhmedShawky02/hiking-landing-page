import { FaLongArrowAltRight } from "react-icons/fa";
import classes from "./Section.module.css"

const Section = (
    {
        h3_subtitle,
        h2_title,
        p_description,
        button_label,
        image,
        image_dir_right = false,
        section_number,
        nomargin = false
    }:
        {
            h3_subtitle: string,
            h2_title: string,
            p_description: string,
            button_label: string,
            image: string,
            image_dir_right?: boolean
            section_number: string,
            nomargin?: boolean
        }
) => {
    return (
        <>
            <div id="01" className={classes.Section}>
                <div
                    className={`${classes.container} 
                        ${nomargin ? classes.deletemargin : ""} 
                        ${image_dir_right ? classes.changeDir : ""}`}
                >
                    <div className={classes.content}>
                        <p className={classes.section_number}>{section_number}</p>
                        <h3 className={classes.subtitle}><span>&#8212;&#8212;&#8212;</span> {h3_subtitle}</h3>
                        <h2 className={classes.title}>{h2_title}</h2>
                        <p className={classes.description}>{p_description}</p>
                        <button className={classes.btn}>{button_label} <FaLongArrowAltRight /></button>
                    </div>
                    <div className={classes.images}>
                        <img src={image} alt="image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;