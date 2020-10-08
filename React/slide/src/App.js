import React, {Component} from 'react';
import Slide from './components/slideShow/slide.js';
import Menu from './components/slideShow/menu.js';
import './components/slideShow/slide.css';
import Anh1 from './components/image/Anh1.png';
import Anh2 from './components/image/Anh2.jpg';
import Anh3 from './components/image/Anh3.jpg'

class App extends Component{
  render(){

    
      //const eleSlide = items.map((item,index) =>
    //<Slide key={index} src={item.src} ></Slide>
    //);

  return (
    <div id="App">
        <div id="menu">       
            <Menu/>
        </div>
        <Slide src={Anh1} srcc={Anh2} srccc={Anh3}/>
    </div>
  );
}
}

export default App;
