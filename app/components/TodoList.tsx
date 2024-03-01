import { ITask } from '@/types/tasks'
import React from 'react'
interface  TodoListProps{
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
      <tr key={task.id}>
      <td >{task.text}</td>
      <td>Blue</td>
    </tr>
      ))}
      <tr>
        <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TodoList
