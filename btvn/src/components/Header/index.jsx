import { NavLink } from "react-router";
import Navigation from "../Navigation";


// const handleActive = ({ isActive }) => ({
//     padding: 4,
//     background: isActive ? "orange" : "green",
// });

function Header() {
    /*
    NavLink, Link: đều có thể chuyển hướng
    - NavLink: tự động thêm class="active" tại mỗi link điều hướng => CSS
    - Customize tên của active => thay bằng tên bất kỳ VD: .current
    */
    return (
        // Viết CSS inline trực tiếp với object style
        <header style={{ marginTop: 50, padding: 10 }}>
            <Navigation />
        </header>
    );
}

export default Header;
