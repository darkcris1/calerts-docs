import { useState } from 'react'
import Link from './common/Link'
import SidebarLinks from './common/SidebarLinks'
import Toggler from './Toggler'

const Sidebar = ({ config }) => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  const { links, logo, footer } = config
  const showClass = show ? 'show' : ''
  return (
    <>
      <div className={`nav-modal ${showClass}`} onClick={toggle}></div>
      <nav className={`sidebar ${showClass}`}>
        <ul>
          <Link href="/" className="logo">
            {logo}
          </Link>
          {links.map((data, i) => {
            return <SidebarLinks key={i} data={data} />
          })}
          <footer>{footer}</footer>
        </ul>
      </nav>
      <Toggler onClick={toggle} toggled={show} />
    </>
  )
}

export default Sidebar
