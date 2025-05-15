import PostHeader from '../PostCard/PostHeader';
import styles from './NewPostBox.module.css';

interface NewPostBoxProps {
    name: string;
    username: string;
    value: string;
    onChange: (value: string) => void;
}

function NewPostBox({ name, username, value, onChange }: NewPostBoxProps) {
    return (
        <div className={styles.box}>
            <PostHeader name={name} username={username} />
            <textarea
                className={styles.textarea}
                placeholder="Введите текст..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default NewPostBox;
