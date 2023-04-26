import { observer } from 'mobx-react'
import { useToDoStore } from '../hooks/ToDoStoreContext'
export const ListMethods = observer(() => {
  const { clearToDoList, toActiveAll, completeAll, deleteAll } = useToDoStore()

  return (
    <div className="card col-4">
      <div className="card-header">List Methods</div>
      <div className="card-body">
        <button className="btn btn-danger mt-2 mx-2" onClick={clearToDoList}>
          Clear List
        </button>
        <button className="btn btn-primary mt-2 mx-2" onClick={toActiveAll}>
          To Active All
        </button>
        <button className="btn btn-success mt-2 mx-2" onClick={completeAll}>
          Complete All
        </button>
        <button className="btn btn-danger mt-2 mx-2" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  )
})
