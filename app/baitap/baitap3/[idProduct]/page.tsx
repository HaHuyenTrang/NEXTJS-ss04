import React from 'react'
interface Props{

}
export default function page(props:any) {
    console.log("giá trị: ",props);
    const {params}= props
    
  return (
    <div>page
        product id = {params}
    </div>
  )
}
