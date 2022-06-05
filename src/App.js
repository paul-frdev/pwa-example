import './App.css';
import { LoadPosts } from './loadPosts';
import { Header } from './Header';

function App() {
  return (
    <div style={{width: '100%', maxWidth: '1200px', padding: '0 15px', margin: '0 auto'}}>
      <Header/>
     <LoadPosts/>
    </div>
  );
}

export default App;
