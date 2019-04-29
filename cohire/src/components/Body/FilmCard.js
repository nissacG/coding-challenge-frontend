import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FilmCard = ({ data, genres }) => (
  <StyledFilmCard>
    <div className='poster'>
      <img
        src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}
        alt={`Post for ${data.title}`}
      />
    </div>
    <div className='filmData'>
      <div className='titleScore'>
        <h2 className='title'>{data.title}</h2>
        <div className='vote'>{data.vote_average}</div>
      </div>
      <div className='genres'>
        {genres.length
          ? genres.map(genre => <span key={genre}>{genre}</span>)
          : ''
        }
      </div>
      <div className='overview'>{data.overview}</div>
      <div className='release'>{data.release_date}</div>
    </div>
  </StyledFilmCard>
)

const StyledFilmCard = styled.div`
  background-color: #fff;
  color: var(--blue-color);
  margin: 15px;
  padding: 15px;
  display: flex;
  height: 200px;

  & .poster img {
    height: 100%;
  }

  & .filmData {
    display: flex;
    flex-direction: column;
    width: 100%
    padding-left: 15px;
  }

  & .titleScore {
    display: flex;
    justify-content: space-between;
  }

  & .title {
    font-weight: 700;
  }

  & .vote {
    background-color: var(--yellow-color);
    color: var(--bg-color);
    border-radius: 5px;
    padding: 5px;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .genres {
    margin-bottom: 5px;
    color: var(--yellow-color);
  }

  & .genres * {
    font-size: 10px;
    font-weight: 700;
  }

  & .genres :not(:first-child) {
    padding: 5px 0 5px 5px;
  }

  & .genres :not(:first-child)::before {
    content: '|';
    padding-right: 5px;
    // border-left: 2px solid var(--yellow-color)
  }

  & .overview {
    text-overflow: ellipsis;
    height: 68%;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    margin-bottom: 5px;
  }
  & .overview:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(transparent 60%, white);
  }

  & .release {
    font-size: 10px;
    font-weight: 700;
    color: var(--yellow-color);
  }
`

FilmCard.propTypes = {
  data: PropTypes.object
}

export default FilmCard
