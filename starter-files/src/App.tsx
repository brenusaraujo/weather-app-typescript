import Search from './components/Search'
import useForecast from './helpers/hooks/useForecast'

const App = (): JSX.Element => {
  const { term, options, forecast, onOptionSelect, onSubmit, handleChange } =
    useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        ''
      ) : (
        <Search
          term={term}
          options={options}
          handleChange={handleChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
