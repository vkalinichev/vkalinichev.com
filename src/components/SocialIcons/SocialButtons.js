import React from 'react'
import CSSModules from 'react-css-modules'
import * as styles from './SocialButtons.styl'
import SocialButton from './SocialButton'

const SocialButtons = () =>

    <div styleName='buttons' >
        <SocialButton net='github' link='https://github.com/vkalinichev'/>
        <SocialButton net='linkedin' link='https://www.linkedin.com/in/vkalinichev'/>
        <SocialButton net='stackoverflow' link='http://stackoverflow.com/users/4974102'/>
        <SocialButton net='npm' link='https://npmjs.org/~vkalinichev'/>
    </div>

export default CSSModules( SocialButtons, styles )
