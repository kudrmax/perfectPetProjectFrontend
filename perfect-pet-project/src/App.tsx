import PostList from './components/PostList/PostList.tsx';

const posts = [
    { username: "devmax", name: "Макс", text: "Первый пост!" },
    { username: "elonmusk", name: "Илон", text: "🚀 Мы летим на Марс!" },
    { username: "jdoe", name: "Джон", text: "Всем привет!" },
];

function App() {
    return (
        <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh', padding: '32px' }}>
            <PostList posts={posts} />
        </div>
    );
}

export default App;
