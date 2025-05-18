import styles from './PostContent.module.css';

interface PostContentProps {
    text: string;
}

function PostContent({ text }: PostContentProps) {
    return <div className={styles.cardContentStyle}>{text}</div>;
}

export default PostContent;
