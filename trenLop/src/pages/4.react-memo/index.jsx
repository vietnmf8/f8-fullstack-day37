import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

/* 
memo: 
- Khi component cha re-render, trước khi re-render compo con, thì nó sẽ dựa vào Child Comp có bất cứ props nào thay đổi hay không?
=> Component con chỉ re-render khi có props của nó thay đổi

Mục tiêu: Khiến cho component con không re-render một cách thừa thãi, không cần thiết
*/

const ChildComp = memo(
    ({ count, onIncrease }) => {
        console.log("child re-render");

        return (
            <div>
                <h2>Child component {count}</h2>
                <Button onClick={onIncrease}>Count is {count}</Button>
            </div>
        );
    },
    (prev, next) => {
        // return true: luôn nói rằng prop không đổi => Nhấn nút tăng count, nhưng ở UI không cập nhật => rơi vào trạng thái đóng băng
        // return false: "Props lần trước và lần này khác nhau → render lại đi." => ChildComp sẽ re-render mỗi lần Parent re-render, kể cả khi props thật sự không đổi.
        console.log(prev, next); // giá trị trước / sau khi re-render

        // Cơ chế mặc định
        // return prev.count === next.count && prev.onIncrease === next.onIncrease;

        // Nếu không dùng useCallback thì chỉ cần loại bỏ điều kiện so sánh function
        return prev.count === next.count;
    }
);

ChildComp.displayName = "ChildComp";

function ReactMemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useCallback: Giữ lại tham chiếu
    const handleIncrease = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    // const handleIncrease = () => {
    //     setCount(count + 1);
    // };

    return (
        <div>
            <h1>ReactMemo</h1>
            <ChildComp
                count={count}
                // Vẫn bị re-render vì mỗi lần truyền một hàm mới khác tham chiếu
                onIncrease={handleIncrease}
            />

            <Button onClick={() => setCount2(count2 + 1)}>
                Count2 is {count2}
            </Button>
        </div>
    );
}

export default ReactMemo;
