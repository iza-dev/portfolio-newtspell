import Burger from './burger/Burger'
import MenuToggled from './menuToggled/MenuToggled'
import style from './Menu.module.css'
import React, { useState } from 'react'

export default function  Menu () {
  const [open, setOpen] = useState(false)
  return (
    <div >
      <MenuToggled open={open} setOpen={setOpen}/>

      <Burger open={open} setOpen={setOpen}/>

    </div>
  )
}