import BusinessCard from './BusinessCard'
import Section from './Section'
import CSSModules from 'react-css-modules'

import * as styles from './Main.styl'

const Main = () =>

    <div styleName='wrapper'>
        <Section light>
            <BusinessCard/>
        </Section>
        <Section dark>
            <div>some</div>
            <div>bio</div>
            <div>info</div>
        </Section>
        <Section light>
            <div>portfolio</div>
        </Section>
    </div>


export default CSSModules( Main, styles )
