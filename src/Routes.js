import Blog from "./components/Blog";
import Charts from "./components/Charts";
import Error from "./components/Error";
import Topics from "./components/Topics";


const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("./Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                index: true,
                element: <Topics/>
            },
            {
                path: 'topics',
                element: <Topics/>
            },
            {
                path: 'charts',
                element: <Charts/>
            },
            {
                path: 'blog',
                element: 
                <Blog/>
            }
        ]
    }
]);


export default router;