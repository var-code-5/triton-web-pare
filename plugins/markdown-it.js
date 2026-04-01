import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItDiv from 'markdown-it-div'
import markdownItEmoji from 'markdown-it-emoji'
import markdownItHighlight from 'markdown-it-highlightjs'

export default defineNuxtPlugin(() => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: false,
    typographer: true,
  })

  md.use(markdownItDiv)
  md.use(markdownItHighlight)
  md.use(markdownItEmoji)
  md.use(markdownItAnchor, {
    permalink: true,
    permalinkSymbol: '🔗',
  })

  return {
    provide: {
      md,
    },
  }
})
