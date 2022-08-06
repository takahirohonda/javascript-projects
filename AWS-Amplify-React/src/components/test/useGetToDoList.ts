import { useQuery } from '@apollo/client'
import { GET_TODO_LIST } from './queries'

export const useGetToDoList = () => {

  const { loading, error, data } = useQuery(GET_TODO_LIST)

  return {
    loading,
    error,
    data
  }
}
