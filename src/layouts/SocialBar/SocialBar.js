import SocialMediaLinks from "../../components/SocialMediaLinks/SocialMediaLinks";
import useCurrentRoute from "../../hooks/use-currentRoute";
import styles from './SocialBar.module.scss';

const SocialBar =({data})=>{
const {isMainPage}=useCurrentRoute();
    return (
        <aside className={isMainPage?styles.hide:""}>
            <SocialMediaLinks data={data}/>
        </aside>
    )
}
export default SocialBar;