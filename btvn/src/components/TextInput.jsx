import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const TextInput = forwardRef(
    ({ className, placeholder, value, type, onChange, ...props }, ref) => {
        return (
            <Input
                {...props}
                ref={ref}
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
TextInput.displayName = "TextInput";

/* Định kiểu */
TextInput.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;
