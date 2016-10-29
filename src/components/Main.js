import React from 'react'

const Main = ( { app_name } ) => (

    <div>
        { app_name }
    </div>

)

Main.propTypes = {
    app_name: React.PropTypes.string.isRequired
}


export default Main
