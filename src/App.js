import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './custom.scss'
import Homepage from './components/Homepage';
import BrandBar from './components/BrandBar';

const App = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <div className='ps-4 d-flex justify-content-center shadow-sm'>
        <BrandBar />
      </div>
      <div className='w-100 flex-grow-1'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
