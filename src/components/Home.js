import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Home extends Component {
  state = {
    isMounted: false,
  }

  componentDidMount() {
    this.setState({ isMounted: true }) // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    const { isMounted } = this.state
    return <Container>{isMounted ? 'is mounted' : 'is not mounted'}</Container>
  }
}

export default Home
