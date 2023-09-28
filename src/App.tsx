// style
import Layout from "./components/layout/Layout"

// components
import CopyPassword from "./components/copyPassword/CopyPassword"
import Length from "./components/length/Length"
import Settings from "./components/settings/Settings"
import GeneratePassword from "./components/generatePassword/GeneratePassword"

// media query
import { useMediaQuery } from "react-responsive"

function App() {
  const isMicroDisplay = useMediaQuery({ query: '(max-width: 319px)' })

  return (
    <Layout>
      {isMicroDisplay ?
        <div>no support for this screen size</div>
        :
        <>
          <CopyPassword />
          <Length />
          <Settings />
          <GeneratePassword />
        </>
      }
    </Layout>
  )
}

export default App
