import FilterType from "./FilterType"
import Task from "./Task";

export default class TaskList {
    #all: Task[]
    #filterType: FilterType

    constructor(all: Task[], filterType = FilterType.NONE){
        this.#all = all;
        this.#filterType = filterType ?? FilterType.NONE
    }

    get itens() {
        return this.#applyFilterOn(this.#all);
    }

    get quantity(){
        return this.itens.length;
    }

    get filterUsed() {
        return this.#filterType
    }

    addTask(newTask: Task): TaskList {
        const allTasks = [...this.#all];
        allTasks.push(newTask);
        return new TaskList(allTasks, this.filterUsed)
    }

    changeTask(changedTask: Task): TaskList {
        const allTasks = this.#all.map(task => {
            return task.id === changedTask.id ? changedTask : task
        })
        return new TaskList(allTasks, this.filterUsed);
    }

    excludeDones(): TaskList {
        const activeTasks = this.#all.filter(task => task.active);
        return new TaskList(activeTasks, FilterType.NONE);
    }

    filterActives(): TaskList {
        if(!this.showingOnlyActive()){
            return new TaskList(this.#all, FilterType.ATIVES);
        } else {
            return this;
        }
    }

    filterDones(): TaskList {
        if(!this.showingOnlyDone()){
            return new TaskList(this.#all, FilterType.DONE);
        } else {
            return this;
        }
    }

    removeFilter(): TaskList {
        if(!this.showingAll()){
            return new TaskList(this.#all, FilterType.NONE);
        }else{
            return this;
        }
    }

    showingAll(): boolean {
        return this.#filterType == FilterType.NONE
    }

    showingOnlyActive(): boolean {
        return this.#filterType == FilterType.ATIVES
    }

    showingOnlyDone(): boolean {
        return this.#filterType == FilterType.DONE
    }

    #applyFilterOn(tasks: Task[]): Task[] {
        if(this.showingOnlyActive()){
            return this.#applyFilterActives(tasks);
        }else if(this.showingOnlyDone()){
            return this.#applyFilterDones(tasks)
        }else {
            return [...tasks]
        }
    }

    #applyFilterActives(tasks: Task[]): Task[] {
        return tasks.filter(task => task.active)
    }

    #applyFilterDones(tasks: Task[]): Task[] {
        return tasks.filter(task => task.done)
    }

}