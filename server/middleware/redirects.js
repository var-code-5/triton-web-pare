import { redirect as redirectMap } from '~/workers-site/data.js'

const GITHUB_USERNAME = 'GDGVIT'
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`

function playstoreLink(name) {
  return `https://play.google.com/store/apps/details?id=com.dscvit.${name}`
}

export default defineEventHandler((event) => {
  const url = new URL(event.node.req.url || '', 'http://localhost')
  const pathname = url.pathname
  const urlParts = pathname
    .split('/')
    .filter(Boolean)
    .map((s) => s.toLowerCase())

  if (!urlParts.length) return

  // Check if it's in the redirect map
  if (redirectMap[urlParts[0]]) {
    return sendRedirect(event, redirectMap[urlParts[0]], 301)
  }

  // Handle GitHub shortcuts
  if (urlParts[0] === 'g') {
    switch (urlParts.length) {
      case 1:
        return sendRedirect(event, GITHUB_URL, 301)
      case 2:
        return sendRedirect(event, `${GITHUB_URL}/${urlParts[1]}`, 301)
      case 3:
        return sendRedirect(event, `${GITHUB_URL}/${urlParts[1]}/commit/${urlParts[2]}`, 301)
      case 4:
        return sendRedirect(event, `${GITHUB_URL}/${urlParts[1]}/issues/${urlParts[3]}`, 301)
    }
  }

  // Handle app shortcuts (Play Store)
  if (urlParts[0] === 'app') {
    return sendRedirect(event, playstoreLink(urlParts[1]), 301)
  }
})
