import { Button } from "@/components/ui/button";
import { useEffect, useRef, forwardRef } from "react";

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
    ({ wrapperRef, label, type = "text", value, error, ...passProps }, ref) => {
        return (
            <label ref={wrapperRef} style={styles.textInput}>
                <span style={styles.label}>{label}</span>
                <input
                    {...passProps}
                    ref={ref}
                    style={styles.input}
                    type={type}
                    value={value}
                />
                {error && <p style={styles.error}>{error}</p>}
            </label>
        );
    }
);

TextInput.displayName = "TextInput";

function UseRef() {
    const inputRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        console.log(wrapperRef.current);
    }, []);

    return (
        <div>
            <h1>UseRef</h1>
            <TextInput
                ref={inputRef} // Ưu tiện chọn lựa đúng với mục đích component
                wrapperRef={wrapperRef}
                label="Email"
                placeholder="Enter email..."
            />
            <Button>focus</Button>
        </div>
    );
}

export default UseRef;
