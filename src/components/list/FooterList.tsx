import TaskList from "../../model/TaskList"
import ListButton from "./ListButton"

interface FooterListProps{
    tasks: TaskList
    onChange: (tasks: TaskList) => void
}

export default function FooterList(props: FooterListProps) {
    const { tasks, onChange } = props;

    function renderItemQuantity() {
        return (
            <>
                <span className="text-gray-300 hidden lg:inline">
                    {tasks.quantity > 0 && tasks.quantity}
                    {tasks.quantity === 0
                    ? " Nenhuma tarefa encontrada"
                    : tasks.quantity === 1
                        ? " Tarefa encontrada" 
                        : " Tarefas encontradas"}
                </span>
                <span className="flex-1 hidden lg:inline"></span>
            </>
        )
    }

    function renderFilterButtons() {
        return (
            <>
                <ListButton 
                    selected={tasks.showingAll()} 
                    onClick={() => onChange(tasks.removeFilter())}
                    className="hidden md:inline"
                >
                    Todas
                </ListButton>
                <ListButton 
                    selected={tasks.showingOnlyActive()} 
                    onClick={() => onChange(tasks.filterActives())}
                    className="mr-1 md:mx-4"
                >
                    Ativas
                </ListButton>
                <ListButton 
                    selected={tasks.showingOnlyDone()} 
                    onClick={() => onChange(tasks.filterDones())}
                    className="mr-1"
                >
                    Concluídas
                </ListButton>
            </>
        )
    }

    function renderRemoveDoneTasks() {
        return (
            <>
                <span className="flex-1"></span>
                <ListButton 
                    onClick={() => onChange(tasks.excludeDones())}
                >
                    Excluir <span className="hidden md:inline">Concluídas</span>
                </ListButton>
            </>
        )
    }

    return (
        <li className="flex p-5">
            {renderItemQuantity()}
            {renderFilterButtons()}
            {renderRemoveDoneTasks()}
        </li>
    )
}