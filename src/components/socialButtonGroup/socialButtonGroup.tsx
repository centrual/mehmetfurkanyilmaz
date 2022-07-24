import React, {FC} from 'react'
import type {SocialButtonGroupProps} from "./socialButtonGroup.types";
import styles from './socialButtonGroup.module.scss'
import classNames from "classnames";
import {SocialButton} from "../socialButton/socialButton";
import {SocialType} from "../socialButton/socialButton.types";

const SocialButtonGroup: FC<SocialButtonGroupProps> = ({ className, socialButtonClassName }) => {
    return (
        <div className={classNames(styles.socialButtonGroup, className)}>
            <SocialButton className={socialButtonClassName} />
            <SocialButton type={SocialType.LINKEDIN} className={socialButtonClassName} />
            <SocialButton type={SocialType.GITHUB} className={socialButtonClassName} />
            <SocialButton type={SocialType.INSTAGRAM} className={socialButtonClassName} />
        </div>
    )
}

export { SocialButtonGroup };
