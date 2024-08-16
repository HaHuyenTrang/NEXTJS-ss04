import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>page
        <Link href={'/menu/about'}>About</Link>
        <br />
        <Link href={'/menu/contact'}>contact</Link>
        <br />
        <Link href={'/menu/home'}>home</Link>
        <br />
        <Link href={'/menu/login'}>login</Link>
    </div>
  )
}
