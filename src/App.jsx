import { Album } from './components/Album';
import { AlbumProvider } from './context/AlbumContext';
//import Hello from './components/Hello';
//import { HelloFunc } from './components/HelloFunc';

export function App() {

  return (
    <AlbumProvider>
      <div id='app'>
        <h1> Мојата React вежба со Album Contex</h1>
        <Album />
      </div>
    </AlbumProvider>
  );
}