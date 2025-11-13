import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import EditAvatar from "./pages/EditAvatar";
import ReactMemo from "./pages/ReactMemo";
import UseRef from "./pages/UseRef";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.editAvatar, component: EditAvatar },
            { path: paths.useRef, component: UseRef },
            { path: paths.reactMemo, component: ReactMemo },
            { path: paths.home, component: ReactMemo },
        ],
    },
];

export default routes;
