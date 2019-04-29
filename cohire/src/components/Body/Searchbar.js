/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import searchIconYellow from '../../assets/search-icon-yellow.png'
import yearIcon from '../../assets/year-icon.png'

class Searchbar extends Component {
  render() {
    const { search } = this.props
    return (
      <StyledSearchBar>
        <div className='titleSearch'>
          <StyledSearch>
            <img
              src={searchIconYellow}
              alt='yellow search icon'
              className='mobileImg'
            />
            <StyledInput
              type='text'
              placeholder='Search for movies'
              onChange={e => search(e.target.value)}
            />
          </StyledSearch>
          <StyledMobileFilter>
            <a href='#'>
              <FontAwesomeIcon icon={faFilter} />
            </a>
          </StyledMobileFilter>
        </div>
        <div className='yearFilter'>
        <StyledSearch>
            <img
              src={yearIcon}
              alt='year icon'
              className='mobileImg'
            />
            <StyledInput
              type='text'
              placeholder='Year of release'
            />
          </StyledSearch>
        </div>
      </StyledSearchBar>
    )
  }
}

const StyledSearchBar = styled.div`
  // Mobile
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;

  & .titleSearch {
    display: flex;
  }

  & .yearFilter {
    display: none;
  }

  // Desktop
  @media (min-width: 640px) {
    background-color: #fff;
    padding: 15px;
    
    & .yearFilter {
      display: flex;
    }
  }
`

const StyledSearch = styled.div`
  // Mobile
  display: flex;
  background-color: var(--bg-color);
  border-bottom: 2px solid var(--yellow-color);
  width: 90%;
  & img {
    height: 20px;
    align-self: center;
    padding: 5px;
  }

  // Desktop
  @media (min-width: 640px) {
    background-color: #fff;
    width: 100%;
  }
`

const StyledInput = styled.input`
  // Mobile
  color: var(--yellow-color);
  background-color: var(--bg-color);
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 1.2rem;
  &::placeholder {
    color: var(--yellow-color);
    font-weight: 300;
  }
  &:focus {
    outline: none;
  }
  // Desktop
  @media (min-width: 640px) {
    background-color: #fff;
    margin: 0 15px;
  }
`

const StyledMobileFilter = styled.div`
  // Mobile 
  display: flex;
  align-items: center
  justify-content: center;
  color: var(--yellow-color);
  border-bottom: 2px solid var(--yellow-color);
  padding: 5px;
  width: 10%;
  margin-left: 15px;
  &:hover {
    border-bottom: 2px solid var(--blue-color);
  }
  & a {
    color: var(--yellow-color);
  }
  & a:hover {
    color: var(--blue-color);
  }

  @media (min-width: 640px) {
    display: none;
  }
`

Searchbar.propTypes = {
  search: PropTypes.func
}

export default Searchbar
