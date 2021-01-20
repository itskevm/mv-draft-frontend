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
    <p css={great}>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <Button type="primary">Button</Button>
    <CustomLayout>
      <MovieList />
    </CustomLayout>
  </div>
  )
}

export default App;
