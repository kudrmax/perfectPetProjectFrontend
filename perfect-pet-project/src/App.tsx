import PostList from './components/PostList/PostList.tsx';

const posts = [
    {
        username: "kudrmax",
        name: "Макс Кудряшов",
        text: "Чтобы прокачать навыки в проге, решил заняться отдельным проектом, в котором изучу кучу разных ранее неизученных технологий и применю их к одному приложению (что-то типо твиттера)"
    },
    {username: "kudrmax", name: "Макс Кудряшов", text: "Подписывайтесь на @perfect_pet_peoject"},
    {username: "chere_eline", name: "Элина Чинкина", text: "Пишу диплом......"},
    {username: "Alessandro_Ingannamorte", name: "Ваня Перфилов", text: "Сон - это репетиция смерти."},
];

function App() {
    return (
        <>
            <PostList posts={posts}/>
        </>
    );
}

export default App;
