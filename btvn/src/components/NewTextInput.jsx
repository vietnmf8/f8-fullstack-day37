import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(
    ({ className, placeholder, value, type, onChange, ...props }, ref) => {
        const inputRef = useRef(null);

        /* Trả ra ngoài inputRef */
        useImperativeHandle(
            ref,
            () => {
                return {
                    focus() {
                        inputRef.current.focus();
                    },
                };
            },
            []
        );

        return (
            <Input
                {...props}
                ref={inputRef}
                className={cn(className)}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
            />
        );
    }
);

/* Debug */
NewTextInput.displayName = "NewTextInput";

/* Định kiểu */
NewTextInput.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default NewTextInput;
