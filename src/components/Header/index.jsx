import React from 'react'
import { CiSearch } from "react-icons/ci";

import classes from "./Header.module.scss";

const index = () => {
  return (
    <header>
      <a href="#!">Dashboard</a>
      <form>
        <CiSearch/>
        <input type="search" placeholder='Search here...' />
      </form>
    </header>
  )
}

export default index