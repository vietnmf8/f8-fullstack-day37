import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import PreviewAvatar from "./pages/2.PreviewAvatar";
import Products from "./pages/1.mount_unmount";
import UseRef from "./pages/3.useRef/3.useImperativeHandle";
import ReactMemo from "./pages/4.react-memo";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.products, component: Products },
            { path: paths.previewAvatar, component: PreviewAvatar },
            { path: paths.useRef, component: UseRef },
            { path: paths.reactMemo, component: ReactMemo },
        ],
    },
];

export default routes;
