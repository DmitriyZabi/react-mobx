import { observer } from 'mobx-react'
import { useToDoStore } from '../hooks/ToDoStoreContext'
export const Total = observer(() => {
  const { totalToDo, totalToDoActive, totalToDoCompleted, totalToDoDeleted } =
    useToDoStore()

  return (
    <div className="card col-4">
      <div className="card-header">Total</div>
      <div className="card-body d-flex flex-column">
        <p className="m-0">Total to do: {totalToDo}</p>
        <p className="m-0">Total active to do: {totalToDoActive}</p>
        <p className="m-0">Total completed to do: {totalToDoCompleted}</p>
        <p className="m-0">Total deleted to do: {totalToDoDeleted}</p>
      </div>
    </div>
  )
})
