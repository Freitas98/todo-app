import TaskList from "../../model/TaskList"
import FooterList from "./FooterList";
import ItemList from "./ItemList";

interface ListProps {
    tasks: TaskList
    onChange: (tasks: TaskList) => void
}

export default function List(props: ListProps) {
    const { tasks } = props;

    function renderTasks() {
        return tasks.itens.map(task => {
            return (
                <ItemList 
                    key={task.id}
                    value={task.description}
                    ended={task.done}
                    changeStatus={() => {
                        const changedTask = task.changeStatus();
                        const newList = tasks.changeTask(changedTask);
                        props.onChange(newList)
                    }}
                />
            )
        })
    }
    
    return (
        <div className={`flex w-3/5 items-start relative`}>
            <ul className={`
                absolute -top-14 landscape:-top-5
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}>
                {renderTasks()}
                <FooterList 
                    tasks={tasks} 
                    onChange={props.onChange}
                />
            </ul>
        </div>
    )
}