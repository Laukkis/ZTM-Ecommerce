
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import { setFavorites } from "./store/favorites/favorites.action";
import { checkUserSession } from "./store/user/user.action";


import { getFavoritesAndDocuments } from "./utils/firebase/firebase.utils";

import Home from './routes/home/home'
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication'
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import Profile from "./routes/profile/profile";
import Favorites from "./routes/favorites/favorites";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  },)

  useEffect(() => {
    const getFavoritesMap = async () => {
      if (checkUserSession === true) {
        const favoritesArray = await getFavoritesAndDocuments('favorites');
        dispatch(setFavorites(favoritesArray));
      }
    }
    getFavoritesMap();
  }, [dispatch])


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='profile' element={<Profile />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App;
