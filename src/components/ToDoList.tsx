import { observer } from 'mobx-react'
import { useToDoStore } from '../hooks/ToDoStoreContext'

export const ToDoList = observer(() => {
  const store = useToDoStore()

  return (
    <div className="d-flex gap-4 mt-4">
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Active</h3>
        {store.toDoActiveList.map((toDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-success"
                  onClick={() => store.completeToDo(toDo)}
                >
                  Completed
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => store.deleteToDo(toDo)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Completed</h3>
        {store.toDoCompletedList.map((toDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-primary"
                  onClick={() => store.toActiveToDo(toDo)}
                >
                  To Active
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => store.deleteToDo(toDo)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Deleted</h3>
        {store.toDoDeletedList.map((toDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-primary"
                  onClick={() => store.toActiveToDo(toDo)}
                >
                  To Active
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => store.completeToDo(toDo)}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
