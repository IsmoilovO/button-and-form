import React, { useState } from "react";
import "./button.css";

export const useButton = (initialText, initialClassName) => {
    const [text, setText] = useState(initialText);
    const [className, setClassName] = useState(initialClassName);

    const updateText = (newText) => setText(newText);
    const updateClassName = (newClassName) => setClassName(newClassName);

    return {
        text,
        className,
        updateText,
        updateClassName,
    };
};

const BlueButton = () => {
    const { text, className } = useButton("Click here", "btn");

    return (
        <button className={className}>
            {text}
        </button>
    );
};

export default BlueButton;
