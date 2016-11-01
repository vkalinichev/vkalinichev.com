import React from 'react'
import BusinessCard from './BusinessCard'

const Main = ( { app_name } ) =>

    <div>
        {/*{ app_name }*/}
        <BusinessCard/>
    </div>



Main.propTypes = {
    app_name: React.PropTypes.string.isRequired
}


export default Main
