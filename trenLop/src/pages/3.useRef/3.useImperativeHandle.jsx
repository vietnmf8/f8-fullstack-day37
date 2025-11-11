import { Button } from "@/components/ui/button";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const styles = {
    textInput: {
        display: "block",
    },
    label: {
        display: "block",
    },
    input: {
        padding: "4px 10px",
        borderRadius: 5,
        border: "1px solid #ccc",
    },
    error: {
        color: "red",
        fontSize: 14,
    },
};

const TextInput = forwardRef(
    ({ label, type = "text", value, error, ...passProps }, ref) => {
        /* 
            - Trả ra một số phương thức bên trong ra bên ngoài
            - Vai trò:
                - Trả ra thứ mà bên ngoài sẽ nhận được thông qua ref
        */
        const inputRef = useRef();
        useImperativeHandle(
            ref,
            () => {
                // return "Test"; // ref tại InputText có current = Test
                return {
                    focus() {
                        inputRef.current.focus();
                    },
                };
            },
            []
        );
        return (
            <div ref={ref} style={styles.textInput}>
                <span style={styles.label}>{label}</span>
                <input
                    {...passProps}
                    ref={inputRef}
                    style={styles.input}
                    type={type}
                    value={value}
                />
                {error && <p style={styles.error}>{error}</p>}
            </div>
        );
    }
);

TextInput.displayName = "TextInput";

function UseRef() {
    const wrapperRef = useRef();

    useEffect(() => {
        console.log(wrapperRef);
    }, []);

    return (
        <div>
            <h1>UseRef</h1>
            <TextInput
                ref={wrapperRef}
                label="Email"
                placeholder="Enter email..."
            />
            <Button onClick={() => wrapperRef.current.focus()}>focus</Button>
        </div>
    );
}

export default UseRef;
