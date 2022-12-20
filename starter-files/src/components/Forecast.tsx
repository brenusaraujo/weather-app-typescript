import { ForecastT } from '../helpers/types'

type Props = {
  data: ForecastT
}
const Forecast = ({ data }: Props): JSX.Element => {
  return (
    <div>
      <p> Forecast </p>
    </div>
  )
}

export default Forecast
