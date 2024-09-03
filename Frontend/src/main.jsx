
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './Context/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <Authprovider>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </Authprovider>
  
)
