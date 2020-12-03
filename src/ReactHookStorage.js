import { useState } from 'react'
import Storage from './Storage'

const ReactHookStorage = (options) => {
    /**
     * Initialize storage
     */
    const storage = new Storage(options)

    /**
     * Set prop in storage (local or session)
     * @param {string} key
     * @param {any} value
     */
    const setStorage = (key, value) => {
        if (value) storage.set(key, value)
        return storage.get(key)
    }

    /**
     * Hook to use storage
     * @param {string} key
     * @param {any} defaultValue
     */
    const useStorage = (key, defaultValue) => {
        const [value, setValue] = useState(() => setStorage(key, defaultValue))
        const fetchValue = (v) => {
            setStorage(key, v)
            setValue(v)
        }

        return [value, fetchValue]
    }

    return {
        storage,
        useStorage
    }
}

export default ReactHookStorage
