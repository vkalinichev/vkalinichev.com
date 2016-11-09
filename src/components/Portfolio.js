import CSSModules from 'react-css-modules'

import * as styles from './Portfolio.styl'
import projects from '../data/projects.json'

const Portfolio = () => {

    return (
        <ul>
            { projects.map( project =>
                <li>{ project.name }</li>
            ) }
        </ul>
    )
}

export default CSSModules( Portfolio, styles )
