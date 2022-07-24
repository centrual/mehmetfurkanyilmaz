import React, {FC} from 'react'
import type {WorkExperienceCardProps} from './workExperienceCard.types'
import classNames from "classnames";
import styles from './workExperienceCard.module.scss'

const WorkExperienceCard: FC<WorkExperienceCardProps> = ({ className, logoImageUrl, logoAlt, logoUrl, description }) => {
    return (
        <article className={classNames(styles.workExperienceCard, className)}>
            <h4 className={styles.logoArea}>
                <a href={logoUrl} target={'_blank'} rel={'noopener noreferrer'}>
                    <img src={logoImageUrl} alt={logoAlt} />
                </a>
            </h4>

            <p className={styles.description}>{description}</p>
        </article>
    )
}

export { WorkExperienceCard };
