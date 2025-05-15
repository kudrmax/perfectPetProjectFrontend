import PostCard from '../PostCard/PostCard.tsx';
import styles from './PostList.module.css';

interface Post {
    name: string;
    username: string;
    text: string;
}

interface PostListProps {
    posts: Post[];
}

function PostList({posts}: PostListProps) {
    return (
        <div className={styles.list}>
            {posts.map((post, index) => (
                <PostCard key={index} post={post}/>
            ))}
        </div>
    );
}

export default PostList;
