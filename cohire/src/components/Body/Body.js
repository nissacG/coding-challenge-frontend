/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import styled from 'styled-components'

import Searchbar from './Searchbar'
import Filterbar from './Filterbar'
import FilmCard from './FilmCard'

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      searchword: '',
      totalResults: 0,
      filmData: []
    }
    this.onSearch = this.onSearch.bind(this)
    this.getAllGenres = this.getAllGenres.bind(this)
    this.getGenres = this.getGenres.bind(this)
  }

  componentDidMount() {
    this.getAllGenres()
  }

  getAllGenres() {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=94f97520083ecf6140e121082bf27d7e'
    )
      .then(result => result.json())
      .then(result => this.setState({ genres: result.genres }))
      .catch(err => console.log(err))
  }

  onSearch(term) {
    if (term === '') {
      this.setState({
        searchword: '',
        totalResults: 1,
        filmData: []
      })
    } else {
      // would keep API keys and anything else confidential in a seperate config file for production
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=94f97520083ecf6140e121082bf27d7e&query=${term}`
      )
        .then(result => result.json())
        .then(result =>
          this.setState({
            searchword: term,
            totalResults: result.total_results,
            filmData: result.results
          })
        )
        .catch(err => console.log(err))
    }
  }

  getGenres(genreIds) {
    const { genres } = this.state
    const genreNames = []
    genreIds.forEach(genreId => {
      genres.forEach(genre => {
        if (genre.id === genreId) {
          genreNames.push(genre.name)
        }
      })
    })
    return genreNames
  }

  render() {
    const { searchword, filmData, totalResults } = this.state
    return (
      <StyledBody>
        <div className='search'>
          {/* search/filter */}
          <Searchbar test={searchword} search={this.onSearch} />
          <Filterbar />
        </div>
        <div className='films'>
          {
            searchword !== ''
              ? <div className='totalResults'>{totalResults} movies</div>
              : ''
          }
          {totalResults > 0
            ? filmData.map(film => (
                <FilmCard
                  key={film.id}
                  data={film}
                  genres={this.getGenres(film.genre_ids)}
                />
              ))
            : null}
          {/* total film count */}
          {/* all film cards */}
        </div>
      </StyledBody>
    )
  }
}

const StyledBody = styled.div`
  // Mobile first css
  display: flex;
  flex-direction: column;
  width: 100%;

  & .totalResults {
    color: var(--blue-color);
    font-size: 12px;
    margin: 15px;
  }

  @media (min-width: 640px) {
    flex-direction: row;

    & .films {
      order: -1;
      width: 80%;
      padding-top: calc(50px - 2rem);
    }

    & .search {
      padding-top: 3rem;
    }
  }
`

export default Body
