import CSSModules from 'react-css-modules'
import * as styles from './BusinessCard.styl'
//import photo from './Vladimir.Kalinichev.jpg'
import SocialIcons from './SocialIcons/SocialButtons'

const BusinessCard = () =>

    <div styleName='card' >
        <figure styleName='photo' />
        <div styleName='info'>
            <h3 styleName='title'>Vladimir Kalinichev</h3>
            <div styleName='post'>JavaScript Developer</div>
            <SocialIcons/>
        </div>
    </div>

export default CSSModules( BusinessCard, styles )
