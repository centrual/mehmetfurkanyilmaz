import React from 'react'
import {Avatar} from "../../components/avatar/avatar";
import styles from './home.module.scss'
import {SocialButtonGroup} from "../../components/socialButtonGroup/socialButtonGroup";
import {WorkExperienceCard} from "../../components/workExperienceCard/workExperienceCard";

const Home = () => {
    return (
        <section className={styles.home}>
            <Avatar />

            <h1>Mehmet Furkan Yılmaz</h1>
            <h2>Co-founder & Frontend Developer</h2>

            <SocialButtonGroup className={styles.socialIconGroup} socialButtonClassName={styles.socialIcon} />

            <div className={styles.workExperiences}>
                <WorkExperienceCard
                    description={'I am currently working at TetaHQ as frontend developer. I usually work on developing the interfaces of web sites and mobile applications.'}
                    logoImageUrl={'/images/tetahq_logo.svg'}
                    logoUrl={'https://tetahq.com'}
                    logoAlt={'TetaHQ'}
                />
            </div>
        </section>
    )
}

export { Home };
