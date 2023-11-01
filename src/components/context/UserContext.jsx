import React,{useState} from 'react'
export const UserDataContext = React.createContext(null)

function UserContext({children}) {

    let [data,setData] = useState([
        {
          title:'Feedback',
          comment:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'
        },
        {
          title:'Weekly Task',
           comment:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'
        }
       
      ])


  return <UserDataContext.Provider value={{data,setData}}>
   {children}
  </UserDataContext.Provider>
}

export default UserContext

