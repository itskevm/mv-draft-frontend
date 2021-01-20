import React from 'react'
import Movies from './../comps/Movie'
import axios from 'axios'

// Acts as an env variable to retrieve data from local django server
const axiosURL = 'https://127.0.0.1:8000'

const data = [
  {
    title: 'Ant Design Title 1',
    author: 'kevin',
    content: 'something simple one',
  },
  {
    title: 'Ant Design Title 2',
    author: 'karla',
    content: 'something simple two',
  },
  {
    title: 'Ant Design Title 3',
    author: 'kevm',
    content: 'something simple three',
  },
  {
    title: 'Ant Design Title 4',
    author: 'karlay',
    content: 'something simple four',
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
    })
  }
  
  render() {
    return (
      <Movies data={this.state.Movies} />
    )
  }
}

export default MovieList