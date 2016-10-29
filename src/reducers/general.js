const general = ( state = {}, action ) => {

    switch ( action.type ) {
        case 'RECEIVE_DATA':
            return action.data || state
        default:
            return state
    }

}

export default general
