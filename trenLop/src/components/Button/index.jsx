import PropTypes from "prop-types";

function Button({ type = "submit", size = "m", children, onClick }) {
    return (
        <button size={size} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string, // Kiểu chuỗi
    onClick: PropTypes.func, // Hàm

    children: PropTypes.node,

    size: PropTypes.oneOf(["s", "m", "l"]),

    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        age: PropTypes.number,
    }),

    link: (props, propName, componentName) => {
        const value = props[propName];
        if (
            value &&
            !value.startWith("http://") &&
            !value.startWith("https://")
        ) {
            return new Error(
                "Invalid prop `" +
                    propName +
                    "` supplied to" +
                    " `" +
                    componentName +
                    "`. Validation failed."
            );
        }
    },
};

export default Button;
