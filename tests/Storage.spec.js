import ReactHookStorage from '../src'

const user = {
    name: 'Foo',
    surname: 'Demo',
}

describe('Storage local', () => {
    const Storage = new ReactHookStorage()

    beforeEach(Storage.storage.clean)

    it('Should be set and get value', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(user)
    })

    it('Should be remove value', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(user)
        Storage.storage.remove('user')
        expect(Storage.storage.get('user')).toEqual(undefined)
    })

    it('Should be clean all value', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(user)
        Storage.storage.clean()
        expect(Storage.storage.get('user')).toEqual(undefined)
    })
})

describe('Storage is not supported', () => {
    const Storage = new ReactHookStorage({
        isSupported: false,
    })

    beforeEach(Storage.storage.clean)

    it('Should be set and get value returned null', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(null)
    })

    it('Should be remove value returned null', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(null)
        Storage.storage.remove('user')
        expect(Storage.storage.get('user')).toEqual(null)
    })

    it('Should be clean all value returned null', () => {
        Storage.storage.set('user', user)
        expect(Storage.storage.get('user')).toEqual(null)
        Storage.storage.clean()
        expect(Storage.storage.get('user')).toEqual(null)
    })
})
