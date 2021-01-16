import mdParse from '../utils/parseVars'
import SEO from '../components/SEO'
import fs from 'fs'
import generateMdPaths from '../utils/generateMdPaths'
import { useRouter } from 'next/router'

import Link from '../components/common/Link'
import sortLinks, { getNextAndPrevLinks } from '../utils/sortLinks'
import sidebarConfig from '../sidebar.config'
import { useEffect } from 'react'

const sortedLinks = sortLinks(sidebarConfig.links)
const docs = ({ data, title, description }) => {
  const { asPath } = useRouter()
  const prevAndNext = getNextAndPrevLinks(
    asPath.replace(/#\w+/, ''),
    sortedLinks,
  )
  useEffect(() => {
    try {
      const selects = document.querySelectorAll('main select')
      const strings = document.querySelectorAll('.token.string')
      selects.forEach((el, i) => {
        el.onchange = function () {
          if (this.id === 'contentPosition') {
            strings[3].innerText = `'Content ${this.value}'`
          }
          strings[i].innerText = `'${this.value}'`
        }
      })
      document.getElementById('tryPosition').onclick = () => {
        Function(
          `"use strict"; ${
            document.querySelector('code[class*=language]').innerText
          }`,
        )()
      }
    } catch (_) {}
  }, [asPath])
  return (
    <>
      <SEO
        title={title || 'Page Not Found'}
        description={description || title}
      />
      <div>
        <main
          dangerouslySetInnerHTML={{
            __html: data,
          }}
        />
        <div className="prev-next-container">
          {prevAndNext.prev && (
            <Link href={prevAndNext.prev.href} className="prev-page">
              {prevAndNext.prev.text}
            </Link>
          )}
          {prevAndNext.next && (
            <Link href={prevAndNext.next.href} className="next-page">
              {prevAndNext.next.text}
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default docs

export async function getStaticPaths() {
  const data = fs.readdirSync(`docs`)

  const paths = generateMdPaths(data, 'docs')
  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await import(`../docs/${params.docs.join('/')}.md`)
  const { vars, md } = mdParse(res.default)
  return {
    props: {
      title: vars.title || null,
      description: vars.description || null,
      data: md,
    },
  }
}
