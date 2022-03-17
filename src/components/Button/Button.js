import styles from "./Button.module.scss";
const Button = ({ data }) => {
    return (
        <a
            className={styles.button}
            href={data}
            target="_blank"
            rel="noreferrer">
            Preview Resume
        </a>
    )
}
export default Button;