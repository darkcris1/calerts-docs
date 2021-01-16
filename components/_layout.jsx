import SEO from './SEO'
import Sidebar from './Sidebar'
import AccountList from './AccountList'
import sidebarConfig from '../sidebar.config'

const Layout = ({ title, children }) => {
  return (
    <div className="container">
      <SEO title={title} description="Docs">
        <meta name="theme-color" content="#dacb02" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.css"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"
        ></script>
        <link rel="shortcut icon" href="./logo.svg" type="image/svg" />
        <link rel="manifest" href="manifest.json" />
        <script
          defer
          src="https://unpkg.com/calerts@1.0.3/dist/calert.umd.min.js"
        ></script>
      </SEO>
      <Sidebar config={sidebarConfig} />
      {children}
      <AccountList />
    </div>
  )
}

export default Layout
