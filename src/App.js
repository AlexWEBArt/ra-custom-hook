import DataInspector from './components/DataInspectorFunc';
import LoadingInspector from './components/LoadingInspectorFunc';
import ErrorInspector from './components/ErrorInspectorFunc';
import './css/main.css';

function App() {
  const data = 'https://ra-custom-hook-backend.onrender.com/data';
  const error = 'https://ra-custom-hook-backend.onrender.com/error';
  const loading = 'https://ra-custom-hook-backend.onrender.com/loading';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return (
    <div className="main-content">
      {<DataInspector url={data} options={options}/>}
      {<LoadingInspector url={loading} options={options}/>}
      {<ErrorInspector url={error} options={options}/>}
    </div>
  );
}

export default App;
