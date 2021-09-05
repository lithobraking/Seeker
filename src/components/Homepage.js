import { Container } from "react-bootstrap"
import columns from '../columns.json';

// TODO - column needs to be dynamically rendered component
// TODO - 'add new item' button
// TODO - 'add new column' button

import Column from "./Column"

const Homepage = () => {
  return (
    <div className='d-flex flex-row'>
      {columns.map((data) => (
        <Column name={data.name} key={data.index}/>
      ))}
      </div>
  )
}

export default Homepage