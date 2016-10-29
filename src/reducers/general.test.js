import tasks from './general'

describe( 'tasks reducer', () => {

    it( 'should return the initial state', () => {
        expect(
            tasks( undefined, {} )
        ).toEqual( [] )
    } )

} )
