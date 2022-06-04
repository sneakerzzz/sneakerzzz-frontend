import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from './screens';
import { useCookie } from './hooks';
import './styles/style.scss'
import { Header } from './components/navigation';

function App() {

  const [user, userLoading] = useCookie()
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
