import styles from "./SocialMediaLinks.module.scss";
const SocialMediaLinks = ({data}) => {
    
    return (
        <section className={styles["icons-social"]}>
            {Object.keys(data.socialMedia)
                .map(item =>
                    <a key={item}
                        className={`${styles["icon-link"]} ${styles[`${item}-link`]}`}
                        href={item !== "email" ? data.socialMedia[item].link : "mailto:" + data.socialMedia[item].link}
                        target="_blank"
                        rel="noreferrer">
                        <span className={` ${styles['icon']} ${styles[`icon--${item}`]}`}> &nbsp;</span></a>)}
        </section>)
}
export default SocialMediaLinks;