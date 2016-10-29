import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = ( { general: { app_name } } = {} ) => ( {
    app_name
} )

@connect( mapStateToProps )
class Root extends React.Component {

    render() {
        const { app_name } = this.props

        return <Main app_name={ app_name } />
    }
}

Root.propTypes = {
    app_name: React.PropTypes.string.isRequired
}

export default Root
