import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'

@connect()
class Root extends React.Component {

    static propTypes = {}

    render() {
        return <Main/>
    }
}

export default Root
