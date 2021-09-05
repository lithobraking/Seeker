import { Container } from "react-bootstrap"
import Column from "./Column"
import columns from '../columns.json';

// TODO - 'add new item' button
// TODO - 'add new column' button


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