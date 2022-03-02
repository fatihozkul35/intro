import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
function App() {
  return (
    <div className="App">
      <h2>Hello from react!!!</h2>
      <h3>That is my first react project</h3>
      <h4>I'm very excited what waits me</h4>
      <Navi></Navi>
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
