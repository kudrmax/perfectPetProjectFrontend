import styles from './PostCard.module.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

interface Post {
    name: string;
    username: string;
    text: string;
}

interface PostCardProps {
    post: Post;
}

function PostCard({post}: PostCardProps) {
    return (
        <article className={styles.card}>
            <PostHeader name={post.name} username={post.username}/>
            <PostContent text={post.text}/>
        </article>
    );
}

export default PostCard;