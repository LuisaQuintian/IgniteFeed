import styles from "./Avatar.module.css"

export const Avatar = ({src = "https://github.com/LuisaQuintian.png", hasBorder}) => {
    const {avatar, avatarWithBorder } = styles   

    return (
        <img
            className={hasBorder ? avatarWithBorder : avatar}
            src={src}
        />
    )
}