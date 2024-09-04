import React from 'react'

export default function page(props:any) {
    const {params}=props
    const posts=[
        {
            content:"nhà bà nữ",
            idPost:11,
            idUser:1,
        }
    ]
    let postFilter= posts.filter((item)=>{
        return item.idUser=params.idUser
    })
  return (

    <div>Danh dách bài viết của user id: {params.idUser}
    {postFilter.map((item,index)=>{
        return <li key={item.idPost}>{item.content}</li>
    })}
    </div>
  )
}
