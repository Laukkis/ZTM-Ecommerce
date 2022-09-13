import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home'
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/signin/signin'



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
