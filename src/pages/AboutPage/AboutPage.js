import styles from './AboutPage.module.scss';
import Button from '../../components/Button/Button';

import useHttp from '../../hooks/use-http';
import Loader from '../../components/Loader/Loader';
const About = ({resume}) => {
    const { data, isLoading } = useHttp("about");
    if (isLoading||!data) return <Loader />;

    return (
        <section className={styles.about}>
            <article className={styles["about__article"]}>
                <header>
                    <h1> Nice to meet you.<span className={styles.icon}>👋 </span> </h1>
                </header>
                <p>
                    {data.intro.paragraph1}
                    <br />

                    {data.intro.paragraph2}

                </p>
                <Button data={resume} />
            </article>
        
            <section className={styles["about__skills"]}>

                <header>
                    <h1> Skills</h1>
                </header>

                <ul className={styles["about__skills__list"]}>
                    <div className={styles["about__skills__list__skills"]}>
                        {data.skills.tech.map(tech =>
                            <li key={tech}><img
                                src={require(`../../assets/${tech}.png`)}
                                alt={tech} />{tech}</li>)}

                    </div>
                    <div className={styles["about__skills__list__tools"]}>
                        {data.skills.tools.map(tool =>
                            <li key={tool}><img
                                src={require(`../../assets/${tool}.png`)}
                                alt={tool} />{tool}</li>
                        )}

                    </div>
                </ul>

            </section>

        </section>
    )
}
export default About; 