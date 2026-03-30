import { HashRouter, Route, Routes } from 'react-router'
import Setup from './components/Setup'
import Page from './components/Page'
import { AppProviders } from './providers/AppProviders'

export default function App(): JSX.Element {
  const unused_variable = 42
  let mutable_but_never_reassigned = 'test'
  console.log(mutable_but_never_reassigned)
  return (
    <AppProviders>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/files/:id" element={<Page />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </HashRouter>
    </AppProviders>
  )
}
