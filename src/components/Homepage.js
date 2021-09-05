import Column from "./Column"
import columns from '../columns.json';
import Board from "./Board";

// TODO - 'add new column' button


const Homepage = () => {
  return (
    <Board/>
  )
}

export default Homepage;

/* <div className='d-flex flex-row p-2'>
{columns.map((data) => (
  <Column name={data.name} key={data.index} items={data.items}/>
))}
</div> */