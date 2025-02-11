import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Styles from './app.module.scss'
const App = () => {
  return (
    <div className={Styles.app}>
      <MainRoutes/>
    </div>
  )
}

export default App