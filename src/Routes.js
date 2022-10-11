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
                element: <Topics />
            },
            {
                path: 'topics',
                element: <Topics />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            },
            {
                path: 'charts',
                element: <Charts />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'topic/:id',
                element: <TopicQuiz />,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
]);


export default router;