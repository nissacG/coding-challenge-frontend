/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class FilterSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse() {
    const { open } = this.state
    this.setState({ open: !open}, () => console.log(open))
  }

  render() {
    const { title, data } = this.props
    const { open } = this.state

    return (
      <StyledFilterSection>
        <div className='filterHeader'>
          <FontAwesomeIcon icon={open ? faMinus : faPlus}/>
          <a className=''
            data-toggle="collapse"
            data-target={`.collapse.${title}Div`}
            data-text="Collapse"
            onClick={this.toggleCollapse}
            >
            {title}
          </a>
        </div>
        <div className={`${title}Div filterBody ` + (open && `inView`)}>
        {
          data.map(d => (
            <div key={d} className='filter'>
              <input type='checkbox' id={d} name={d} />
              <label htmlFor={d}>{d}</label>
            </div>
            ))
          }
        </div>
      </StyledFilterSection>
    )
  }
}

const StyledFilterSection = styled.div`
  // Desktop
  display: flex;
  flex-direction: column;
  margin: 15px;

  & .filterHeader {
    display: flex;
    justify-content: flex-start;
    transition: all 0.2s ease-in-out;
  }

  & a {
    text-decoration: none;
    color: var(--blue-color);
    margin-left: 5px;
  }

  & .filterHeader:hover {
    color: var(--yellow-color);
    a {
      color: var(--yellow-color);
    }
  }

  & .filter {
    font-weight: 300;
    padding: 5px;
    display: flex;
  }

  & input {
    align-self: center;
  }

  & .filterBody {
    display: none;
  }

  & .inView {
    display: block;
  }
`

FilterSection.propTypes = {
  data: PropTypes.array
}

export default FilterSection
