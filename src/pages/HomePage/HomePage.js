
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks';
import styles from './HomePage.module.scss';
const Home = ({ data, isLoading }) => {
    if (isLoading || !data) return <Loader />
    return (

        <section className={styles.home}>

            <figure className={styles.intro}>
                <div className={styles["intro__image"]}>

                    <span className={styles.image}>{data.image}</span>
                    <span className={styles.greeting}>Hello, world!</span>
                </div>
                <figcaption className={styles.caption}>
<br />
                    <p className={styles["caption__name"]}>"Hi, I am <span>{`${data.firstName} ${data.lastName}`}</span>"</p>
                    <span className={styles['name-cursor']}>_</span>
                    <br />
                    <p className={styles["caption__job"]}>"A {data.jobTitle} ✌" </p>
                    <span className={styles['job-cursor']}>_</span>

                </figcaption>
            </figure>
            <SocialMediaLinks data={data} />

            <Button data={data.resume}/>
        </section>)
}
export default Home;