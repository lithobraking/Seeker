import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './custom.scss'
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div className='vh-100 vw-100'>
      <Homepage />
    </div>
  );
}

export default App;
