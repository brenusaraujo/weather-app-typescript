import { ChangeEvent } from 'react'

export type OptionT = {
  name: string
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
    
}
