import {useRoutes} from "react-router-dom";
import Registration from "../pages/registration/Registration";
import Authorization from "../pages/authorization/Authorization";

const Router = () => {
    return useRoutes([
        {
            path: "/reg", element: <Registration/>
        },
        {
            path: "/auth", element: <Authorization/>
        }
    ])
}

export default Router;