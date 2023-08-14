import classNames from "classnames";
import React, { useId, useState } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string    
}

function TextInput({ labelText, id, ...inputProps }: TextInputProps) {
    const defaultId = useId();
    const inputId = id ?? defaultId;

    const [active, setActive] = useState(false);
    const [value, setValue] = useState("");
    const labelClasses = classNames({
        "text-lg text-gray-500 top-4 left-4": !active && !value,
        "text-sm -top-4 left-0": active || value
    }, "transition-all absolute pointer-events-none leading-none");

    return (
        <div className={classNames("relative w-full flex flex-col justify-center bg-white shadow-sm transition-all", { "mt-4": active || value })}>
            <label className={labelClasses} htmlFor={inputId}>{ labelText }{inputProps.required && <span className={classNames({ "text-red-500": active })}>*</span>}</label>
            <input 
                className="border-[0.5px] outline-none px-4 py-3 rounded" 
                {...inputProps}
                value={value}
                onChange={event => setValue(event.target.value)}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            />
        </div>
    );
}

export default TextInput;
