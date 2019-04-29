/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class NavbarSection extends Component {
  render() {
    const { title, menuOpen, className } = this.props
    return (
      <StyledNavbarSection menuOpen={menuOpen} className={className}>
        <h3>{title}</h3>
        <ul>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>TV Shows</a>
          </li>
        </ul>
      </StyledNavbarSection>
    )
  }
}

const StyledNavbarSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-color);
  color: #fff;

  h3 {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--bg-color);
    line-height: ${props => (props.menuOpen ? '2rem' : '4rem')};
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2rem;
    display: flex;
  }

  & li {
    font-weight: 300;
    padding: 5px;
  }

  & li:hover {
    background-color: var(--yellow-color);
    a {
      color: var(--blue-color);
    }
  }

  @media (min-width: 640px) {
    & ul {
      flex-direction: column;
    }
  }
`

NavbarSection.propTypes = {
  title: PropTypes.string,
  menuOpen: PropTypes.bool,
  className: PropTypes.string
}

export default NavbarSection
