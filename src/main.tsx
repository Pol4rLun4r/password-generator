import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// context
import { DataProvider } from './context/data.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
