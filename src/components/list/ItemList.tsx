import Select from "./Select"

interface ItemListProps {
    value: string
    ended: boolean
    changeStatus: () => void
}

export default function ItemList(props: ItemListProps) {
    const textStyle = props.ended ? "line-through text-gray-300" : "text-gray-500"

    return (
        <li onClick={props.changeStatus} className={`
            flex items-center p-5 text-xl break-all
            text-black
            border-b border-gray-400 cursor-pointer
        `}>
            <Select value={props.ended} />
            <span className={`font-light ml-5 ${textStyle}`}>
                {props.value}
            </span>
        </li>
    )
}