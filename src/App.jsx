import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from './screens';
import { useCookie } from './hooks';
import './styles/style.scss'
import { Header } from './components/navigation';

function App() {

  const user = useCookie()
  console.log(user);

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
