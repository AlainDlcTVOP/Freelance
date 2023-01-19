import Home from '../src/routes/home/home.component';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes >
      <Route exact path='/' element={<Home />} />
    </Routes>
)

};

export default App;
