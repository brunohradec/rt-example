import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./modules/router/router";
import { store } from "./modules/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
