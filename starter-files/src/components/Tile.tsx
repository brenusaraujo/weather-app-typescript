import Feels from './Icons/Feels'
import Wind from './Icons/Wind'
import Humidity from './Icons/Humidity'
import Visibility from './Icons/Visibility'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'

type Props = {
  icon: 'wind' | 'feels' | 'visibility' | 'pressure' | 'pop' | 'humidity'
  title: string
  info: string | JSX.Element
  description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({ icon, title, description, info }: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1 ">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </article>
  )
}

export default Tile
