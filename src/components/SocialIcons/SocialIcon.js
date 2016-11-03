import React, { PropTypes } from 'react'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Npm from './npm.svg'
import Stackoverflow from './stackoverflow.svg'
import CSSModules from 'react-css-modules'
import * as styles from './SocialIcon.styl'

const SocialIcon = ( { net } ) => {
    switch ( net ) {
        case 'github':
            return <Github styleName={`icon ${ net }`}/>
        case 'linkedin':
            return <Linkedin styleName={`icon ${ net }`}/>
        case 'npm':
            return <Npm styleName={`icon ${ net }`}/>
        case 'stackoverflow':
            return <Stackoverflow styleName={`icon ${ net }`}/>
    }
}

SocialIcon.propTypes = {
    net: PropTypes.string.isRequired
}

export default CSSModules( SocialIcon, styles, { allowMultiple: true } )
