import Header from './Header'
import Main from './Main'
import Login from './Login'
import Homepage from './Homepage'
import Signup from './Signup';
// COMMANDS THAT WE NEED TO RUN
//npm install --prefix client 
//npm install semantic-ui-react semantic-ui-css
//npm start --prefix client



function App() {
  return (
    <>
      <Header/>
      <Login/>
      <Homepage/>
      <Signup/>
      <Main/>
    </>
  );
}

export default App;
