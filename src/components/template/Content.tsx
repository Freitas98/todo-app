export default function Content(props) {
    return (
        <div className="flex flex-1 justify-center h-screen">
            {props.children}
        </div>
    )
}