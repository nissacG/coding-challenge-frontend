import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true
    }
    this.windowResize = this.windowResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResize)
  }

  // eslint-disable-next-line react/sort-comp
  windowResize() {
    const width = document.documentElement.clientWidth
    const links = document.querySelector('#navlinks')
    // eslint-disable-next-line no-unused-expressions
    if (width > 640) {
      links.style.display = 'flex'
      this.setState({ isMobile: false })
    } else {
      links.style.display = 'none'
      this.setState({ isMobile: true })
    }
  }

  render() {
    const { isMobile } = this.state
    return (
      <StyledApp>
        {/* Navbar */}
        <Navbar className='Navbar' isMobile={isMobile} />
        {/* Main Results */}
        <Body />
        {/* Search Bar/filtering */}
      </StyledApp>
    )
  }
}

const StyledApp = styled.div`
  display: flex;
  background-color: var(--bg-color);
  min-height: 100vh;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export default App
