// import { log } from 'console'
"use client"
import React from 'react'
interface Product{
    idUser:string
}
interface Props{
 params:Product
}
export default function page(props:Props) {
    console.log("id",props);
    const {params}=props
    
  return (
    <div>page
        id của user là: {params.idUser}
    </div>
  )
}
