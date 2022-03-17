
import { NavLink } from "react-router-dom";
import useCurrentRoute from "../../hooks/use-currentRoute";
import styles from './Header.module.scss';
const Header = ({ data }) => {

    const { currentRoute, isMainPage } = useCurrentRoute();


    return (

        <nav className={styles.nav}>
                {!isMainPage && 
            <NavLink to="/home">
                <figure className={styles["nav__logo-box"]}>
                    <span className={styles['logo']}>{data.image}&nbsp;</span>
                    <figcaption>
                        <span className={styles["nav__logo-title"]}>
                                {data.firstName}
                            <span className={styles['icon-greater']}>&nbsp;</span>
                        </span>
                        <span className={styles["active-nav"]}>{currentRoute}</span>
                    </figcaption>

                </figure>
            </NavLink>
                }

            <ul className={`${isMainPage || styles.right}`}>


                <li className={`${currentRoute === "About" && styles.hide}`}>
                    <NavLink to="/about" className={(navData) => navData.isActive ? styles.hide : ""}>
                        About
                    </NavLink>
                </li>
                <li className={`${currentRoute === "Projects" ? styles.hide : ""}`}>
                    <NavLink to="/projects" className={(navData) => navData.isActive ? styles.hide : ""}>
                        Projects
                    </NavLink>

                </li>



            </ul>

        </nav>
    )
}
export default Header;