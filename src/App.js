import Home from '../src/routes/home/home.component';
import Navagation from '../src/routes/navigaion/navigation.component';
import { Routes,Route} from 'react-router-dom';
import Signin from './routes/signin/sign-in-component';

const Shop = () => {
  return (
    <h1>Shoppnig page</h1>
  )
}

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Navagation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
