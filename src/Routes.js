// {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: 'home',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'books',
//         element: <Books />,
//         loader: () => fetch('https://api.itbook.store/1.0/new'),
//       },
//       {
//         path: 'book/:id',
//         element: <BookDetails />,
//         loader: ({ params }) =>
//           fetch(`https://api.itbook.store/1.0/books/${params.id}`),
//       },
//     ],
//   },
// ])

import Blog from "./components/Blog";
import Charts from "./components/Charts";
import Error from "./components/Error";
import TopicQuiz from "./components/TopicQuiz";
import Topics from "./components/Topics";


const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("./Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Topics />,
                loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: 'topics',
                element: <Topics />,
                loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'charts',
                element: <Charts />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            },
            {
                path: 'topic/:id',
                element: <TopicQuiz />,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
        ]
    }
]);


export default router;