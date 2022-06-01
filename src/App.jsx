import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from './screens';
import './styles/style.scss'

function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <main>
        <Routes>
          <Route path="/" />
          <Route path='/catalog' />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path="*" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
