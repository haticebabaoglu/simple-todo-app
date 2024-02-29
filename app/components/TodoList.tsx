import React from 'react'

const TodoList = () => {
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
      {/* row 1 */}
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
