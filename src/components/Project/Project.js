import styles from "./Project.module.scss";
const Project = ({ name, img, details, skills, links }) => {
    const { live, github } = links;
    
    return (

        <figure className={`${styles["projects__figure"]} `} >

            <div className={`${styles["projects__img-container"]}`} >
                <img src={img} alt="" />

            </div>

            <figcaption className={styles["projects__caption"]}>

                <header className={styles["projects__caption__header"]}>
                    <h1>{name}</h1>
                </header>

                <article className={styles["projects__caption__details"]}>
                    <p>
                        {details}
                    </p>
                </article>

                <ul className={styles["projects__caption__skill-list"]} >
                    {

                        skills.map(skill => <li key={skill}>{skill}</li>)
                    }

                </ul>
                <div className={styles["projects__caption__preview"]}>
                    <a  target="_blank" href={github} rel="noreferrer">Code Preview </a>
                    <a target="_blank" href={live} rel="noreferrer">Live Preview </a>
                </div>

            </figcaption>
        </figure>

    )
}

export default Project;