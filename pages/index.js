import A from '../components/A';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';
 
function HomePage() {
    return (
        <MainContainer keywords={'main page'}>
            <div>
                <h1> Главная страница </h1>
                <style jsx>
                    {`
                        .navbar {
                            background: orange;
                            padding: 15px;
                        }
                    `
                    }
                </style>
            </div>
        </MainContainer>
    );
}

export default HomePage;


// в pages располагаются все страницы которые должны быть в нашем приложении
// наименование файла является частью маршрута
// link отключает привычное поведение браузера

