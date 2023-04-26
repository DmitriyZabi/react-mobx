import React, { FC, createContext, useContext, useState } from 'react'
import { useLocalObservable } from 'mobx-react'
import { IToDoStore, toDoStore } from '../store/toDoStore'

const ToDoStoreContext = createContext<IToDoStore>({} as IToDoStore)

type ToDoStoreComponent = FC<{
  children: React.ReactNode
}>

export const ToDoStoreProvider: ToDoStoreComponent = ({
  children,
}): React.ReactElement => {
  const store = useLocalObservable(toDoStore)
  return (
    <ToDoStoreContext.Provider value={store}>
      {children}
    </ToDoStoreContext.Provider>
  )
}

export const useToDoStore = () => useContext(ToDoStoreContext)
