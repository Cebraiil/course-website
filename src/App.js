import AppBar from './Components/AppBar';
import './Styles/App.css';
import image from './Styles/images/header.svg'

function App() {
  return (
    <div className="App">
      <AppBar />
      <div className='header'>
        <div className='header-text'>
          <h2>Join & Learn anytime anywhere</h2>
          <p>Online learning is education that takes place over
              the Internet. It is often referred to as e-learning.</p>
         <div className='header-btn'>
            <button className="header-btn-app">Launch App</button>
            <button className='header-btn-learn'>Learn more</button>
         </div>
        </div> 
        <div className='header-image'>
          <img src={image} alt="header-image" />
        </div>
      </div> 
    </div>
  );
}

export default App;
