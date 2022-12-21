import { ForecastT, OptionT } from "../types"

export interface IAppProvider {
  term: string,
  setTerm: Function,
  city: OptionT | null,
  setCity: Function,
  options: [],
  setOptions: Function
  forecast: ForecastT | null,
  setForecast: Function
};
