import React from 'react'
import { Button } from 'antd'
import './App.css'
import CustomLayout from './constraints/Layout'
import MovieList from './constraints/MovieListView'

const App = () => {
  return (
  <div className="App">
    <CustomLayout>
      <MovieList />
    </CustomLayout>
  </div>
  )
}

export default App;
