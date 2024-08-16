"use client"
import React from 'react'
interface Props {
    params: {
        idUsers: string;
    }
}
export default function page({ params }: Props) {
    console.log("111111", params)

    return (
        <div>User id: {params.idUsers}</div>
    )
}
