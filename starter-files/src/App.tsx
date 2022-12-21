import Forecast from './components/Forecast'
import Search from './components/Search'
import useForecast from './helpers/hooks/useForecast'
import AppProvider from './context/App.provider'

const App = (): JSX.Element => {
  const { term, options, forecast, onOptionSelect, onSubmit, handleChange } =
    useForecast()
  return (
    <AppProvider>
      <main className="flex justify-center items-center h-[100vh] w-full bg-sky-500/75">
        {forecast ? (
          <Forecast data={forecast} />
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
    </AppProvider>
  )
}

export default App
