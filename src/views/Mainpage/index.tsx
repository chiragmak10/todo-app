import { FC, ReactElement } from 'react'
import { InputForm } from './TodoList/TodoForm'
import { TodoList } from './TodoList'

export const DisplaySection: FC = (): ReactElement => {
  return (
    <div
      css={{
        display: 'grid',
        alignContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      <TodoList />
      <InputForm />
    </div>
  )
}
