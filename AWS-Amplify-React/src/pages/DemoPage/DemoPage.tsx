import { Link } from 'react-router-dom'
import { Flex } from '@aws-amplify/ui-react'

export const DemoPage = () => (
  <>
    <Flex>
      <Link to="/demo/todowithauth">ToDoWithAuth</Link>
      <Link to="/demo/todolist">ToDoList</Link>
    </Flex>
  </>
)
