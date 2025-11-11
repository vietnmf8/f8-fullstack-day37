import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
/*  
   - Mount: Khi component được sử dụng/lắp vào (tức là khi element <Component/> được thêm vào DOM)
   - Unmount: Khi component không được React sử dụng nữa (tháo ra)

   => useEffect: Luôn chạy vào trong lần được mount:
    - Khi được mount rồi => thực hiện setState => component re-render lại (chứ không được mount lại)
    - Mount lại: tức là được unmount (tháo ra) rồi mount lại (lắp vào)
   
   
   VD: Nếu nhấn sang trang khác (sử dụng router), thì không còn trang <Products/> => unmount tự động


   Vấn đề: Tại lần được mount => add thêm trình lắng nghe sự kiện
   - Unmount và mount lại => add thêm trình lắng nghe sự kiện
   ... CỨ thế mỗi lần lại bị add thêm nhiều => nhiều thằng xử lý cùng một lúc => memory leak

   => Lúc này chúng ta cần dọn dẹp các trình lắng nghe ở cleanup
   */

function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Lắng nghe sự kiện scroll...");
        const handle = () => {
            console.log("Count:", count);
            setCount(count + 1);
        };
        document.addEventListener("scroll", handle);

        // Nếu return về một hàm => hàm cleanup (dọn dẹp)
        // Thời điểm chạy:
        // 1. trước khi component được unmount
        // 2. Khi component re-render và ít nhất 1 deps thay đổi
        // 3. Hàm clean up chạy trước (để clear cái cũ) rồi callback trong useEffect mới chạy
        return () => {
            // Cleanup
            document.removeEventListener("scroll", handle);
        };
    }, [count]);
    return (
        <div>
            <h1>Test</h1>
            <button onClick={() => setCount(count + 1)}>
                Count is {count}
            </button>
        </div>
    );
}

function Products() {
    const [params] = useSearchParams();
    const [show, setShow] = useState(false);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [products, setProducts] = useState([]);
    const [lastPage, setLastPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    // Lấy value từ param
    const currentPage = Number(params.get("page"));

    /* Xử lý bất đồng bộ */
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api01.f8team.dev/api/products?page=${currentPage}`)
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data.items);
                setLastPage(response.data.pagination.last_page);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage]);

    /* Phân trang */
    const renderPagination = () => {
        return Array(lastPage)
            .fill()
            .map((_, index) => {
                const pageNum = index + 1;
                const isActive = pageNum === currentPage;
                return (
                    <Link
                        key={index}
                        style={{
                            display: "inline-block",
                            padding: 4,
                            border: "1px solid #333",
                            background: isActive ? "orange" : "",
                        }}
                        to={`?page=${pageNum}`}
                    >
                        {pageNum}
                    </Link>
                );
            });
    };

    /* JSX */
    return (
        <>
            {show && <Test />}
            <button onClick={() => setShow(!show)}>Toggle</button>
            <h1>Products</h1>
            <Button onClick={() => setCount1(count1 + 1)}>
                Count 1 is {count1}
            </Button>

            <Button onClick={() => setCount2(count2 + 1)}>
                Count 2 is {count2}
            </Button>

            {isLoading && <div>...Loading</div>}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id}. {product.title}
                    </li>
                ))}
            </ul>

            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    gap: 20,
                }}
            >
                {renderPagination()}
            </ul>
        </>
    );
}

export default Products;
