import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [random, setRandom] = useState(Math.random());
    const [show, setShow] = useState(true);
    const clickCountRef = useRef(0); // {current: 0}

    /*
    useRef luôn trả về object có current (key): initialValue (value):
    - cũng lưu trữ giá trị cũ giống useState
    - Nhưng không re-render khi thay đổi giá trị
    - Tác dụng chính:
        - truy cập phần tử DOM thật
    */

    const inputRef = useRef(null);
    const divRef = useRef(null);
    const h1Ref = useRef(null);

    useEffect(() => {
        //? Tại sao không nên dùng querySelector
        /*
        Vì querySelector không tự cập nhật tham chiếu:
        -  VD: unmount thẻ div#div-id đi, nhưng querySelector vẫn tham chiếu đến div#div-id cũ nên vẫn log ra được

        - còn nếu dùng useRef nếu unmount div thì sẽ dọn div đi luôn
        */
        // inputRef.current = document.querySelector("#email");
        // console.log(inputRef.current);
        // Cách này ok , nhưng useRef đã tự động làm
    }, [show]);
    // Tuy không re-render DOM nhưng vẫn re-render component
    return (
        <div ref={divRef}>
            <h1
                ref={h1Ref}
                onClick={() => {
                    const color = h1Ref.current.style.color;
                    h1Ref.current.style.color = color ? "" : "red";
                }}
            >
                UseRef
            </h1>
            <button
                onClick={() => {
                    clickCountRef.current++;
                    setRandom(Math.random());
                }}
            >
                Random is {random}
            </button>

            {show && <Input ref={inputRef} type="email" placeholder="Email" />}
            <Button
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                focus
            </Button>
            <Button onClick={() => setShow(!show)}>Toggle</Button>
        </div>
    );
}

export default UseRef;
