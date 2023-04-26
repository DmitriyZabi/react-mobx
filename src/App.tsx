import { ToDoList } from './components/ToDoList'
import { NewToDo } from './components/NewToDo'
import { configure } from 'mobx'
import { Total } from './components/Total'
import { ListMethods } from './components/ListMethods'

configure({ enforceActions: 'always' })

function App() {
  return (
    <div className="container mt-3">
      <div className="d-flex gap-3">
        <NewToDo />
        <Total />
        <ListMethods />
      </div>
      <ToDoList />
    </div>
  )
}

export default App
