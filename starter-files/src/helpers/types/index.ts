import { ChangeEvent } from 'react'

export type OptionT = {
  name: string
  country: string
  lat: number
  lon: number
}

export type PropsT = {
  term: string
  options: []
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: OptionT) => void
  onSubmit: () => void
}

export type ForecastT = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        speed: number
        gust: number
        dg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]

  coord?: {
    lon: number
    lat: number
  }
}
