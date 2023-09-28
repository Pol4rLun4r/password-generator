// style
import Layout from "./components/layout/Layout"

// components
import CopyPassword from "./components/copyPassword/CopyPassword"
import Length from "./components/length/Length"
import Settings from "./components/settings/Settings"
import GeneratePassword from "./components/generatePassword/GeneratePassword"

function App() {

  return (
    <Layout>
      <CopyPassword />
      <Length />
      <Settings />
      <GeneratePassword/>
    </Layout>
  )
}

export default App
