/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import NavbarSection from './NavbarSection'
import searchIconWhite from '../../assets/search-icon-white.png'
import arrowIcon from '../../assets/arrow-icon.png'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Wesley',
      menuOpen: false
    }
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    const { menuOpen } = this.state
    const nav = document.querySelector('#nav')
    const bars = document.querySelector('.bars')
    const links = document.querySelector('#navlinks')
    if (!menuOpen) {
      nav.classList.add('expanded')
      bars.classList.add('expanded')
      links.style.display = 'flex'
      this.setState({ menuOpen: true })
    } else {
      nav.classList.remove('expanded')
      bars.classList.remove('expanded')
      links.style.display = 'none'
      this.setState({ menuOpen: false })
    }
  }

  render() {
    const { user, menuOpen } = this.state
    const { isMobile } = this.props
    return (
      <StyledNavbar id='nav' isMobile={isMobile}>
        <a href='#' onClick={this.openMenu} className='bars'>
          <FontAwesomeIcon icon={!menuOpen ? faBars : faTimes} />
        </a>
        <div className='links'>
          <div>
            <div className='user mobileHide'>
              <h2>{user}</h2>
              <img
                src={arrowIcon}
                alt='white arrow icon'
                className='mobileImg'
              />
            </div>
            <div className='discover'>
              <h2>Discover</h2>
              <img
                src={searchIconWhite}
                alt='white search icon'
                className='mobileImg'
              />
            </div>
          </div>
          <div>
            <div id='navlinks'>
              <NavbarSection
                title='Watched'
                isMobile={isMobile}
                menuOpen={menuOpen}
              />
              <StyledNavbarSection
                title='Saved'
                isMobile={isMobile}
                menuOpen={menuOpen}
              />
            </div>
          </div>
        </div>
      </StyledNavbar>
    )
  }
}

const StyledNavbar = styled.div`
  // Mobile first css
  display: flex;
  background-color: var(--bg-color);
  color: var(--blue-color);
  width: 100%;
  padding: 15px;

  & .links {
    display: flex;
    flex-direction: column;
  }

  & .discover {
    padding: 0 10px;
  }

  & .links .discover {
    order: -1;
  }

  & .mobileImg,
  .mobileHide {
    display: none;
  }

  & .bars {
    color: var(--blue-color);
    display: ${props => !props.isMobile && 'none'};
    font-size: 1.5rem;
  }

  & #navlinks {
    display: none;
    padding: 10px 0 0 10px;
  }

  &.expanded {
    background-color: var(--blue-color);
    color: var(--bg-color);
    a {
      color: var(--bg-color);
    }
    h4 {
    }
  }

  // Desktop css below
  @media (min-width: 640px) {
    &.bars {
      display: none;
    }
    flex-direction: column;
    width: 250px;
    background-color: var(--blue-color);
    color: var(--bg-color);
    padding: 0;

    & .user,
    & .discover {
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;

      & img {
        display: block;
        max-height: 25%;
        align-self: center;
      }
    }
    & .discover {
      background-color: var(--yellow-color);

      img {
        max-height: 40%;
      }
    }
    & #navlinks {
      display: flex;
      flex-direction: column;
      padding-left: 1.5rem;
    }
  }
`

const StyledNavbarSection = styled(NavbarSection)`
  @media (max-width: 640px) {
    padding-left: 10px;
  }
`

Navbar.propTypes = {
  isMobile: PropTypes.bool
}

export default Navbar
