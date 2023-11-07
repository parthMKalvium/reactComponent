import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';

function App(props) {
  return (
    <div>
      <GalleryHeader/>
      <GalleryBody data = {props.data}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
