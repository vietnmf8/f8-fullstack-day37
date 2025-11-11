import Header from "@/components/Header";
import { Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div>
            <main
                style={{
                    minHeight: "100vh",
                    padding: "20px"
                }}
            >
                {/* Lấy nội dung của Route hiện tại -> đưa vào Outlet */}
                <Outlet />
            </main>

            <footer></footer>
        </div>
    );
}

export default DefaultLayout;
