import React from 'react'
import { Button } from 'antd'
import './App.css'
import { css } from '@emotion/react'
import CustomLayout from './constraints/Layout'
import MovieList from './constraints/MovieListView'

const great = css`
  color: red !important;
`

const App = () => {
  return (
  <div className="App">
    <Button type="primary">Button</Button>
    <CustomLayout>
      <MovieList />
    </CustomLayout>
  </div>
  )
}

export default App;
