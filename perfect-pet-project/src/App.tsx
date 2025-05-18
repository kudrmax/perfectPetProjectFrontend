import PostList from './components/PostList/PostList.tsx';
import NewPostBox from "./components/NewPostBox/NewPostBox.tsx";
import {useState} from "react";
import shared from './style/shared.module.css';


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
    const [newText, setNewText] = useState('');

    return (
        <div className={shared.feedLayout}>
            <NewPostBox
                name="Макс Кудряшов"
                username="kudrmax"
                value={newText}
                onChange={setNewText}
            />
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
