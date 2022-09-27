import FilterType from "../model/FilterType";
import Task from "../model/Task";
import TaskList from "../model/TaskList";

 const initialTasks : Task [] = [
    Task.createActive(1, "Estudar NextJS."),
    Task.createDone(2, "Limpar o carro."),
    Task.createActive(3, "Comprar presente para aniversário.")
 ]

 export default new TaskList(initialTasks, FilterType.NONE)