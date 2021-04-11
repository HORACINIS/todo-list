import React from 'react';

const DropdownMenu = ({ sortByNameTodoItems }) => {
  return (
    // <label>
    //   <input type='checkbox' name='sortByPriority' onChange={ (e) => console.log(e.target.checked) } />
    //   Sort by priority and name
    // </label>
    <button type='button' onClick={(e) => sortByNameTodoItems(e)}>Sort By Name</button>
  )
}

export default DropdownMenu;




// import React, { useState, useEffect } from 'react';

// const DropdownMenu = ({ sortByNameTodoItems }) => {

//   const [caca, setCaca] = useState(['biscocho', 'Caca', 'algodon']);

//   useEffect(() => {
//     console.log(caca)
//   }, [caca])

//   return (
//     // <label>
//     //   <input type='checkbox' name='sortByPriority' onChange={ (e) => console.log(e.target.checked) } />
//     //   Sort by priority and name
//     // </label>
//     <button type='button' onClick={() => {
//       const sortByname = caca.sort((a, b) => {
//         if (a.name < b.name) return -1;
//         if (a.name > b.name) return 1;
//         return 0;
//       })
//       // return sortByname
//       setCaca((prev) => [prev, sortByname])
//     }

//     }>Sort By Name</button>


//   )
// }

// export default DropdownMenu;
