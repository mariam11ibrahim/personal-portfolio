import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import useHttp from "../../hooks/use-http";
import styles from "./ProjectsPage.module.scss";
const Projects = () => {
    const { data, isLoading } = useHttp("projects");
    if (!data || isLoading) return <Loader />
    return (<section className={styles.projects}>
        {data.map((pro,index )=> <Project index={index}key={pro.name}
            name={pro.name}
            details={pro.about}
            skills={pro.tech}
            img={pro.image}
            links={pro.links} />)}

    </section>)
}
export default Projects;