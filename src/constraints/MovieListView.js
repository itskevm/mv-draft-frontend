import React from 'react'
import Movies from './../comps/Movie'
import axios from 'axios'

// Acts as an env variable to retrieve data from local django server
const axiosURL = 'http://127.0.0.1:8000'

const mockData = [
  {
    title: 'title 1',
    author: 'kevm',
    content: 'something simple one',
    created_on: '01-01-2021',
  },
  {
    title: 'title 2',
    author: 'karlay',
    content: 'something simple two',
    created_on: '01-01-2021',
  },
]

class MovieList extends React.Component {
  
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`${axiosURL}/api/`)
    .then(res => {
      this.setState({
        movies: res.data
      })
      console.log(res.data)
    })
  }
  
  render() {
    return (
      <Movies data={this.state.movies} />
    )
  }
}

export default MovieList