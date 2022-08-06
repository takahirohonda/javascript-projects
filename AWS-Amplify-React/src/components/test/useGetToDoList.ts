import { useQuery } from '@apollo/client'
import { GetToDoListQuery } from 'API'
import { GET_TODO_LIST } from './queries'


export const useGetToDoList = () => {

  const { loading, error, data } = useQuery<GetToDoListQuery>(GET_TODO_LIST)

  return {
    loading,
    error,
    data
  }
}
