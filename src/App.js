import Card from './Components/Card';
import './Estilos/style.css';
import Encabezado from './Components/Encabezado';

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <div>
      <Card title='Supervisor' text='Ventors activity to identify project roadblocks'/>
      <Card title='Team Builder' text='Scans our talent network to create the optimal team for your project'/>
      <Card title='Karma' text='Regularly evaluetes our talent to ensure quality'/>
      <Card title='Calculator' text='Uses data from past projects to provide better delivery estimates'/>
      </div>
    </div>
  );
}

export default App;
