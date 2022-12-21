import * as React from 'react'
import { IAppProvider } from '../helpers/interfaces'
import { OptionT, ForecastT } from '../helpers/types'

export const AppContext = React.createContext({} as IAppProvider)

const AppProvider = ({ children }: any) => {
  const [term, setTerm] = React.useState<string>('')
  const [city, setCity] = React.useState<OptionT | null>(null)
  const [options, setOptions] = React.useState<[]>([])
  const [forecast, setForecast] = React.useState<ForecastT | null>(null)

  return (
    <AppContext.Provider
      value={{
        term,
        setTerm,
        city,
        setCity,
        options,
        setOptions,
        forecast,
        setForecast,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
