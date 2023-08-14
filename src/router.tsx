import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import RequestAccessPage from "./routes/RequestAccessPage";
import SetupPayment from "./routes/SetupPayment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/request-access',
        element: <RequestAccessPage />
    },
    {
        path: '/setup-payment',
        element: <SetupPayment />
    }
]);

export default router;
