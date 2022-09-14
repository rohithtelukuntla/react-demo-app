import { headers, URL} from "../Global"
let deleteUserById=(id)=>{
    //console.log(id)
    return fetch(URL+"/"+id,{
        method:"DELETE"
    }).catch(err=>console.log(err))
}
let fetchUsers=()=>{
    return fetch(URL)
}
let fetchUserById=(id)=>{
     return fetch(URL+"/"+id)
}
let updateUser=(data)=>{
    return fetch(URL+"/"+data.id,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:headers
    })
}
let addUser=(data)=>{
    return fetch(URL ,{
        method:"POST",
        body:JSON.stringify(data),
        headers: headers
    })
}
export{fetchUserById,fetchUsers,deleteUserById,addUser,updateUser}