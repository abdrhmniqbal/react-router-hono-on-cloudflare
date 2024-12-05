/**
 * Nonce Provider.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
 */
import * as React from 'react'

export const NonceContext = React.createContext<string>('')
export const NonceProvider = NonceContext.Provider

export const useNonce = () => React.useContext(NonceContext)