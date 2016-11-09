import CSSModules from 'react-css-modules'

import * as styles from './Portfolio.styl'
import projects from '../data/projects.json'

const Portfolio = () => {

    return (
        <ul styleName='list'>
            { projects.map( project =>
                <li styleName='item' key={ project.name }>
                    { project.name }
                </li>
            ) }
        </ul>
    )
}

export default CSSModules( Portfolio, styles )
