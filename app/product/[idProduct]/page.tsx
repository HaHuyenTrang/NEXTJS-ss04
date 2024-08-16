// import { log } from 'console'
"use client"
import React, { Component } from 'react'
interface Props{

}

            // components trong nextjs có 2 loại 
            // 1: client Component
            //     chạy được môi trường trình duyệt
            // 2: server Component
            //     chạy môi trường server
            //     mặc định là server component  

export default function page(props:any) {
    console.log("giá trị props", props);
    const {params}  = props
    
  return (
    <div>trang chi tiết sản phẩm
        id sản phẩm là: {params.idProduct}
    </div>
  )
}
