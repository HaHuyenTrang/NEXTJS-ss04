"use client"
import React from 'react'
interface Props {
  params: {
    idProductDetail: string
  }
}
export default function page({ params }: Props) {
  return (
    <div>page
      product id: {params.idProductDetail}
    </div>
  )
}
