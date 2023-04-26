import { v4 as uuidv4 } from 'uuid'

export interface IToDoStore {
  toDoList: IToDo[]
  toDo: IToDo[]
  toDoActive: IToDo[]
  toDoCompleted: IToDo[]
  toDoDeleted: IToDo[]
  addToDo(toDo: IToDo): void
  toActiveToDo(toDo: IToDo): void
  completeToDo(toDo: IToDo): void
  deleteToDo(toDo: IToDo): void
  clearToDoList(): void
  toActiveAll(): void
  completeAll(): void
  deleteAll(): void
  totalToDo: number
  totalToDoCompleted: number
  totalToDoActive: number
  totalToDoDeleted: number
}

export enum ToDoStatus {
  Completed = 'completed',
  Active = 'active',
  Deleted = 'deleted',
}

export interface IToDo {
  id: string
  name: string
  status: ToDoStatus | null
}

export const toDoStore = () => ({
  toDoList: [] as IToDo[],
  get toDo() {
    return this.toDoList
  },
  get toDoActive() {
    return this.toDoList.filter((x) => x.status === ToDoStatus.Active)
  },
  get toDoCompleted() {
    return this.toDoList.filter((x) => x.status === ToDoStatus.Completed)
  },
  get toDoDeleted() {
    return this.toDoList.filter((x) => x.status === ToDoStatus.Deleted)
  },
  get totalToDo() {
    return this.toDo.length
  },
  get totalToDoActive() {
    return this.toDoActive.length
  },
  get totalToDoCompleted() {
    return this.toDoCompleted.length
  },
  get totalToDoDeleted() {
    return this.toDoDeleted.length
  },
  addToDo(toDo: IToDo) {
    toDo.id = uuidv4()
    toDo.status = ToDoStatus.Active
    this.toDoList.push(toDo)
  },
  toActiveToDo(toDo: IToDo) {
    toDo.status = ToDoStatus.Active
  },
  completeToDo(toDo: IToDo) {
    toDo.status = ToDoStatus.Completed
  },
  deleteToDo(toDo: IToDo) {
    toDo.status = ToDoStatus.Deleted
  },
  clearToDoList() {
    this.toDoList = []
  },
  toActiveAll() {
    this.toDoList.forEach((x) => (x.status = ToDoStatus.Active))
  },
  completeAll() {
    this.toDoList.forEach((x) => (x.status = ToDoStatus.Completed))
  },
  deleteAll() {
    this.toDoList.forEach((x) => (x.status = ToDoStatus.Deleted))
  },
})
