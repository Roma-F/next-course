//в квадратных скокбах задается по шаблону в квадратных скобках
// c помощью папок создаются вложенные маршруты

// для доступа к users используем хук useRouter
import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';

export default function User({user}) {
    const {query} = useRouter();
 
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}


  export async function getServerSideProps({params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await resp.json();

    return {
      props: {user}, // will be passed to the page component as props
    }
  }