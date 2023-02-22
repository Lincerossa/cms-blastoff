import { useContext, createContext, FC, PropsWithChildren } from "react"
import { SETTINGS } from '../../helpers/const'
import { UseSettings } from './types'

const SettingsContext = createContext(SETTINGS)

export const SettingsProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <SettingsContext.Provider value={SETTINGS}>{children}</SettingsContext.Provider>
  )
}

export const useSettings: UseSettings = () => useContext(SettingsContext)


