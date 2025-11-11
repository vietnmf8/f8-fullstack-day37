import NewTextInput from "@/components/NewTextInput";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

function UseRef() {
    const clickCountRef = useRef(0); // {current: 0}
    const inputRef = useRef(null);
    const newRef = useRef(null);

    /* Click count */
    const handleClick = () => {
        clickCountRef.current += 1;
        if (clickCountRef.current % 5 === 0) {
            alert(`Click ${clickCountRef.current} lần`);
        }
    };

    /* Focus Text Input */
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    /* Remove Text Input */
    const handleRemove = () => {
        if (inputRef.current) {
            inputRef.current.remove(); // Không unmount nên vẫn giữ lại tham chiếu
        }
    };

    /* Focus New Input */
    const handleNewFocus = () => {
        if (newRef.current) {
            newRef.current.focus();
        }
    };

    return (
        <div className="p-10 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">UseRef </h1>

            <TextInput
                ref={inputRef}
                type="email"
                placeholder={"Nhập Email 1..."}
            />

            <NewTextInput
                ref={newRef}
                type="email"
                placeholder={"Nhập Email 2..."}
            />

            <Button onClick={handleClick}>Click me!</Button>
            <Button variant="destructive" onClick={handleRemove}>
                Remove
            </Button>
            <Button variant="outline" onClick={handleFocus}>
                Focus
            </Button>
            <Button variant="outline" onClick={handleNewFocus}>
                Focus
            </Button>
        </div>
    );
}

export default UseRef;
