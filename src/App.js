// import {useEffect, useState } from 'react';
// import {getUsers} from './apiCall'
// function App()
// {
//   let[users,SetUsers] = useState([])

//   const fetchUsers = async()=>{
//     const result = await getUsers()
//     console.log(answer);
//     SetUsers(answer.results)
//   }

//   useEffect(()=>{
//     fetchUsers()
//   },[])
//   return<>
//   <h1>Users Data</h1>
//   <table className='table'>
//     <thead>
//       <tr>
//         <th>S.nO</th>
//         <th>name</th>
//         <th>Email</th>
//         <th>Mobile</th>
//       </tr>
//     </thead>
//     {/* <tbody>
//       {
//         users.map((usr,idx)=>{
//           return <tr>
//             <td>{idx+1}</td>
//             <td>{usr+name}</td>
//             <td>{usr+email}</td>
//             <td>{usr+mobile}</td>


//         })
//       }
//     </tbody> */}
//   </table>
//   </>
// }
