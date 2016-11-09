import CSSModules from 'react-css-modules'

import * as styles from './Skills.styl'
import skills from '../data/skills.json'

const Skills = () => {

    return (
        <ul styleName='list'>
            { skills.map( skill =>
                <li styleName='item' key={ skill.name }>
                    { skill.name }
                </li>
            ) }
        </ul>
    )
}

export default CSSModules( Skills, styles )
