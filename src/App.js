
import './App.css';
import AddForm from './component/AddForm';
import Header from './component/Header';
import Item from './component/Item';
function App() {
  return (
   <div className='App'>
    <Header/>
    <div className='container'>
    <AddForm/>
    <Item/>
    </div>
    

   </div>
  );
}

export default App;
