// noinspection HtmlUnknownTarget

import React, { FC } from 'react'

const Nav: FC = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex' }}>
      <li><a href="/">Home</a></li>&nbsp;&nbsp;
      <li><a href="/login">Login</a></li>
    </ul>
  )
}

export default Nav
