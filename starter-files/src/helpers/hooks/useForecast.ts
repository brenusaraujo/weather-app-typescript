import { useState, useEffect, ChangeEvent } from 'react'
import { OptionT, ForecastT } from '../types'

const useForecast = () => {
  const [term, setTerm] = useState<string>('')
  const [city, setCity] = useState<OptionT | null>(null)
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

  const getForecast = (city: OptionT) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = { ...data.city, list: data.list.slice(0, 16) }
        setForecat(forecastData)
      })
  }

  const onSubmit = (): void => {
    if (!city) return
    getForecast(city)
  }

  const onOptionSelect = (option: OptionT): void => {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    term,
    options,
    forecast,
    onOptionSelect,
    onSubmit,
    handleChange,
  }
}

export default useForecast
