import { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import * as styles from './Section.styl'

const Section = ( { children, light, dark, row, column } ) => {

    let styleName = 'section'

    if ( light ) styleName += ' light'
    if ( dark ) styleName += ' dark'
    if ( row ) styleName += ' row'
    if ( column ) styleName += ' column'

    return (
        <section styleName={ styleName }>
            <div styleName='container'>
                { children }
            </div>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.element,
        PropTypes.arrayOf( PropTypes.element )
    ] ),
    light: PropTypes.bool,
    dark: PropTypes.bool,
    row: PropTypes.bool,
    column: PropTypes.bool
}


export default CSSModules( Section, styles, { allowMultiple: true } )
