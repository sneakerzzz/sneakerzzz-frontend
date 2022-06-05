import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register, Account } from './screens';
import { useCookie } from './hooks';
import './styles/style.scss'
import { Header } from './components/navigation';

function App() {

  const [user, userLoading, cookie] = useCookie()
  console.log(user);

  return (
    <>
      <BrowserRouter>
        {
          userLoading ?
            (
              <>
                <Header user={user} />
                <main>
                  <Routes>
                    <Route path="/" />
                    <Route path='/catalog' />
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    {
                      user ? 
                      (
                        <Route path='/account' element={<Account user={user} cookie={cookie} />} />
                      )
                      :
                      null
                    }
                    <Route path="*" />
                  </Routes>
                </main>
              </>
            )
            :
            (
              <div className="loading"></div>
            )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
