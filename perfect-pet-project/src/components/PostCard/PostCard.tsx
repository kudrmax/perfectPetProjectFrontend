import styles from './PostCard.module.css';

interface Post {
    name: string;
    username: string;
    text: string;
}

interface PostCardProps {
    post: Post;
}

function PostCard({post}: PostCardProps) {
    const {name, username, text} = post
    return (
        <article className={styles.card}>
            <header>
                <div className={styles.name}>{name}</div>
                <div className={styles.username}>@{username}</div>
            </header>
            <p className={styles.text}>{text}</p>
        </article>
    )
}

export default PostCard;