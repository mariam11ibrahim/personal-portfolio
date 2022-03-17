import useCurrentRoute from "../../hooks/use-currentRoute";
import styles from "./Loader.module.scss";
const Loader = () => {
    const { currentRoute } = useCurrentRoute();
    return (<section className={styles.loader}>
        <div>

            <p className={styles["loader__text"]}>
                👾{currentRoute}...
                
            </p>
        </div>
    </section>)
}
export default Loader;