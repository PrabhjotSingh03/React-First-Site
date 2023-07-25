import './App.css';
import Header from "./components/Header.jsx";
import Question from './components/Question.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <div id="content">
        <h1 className='title'>Welcome to Trivia</h1>
        <p>Here's your random question.</p>
        <h2>True or False:</h2>
      </div>
      <Question />
      <footer>&copy; N01517224, 2023</footer>
    </div>
  )
}

export default App