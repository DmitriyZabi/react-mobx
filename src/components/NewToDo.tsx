import { useToDoStore } from '../hooks/ToDoStoreContext'
import { useState } from 'react'
export function NewToDo() {
  const { addToDo } = useToDoStore()
  const [value, setValue] = useState('')
  const changeHandler = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <div className="card col-4">
      <div className="card-header">New To Do</div>
      <div className="card-body d-flex flex-column gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={value}
          onChange={changeHandler}
        />
        <button
          type="button"
          className="btn btn-primary col-4"
          onClick={() =>
            addToDo({
              id: '',
              name: value ? value : 'NewToDo',
              status: null,
            })
          }
        >
          Add To Do
        </button>
      </div>
    </div>
  )
}
