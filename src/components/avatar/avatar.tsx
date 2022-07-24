import React, {FC} from 'react'
import styles from './avatar.module.scss'
import {AvatarProps} from "./avatar.types";
import classNames from "classnames";

const Avatar: FC<AvatarProps> = ({className}) => {
    return (
        <img src={`/images/avatar.jpg`} alt="avatar" className={classNames(styles.avatar, className)} />
    )
}

export { Avatar }
