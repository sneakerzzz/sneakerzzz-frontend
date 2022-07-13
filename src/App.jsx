import { Route, Routes } from 'react-router-dom'
import { Login, Register, Account, Home, Catalog, Favourites, Cart, Product } from './screens';
import { Header } from './components/navigation';
import './styles/style.scss'
import './styles/adaptive.scss'
import { useCookie } from './hooks';

function App() {

  const { user, cookie, setTrigger, userLoading } = useCookie()

  return (
    <>
      <Header user={user} userLoading={userLoading} />
      <main>
        <Routes>
          <Route index element={<Home user={user} userLoading={userLoading} />} />
          <Route path='/catalog' element={<Catalog user={user} userLoading={userLoading} />} />
          <Route path="/login" element={<Login user={user} userLoading={userLoading} />} />
          <Route path='/register' element={<Register user={user} userLoading={userLoading} />} />
          <Route path='/account/*' element={<Account user={user} userLoading={userLoading} cookie={cookie} setTrigger={setTrigger} />} />
          <Route path='/favourites' element={<Favourites user={user} userLoading={userLoading} />} />  
          <Route path='/cart' element={<Cart user={user} userLoading={userLoading} />} />  
          <Route path='/product/:id' element={<Product />} />
          <Route path="*" />
        </Routes>
      </main>
    </>
  );
}

export default App;