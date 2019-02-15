import React, { Component } from 'react'
import styled from 'styled-components'

class RootComponent extends Component {
    render () {
        return (
            <Wrapper>
                Root is here
            </Wrapper>
        )
    }
}

export default RootComponent

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`
