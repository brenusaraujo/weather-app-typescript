import { ChangeEvent, useEffect, useState } from 'react'
import { OptionT } from './helpers/types'
import Search from './components/Search'

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('')
  const [location, setLocation] = useState<OptionT | null>(null)
  const [options, setOptions] = useState<[]>([])
  const [forecast, setForecat] = useState<ForecastT | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=${5}&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const content = event.target.value.trim()
    setTerm(content)
    getSearchOptions(content)
  }

  const getForecast = (location: OptionT) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metrics&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setForecat(data))
  }

  const onSubmit = (): void => {
    if (!location) return
    getForecast(location)
  }

  const onOptionSelect = (option: OptionT): void => {
    setLocation(option)
  }

  useEffect(() => {
    if (location) {
      setTerm(location.name)
      setOptions([])
    }
  }, [location])
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <Search
        term={term}
        options={options}
        handleChange={handleChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
    </main>
  )
}

export default App
