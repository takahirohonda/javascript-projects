import { useGetToDoList } from './useGetToDoList'
export const ToDoList = () => {
  const { loading, error, data } = useGetToDoList()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error occurred...</p>

  return (
    <>
      <h1>Testing GraphQL</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}
