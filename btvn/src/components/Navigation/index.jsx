import paths from "@/configs/path";
import { NavLink } from "react-router";

const items = [
    {
        path: paths.useRef,
        title: "useRef",
    },
    {
        path: paths.editAvatar,
        title: "editAvatar",
    },
    {
        path: paths.reactMemo,
        title: "reactMemo",
    },
];

function Navigation() {
    /* Hàm Render Item */

    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "current" : ""
                            }
                            to={item.path}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
