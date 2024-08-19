import React from "react";


interface unorderlistProps {
    list: React.ReactNode[]
}


const Unorderlist: React.FC<unorderlistProps> = ({
    list,
}) => {
    return (
        <ul>
            {list.map((item, index) => (
                item && <li key={index}>{item}</li>
            ))}

        </ul>

    )
}
export default Unorderlist;