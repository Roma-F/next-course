import A from '../components/A';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({users}) => {
    return (
        <MainContainer keywords={'users'}>
            <A href={'/'} text='Главная'/>
            <h1> Страница с пользователями </h1>
            <ul>
                {users.map(user => 
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a>{user.name}</a>
                    </Link>
                    {/* <A href={`/users/${user.id}`}   text={`${user.name}`}/> */}
                </li>
                )}
            </ul>
        </MainContainer>
    );
} 

export default Users;

export async function getStaticProps(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();
    return {

      props: {users}, // will be passed to the page component as props
    }
  }