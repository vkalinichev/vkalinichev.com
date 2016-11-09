import BusinessCard from './BusinessCard'
import Section from './Section'
import Portfolio from './Portfolio'
import Skills from './Skills'
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
            <Skills/>
        </Section>
        <Section dark>
            <Portfolio/>
        </Section>
    </div>


export default CSSModules( Main, styles )
