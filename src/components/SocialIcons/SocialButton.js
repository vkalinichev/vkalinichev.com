import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import * as styles from './SocialButton.styl'
import SocialIcon from './SocialIcon'

const SocialButton = ( { net, link } ) =>

    <a styleName='button' href={ link } target='_blank' >
        <SocialIcon net={ net } />
    </a>


SocialButton.propTypes = {
    net: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default CSSModules( SocialButton, styles )
