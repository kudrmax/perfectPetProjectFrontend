import styles from './PostHeader.module.css';

interface PostHeaderProps {
    name: string;
    username: string;
}

function PostHeader({name, username}: PostHeaderProps) {
    return (
        <div className={styles.cardHeaderLayout}>
            <div className={styles.avatar}/>
            <div className={styles.cardHeaderTextsLayout}>
                <div className={styles.name}>{name}</div>
                <div className={styles.username}>@{username}</div>
            </div>
        </div>
    );
}

export default PostHeader;
