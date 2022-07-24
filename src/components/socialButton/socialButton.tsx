import React, {FC} from 'react'
import classNames from "classnames";

import type {SocialButtonProps} from "./socialButton.types";
import {SocialType} from "./socialButton.types";

import MailFillIcon from "remixicon-react/MailFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";

import styles from './socialButton.module.scss'
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import { Config } from "../../config";

const SocialButton: FC<SocialButtonProps> = ({type, className}) => {
    let icon: JSX.Element;
    let url: string;

    switch(type) {
        case SocialType.INSTAGRAM:
            icon = (<InstagramFillIcon className={classNames(styles.socialButton, className)} />);
            url = Config.socialLinks.instagram;
            break;
        case SocialType.LINKEDIN:
            icon = (<LinkedinBoxFillIcon className={classNames(styles.socialButton, className)} />);
            url = Config.socialLinks.linkedin;
            break;
        case SocialType.GITHUB:
            icon = (<GithubFillIcon className={classNames(styles.socialButton, className)} />);
            url = Config.socialLinks.github;
            break;
        default:
            icon = (<MailFillIcon className={classNames(styles.socialButton, className)} />);
            url = Config.socialLinks.mail;
    }

    return (
        <a className={styles.socialButtonLink} href={url} target={'_blank'} rel={'noopener noreferrer nofollow'}>
            {icon}
        </a>
    )
}

export { SocialButton };
