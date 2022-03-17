import "./Footer.module.scss";
const Footer = ({email}) => {
    return (<footer>
        <p>
            Desinged and Developed by <a href={"mailto:" + email}>Mairam Ibrahim</a>.

        </p>
    </footer>)
}
export default Footer;