import { Routes, Route, Link } from 'react-router-dom'
import { Flex } from '@aws-amplify/ui-react'

import { ApolloWrapper } from './ApolloWrapper'
import { DemoPage } from 'pages/DemoPage/DemoPage'
import { LandingPage } from 'pages/LandingPage/LandingPage'
import { AdminPage } from 'pages/AdminPage/AdminPage'
import { ToDoList } from 'pages/DemoPage//ToDoList/ToDoList'
import ToDoWithAuth from 'pages/DemoPage//ToDoWithAuth/ToDoWithAuth'
const App = () => (
  <>
    <Flex>
      <Link to="/">Home</Link>
      <Link to="admin">Admin</Link>
      <Link to="demo">Demo</Link>
    </Flex>
    <ApolloWrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="demo/todowithauth" element={<ToDoWithAuth />} />
        <Route path="demo/todolist" element={<ToDoList />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </ApolloWrapper>
  </>
)

export default App
