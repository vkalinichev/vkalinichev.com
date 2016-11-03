import CSSModules from 'react-css-modules'
import * as styles from './BusinessCard.styl'
import photo from './Vladimir.Kalinichev.jpg'
import SocialIcons from './SocialIcons/SocialButtons'

const BusinessCard = () =>

    <div styleName='card' >
        <div styleName='photo' src={ photo } />
        <div styleName='info'>
            <h3 styleName='title'>Vladimir Kalinichev</h3>
            <div styleName='post'>JavaScript-developer</div>
            <SocialIcons/>
        </div>
    </div>

export default CSSModules( BusinessCard, styles )
