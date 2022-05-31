import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

interface IMovie {
    id: number;
    title: string;
    year: number;
    released: string;
    runtime: string;
    genre: Array<string>;
    director: string;
    writer: string;
    actors: Array<string>;
    plot: string;
    country: string;
    poster: string;
    imdbRating: number;
    imdbVotes: number;
    type?: string;
    boxOffice: string;
    production: string;
}

interface IUser {
    "id": number;
    "email": string;
    "first_name": string;
    "last_name": string;
    "avatar": string;
    "age": number;
}

const users: Array<IUser> = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];

const movies: Array<IMovie> = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
    {
        id: 3,
        title: "Star Wars",
        year: 1977,
        released: "25 May 1977",
        runtime: "121 min",
        genre: ["Action", "Adventure", "Fantasy"],
        director: "George Lucas",
        writer: "George Lucas",
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
        country: "United States, United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        imdbRating: 8.6,
        imdbVotes: 1259440,
        type: "movie",
        boxOffice: "$460,998,507",
        production: "Lucasfilm Ltd.",
    },
    {
        id: 4,
        title: "Harry Potter and the Half-Blood Prince",
        year: 2009,
        released: "15 Jul 2009",
        runtime: "153 min",
        genre: ["Action", "Adventure", "Family"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
        country: "United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 492245,
        boxOffice: "$302,305,431",
        production: "Heyday Films, Warner Bros.",
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        released: "16 Nov 2001",
        runtime: "152 min",
        genre: ["Adventure", "Family", "Fantasy"],
        director: "Chris Columbus",
        writer: "J.K. Rowling, Steve Kloves",
        actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
        plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 684604,
        boxOffice: "$318,087,620",
        production: "1492 Pictures, Heyday Films, Warner Brothers",
    }

]
// 1. Собрать в массив все жанры фильмов (без повторения)
const uniqueGenres: Array<string> = movies.reduce((acc: Array<string>, movie: IMovie) => Array.from(new Set([...acc, ...movie.genre])), []);

// 2.  Собрать в массив всех актеров всех фильмов (без повторения)
const uniqueActors: Array<string> = movies.reduce((acc: Array<string>, movie: IMovie) => Array.from(new Set([...acc, ...movie.actors])), []);

// 3.  Отсортировать фильмы по рейтингу по убыванию
const sortedDescByRating: Array<IMovie> = [...movies].sort((a: IMovie, b: IMovie) => b.imdbRating - a.imdbRating);

// 4.  Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot
type IMovieView = Pick<IMovie, 'id' | 'title' | 'released' | 'plot'>
const movieViews: Array<IMovieView> = movies.map((movie: IMovie) => ({
    id: movie.id,
    title: movie.title,
    released: movie.released,
    plot: movie.plot
}));

// 5.  Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году
// выхода фильма.
const getMoviesByYear = (movies: Array<IMovie>, year: number): Array<IMovie> => movies.filter((movie: IMovie) => movie.year === year);

// 6.  Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в
// название фильма.
const getMoviesByTitle = (movies: Array<IMovie>, title: IMovie["title"]): Array<IMovie> => movies.filter((movie: IMovie) => movie.title.includes(title));

// 7.  Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в
// название фильма или в его сюжет.
const getMoviesByTitleAndPlot = (movies: Array<IMovie>, query: string): Array<IMovie> => movies.filter((movie: IMovie) =>
    movie.title.includes(query) || movie.plot.includes(query));

// 8.  Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2) строка(название поля, например 'title') и
// строку/число(значение поля "Black Widow"). А результатом этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма. Например:
// передаем (films, 'title', 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year', 2011) , то получаем фильм с id=2
const getMoviesWithParams = (movies: Array<IMovie>, fieldName: string, fieldValue: string | number): Array<IMovie> =>
    movies.filter((movie: any) => movie[fieldName] === fieldValue);

// 3. В одну строчку 3 задание из классной работы
const userIdsAndFullNames = users.map((user) => ({id: user.id, fullName: `${user.first_name} ${user.last_name}`}));

// *6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей
// существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву Y, а значит и такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford, Ferdinand: { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }
const mapByLastName = (users: Array<IUser>): Record<string, Array<string>> => users.reduce((acc: any, user: IUser) => {
    const {last_name: lastName} = user;
    const key = lastName.trim()[0].toLocaleLowerCase();
    return acc.hasOwnProperty(key) ? {...acc, [key]: [...acc[key], lastName]} : {...acc, [key]: [lastName]};
}, {})
const newObj: Record<string, Array<string>> = mapByLastName(users);