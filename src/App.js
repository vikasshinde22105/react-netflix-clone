import logo from './logo.svg';
import jumboData from './fixtures/jumbo.json';
import Jumbotron from "./component/jumbotron";
function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item)=>(
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.title}</p>
          <p>{item.image}</p>
<p></p>
        </Jumbotron>
      ))}
      </Jumbotron.Container>
  );
}

export default App;
