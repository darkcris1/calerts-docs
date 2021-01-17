const indexSublinks = [
  { href: '/#installation', text: 'Installation' },
  { href: '/#usage', text: 'Usage' },
]
const utilsSublinks = [
  { href: '/utils#ca-utils-tag', text: 'ca.utils.tag()' },
  { href: '/utils#ca-utils-styles', text: 'ca.utils.styles()' },
  { href: '/utils#ca-utils-queryall', text: 'ca.utils.queryAll()' },
  { href: '/utils#ca-utils-createpromise', text: 'ca.utils.createPromise()' },
  { href: '/utils#ca-utils-edit', text: 'ca.utils.edit()' },
]
export default {
  logo: (
    <img
      src="/logo.svg"
      alt="Documentatin site logo"
      width="160"
      height="100"
    />
  ),
  links: [
    { href: '/', text: 'Getting Started', subLinks: indexSublinks },
    { href: '/inputs', text: 'Inputs' },
    { href: '/buttons', text: 'Buttons' },
    { href: '/position', text: 'Position' },
    { href: '/icons', text: 'Icons' },
    { href: '/examples', text: 'Examples' },
    { href: '/options', text: 'calert(options?)' },
    { href: '/utils', text: 'UTILS', subLinks: utilsSublinks },
  ],
  footer: (
    <a target="_blank" href="https://github.com/darkcris1">
      Copyright © Darkcris1
    </a>
  ),
}
