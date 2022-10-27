import React from 'react';

const Button = ({
    color,
    className,
    onClick = ()=>{},
    type="button",
    title,
    icon,
    padding=5,

    
}) => {
    return (
       <button
        className={className?className:""}
        type={type}
        style={{padding:{padding}}}
       >
        {title}
       </button>
    );
};

export default Button;