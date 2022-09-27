import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SelectProps {
    value: boolean
}

export default function Select(props: SelectProps) {
    const gradient = props.value ? "bg-gradient-to-br from-blue-400 to-purple-500" : ""
    
    return (
        <div className={`
            flex justify-center items-center text-white
            h-7 w-7 rounded-full cursor-pointer
            border border-gray-400
            px-3
            ${gradient}
        `}>
            {props.value ? <FontAwesomeIcon icon={faCheck} /> : ""}
        </div>
    )
}