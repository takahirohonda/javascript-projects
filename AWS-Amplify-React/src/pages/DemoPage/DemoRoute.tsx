import { Route } from 'react-router-dom'
import { ToDoList } from './ToDoList/ToDoList'
import ToDoWithAuth from './ToDoWithAuth/ToDoWithAuth'

export const DemoRoute = () => (
  <>
    <Route path="todowithauth" element={<ToDoWithAuth />} />
    <Route path="todolist" element={<ToDoList />} />
  </>
)
