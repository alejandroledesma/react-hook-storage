import ReactHookStorage from './ReactHookStorage'

const defaultProps = {
    key: 'react-hook-storage',
    storage: 'local',
    isSupported: true,
}

/**
 * Install react-hook-storage
 * @param {Object} options
 */
function Initialize(options = {}) {
    if (typeof process !== 'undefined' && (process.server || process.SERVER_BUILD)) return

    const { key, storage, isSupported } = options
    const props = {
        ...defaultProps,
        key: key || defaultProps.key,
        storage: storage || defaultProps.storage,
        isSupported: isSupported !== undefined ? isSupported : defaultProps.isSupported
    }

    try {
        const test = 'react-hook-storage-test'
        window.localStorage.setItem(test, test)
        window.localStorage.removeItem(test)
    } catch (e) {
        props.isSupported = false
        console.error('Local or Session storage is not supported')
    }

    return new ReactHookStorage(props)
}

export default Initialize