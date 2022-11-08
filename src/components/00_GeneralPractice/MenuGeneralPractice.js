import { Unstable_Grid2 } from '@mui/material'
import React from 'react'
import HeaderSection from '../shared/HeaderSection'


// variables
// var, let, const 
// var = se declara a nivel General, aun cuando este dentr de un for
// let, solo queda declarada en el scope que se dise'o
// const son variables que no se modifican


// array
// nueva forma de trabajar con map
// const books = ["AA","BB"]
// books.map( book=> <li> {book} </li> )
// book.sort((a,b) => a.name - b.name)
// books.some (book => book/isActive)
// const xx = books.filet (book => book.isActive).lenght >=1


// functions
// functions get (args {
// 
// })

// const get = (args) =>{
//  
//}

// const get => args => ({...args, isActive:true})

// entre function y const la diferencia es el scope
// las arrow function no manejan el scope

// operators
// ? shaning operator
// console.log(user?.username)  valida si user tiene algo

// {user.lastname ?? user.username}  // evalua si lastname tien algo si es asi 
// lo ejecuta si no el de user name

// {user.lastname && user.username}  // evalua si lastname tien algo 
// renderiza user.name

// {user.lastname ││ user.username}  // ejecuta el que es verdadero 

// {user.isActive ? "is Active" : " is not Active" }  // 

// spread Operator
// led user2 = user;
// user2.username = "rafael";  // en este caso cambia ambos objetos
// opcion
// const user2 = { ... user }
// user2.name = "rafael"
// opciones adicionales const user2 = { ... user, username: "Rafael" }

// destructuring
// const {getUserName} = user2; solo se queda con la propiedad 
// getUserName de user2
// const {getUserName, lastName} = user2; solo se queda con la propiedad 
// getUserName y lastName de user2
// const {getUserName:us} = user2; solo se queda con la propiedad 
// getUserName de user2 pero le cambia el nombre a us

// string templete literals
// const fullName = user.name + " " + user.lastName
// const fullname = `${user.name} ${user.lastname}`
// podemos destructurar un objeto y usarlo igual
// const {name, lastname, age} = user;
// const full = `${name} ${lastname} ${age}`







function MenuGeneralPractice() {
  
  
  return (
    <h1> 
      <HeaderSection 
        name = 'React Testing Library'
        smallDescription= 'React Testing Library'
      />
    </h1>
  )
}

export default MenuGeneralPractice