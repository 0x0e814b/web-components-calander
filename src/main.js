import './global/style.css';
import Calander from './components/calander';

document.querySelector('#app').innerHTML = `
  <main>
    <n-calander></n-calander>
    <taskList></taskList>
  </main>
`
