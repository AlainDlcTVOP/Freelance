import Home from '../src/routes/home/home.component';
import Navagation from '../src/routes/navigaion/navigation.component';
import { Routes,Route} from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';



const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Navagation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
