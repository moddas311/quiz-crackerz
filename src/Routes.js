const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("./Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
]);


export default router;