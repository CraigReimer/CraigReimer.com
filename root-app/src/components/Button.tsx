import { useState } from "react";

interface ButtonProps {
    style: string;
    myClasses: string;
    // onClick: () => void;
    children: string;
}

function Button({ style, myClasses, children }: ButtonProps) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        // onClick();
    };

    return (
        <button
            className={`${myClasses} btn btn-${style} ${
                selected ? "active" : ""
            }`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;
