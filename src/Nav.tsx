// noinspection HtmlUnknownTarget
import React, { FC } from 'react'
import './Nav.css'

const Nav: FC = () => {
  return (
    <header className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/editor">Petri Editor</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </header>
  )
}

export default Nav
