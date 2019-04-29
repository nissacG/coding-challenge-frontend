/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import styled from 'styled-components'

import FilterSection from './FilterSection'

class Filterbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime Film',
        'Documentary',
        'Drama',
        'Erotic',
        'Family',
        'Fantasy',
        'History',
        'Horror'
      ],
      minVote: [1, 2, 3, 4, 5],
      lang: ['English', 'French', 'Spanish', 'German']
    }
  }

  render() {
    const { genres, minVote, lang } = this.state
    return (
      <StyledFilterbar>
        <h4>Movie</h4>
        <FilterSection title='Select Genre(s)' data={genres} />
        <FilterSection title='Select min. vote' data={minVote} />
        <FilterSection title='Select language' data={lang} />
      </StyledFilterbar>
    )
  }
}

const StyledFilterbar = styled.div`
  // Mobile
  display: none;

  // Desktop
  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 15px;
    margin: 15px;
    
    & > h4 {
      font-weight: 700;
    }
  }
`

Filterbar.propTypes = {
}

export default Filterbar
