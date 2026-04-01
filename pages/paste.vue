<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <code
      v-if="!isEdit && !isMarkdown"
      id="content"
      v-highlight="pasteContent.content"
      class="break-word pl-4 h-full nomarkdown"
    ></code>
    <div
      v-else-if="isMarkdown"
      class="text-white sm:w-3/4 sm:m-auto markdown h-full overflow-auto w-full link-color"
      v-html="markdownHtml"
    ></div>
    <textarea
      v-else
      v-model="textEdit"
      spellcheck="false"
      class="h-full px-6 py-4 outline-none"
    ></textarea>
    <CustomFooter :slug="slug" />
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const { $md } = useNuxtApp()
const { pasteContent, isEdit } = usePasteState()

const slug = ref('')
const isMarkdown = ref(false)

const pasteParam = computed(() => {
  const value = route.params.paste
  if (Array.isArray(value)) {
    return value.join('/')
  }

  return value || ''
})

await useAsyncData(
  () => `paste-${pasteParam.value}`,
  async () => {
    const paste = pasteParam.value
    const prelude = paste.split('/')
    let extension = paste.split('.')

    if (prelude[1]) {
      extension = prelude[1].split('.')
      isMarkdown.value = extension[1] === 'md'
    } else {
      extension = paste.split('.')
      isMarkdown.value = extension[1] === 'md'
    }

    try {
      const response = await $fetch(`${config.public.apiBase}/paste/${extension[0]}`, {
        credentials: 'include',
      })

      if (response.is_url && prelude[0] !== 'v') {
        await navigateTo(response.content, { external: true })
        return
      }

      pasteContent.value = response
      slug.value = paste
    } catch {
      await navigateTo('/')
    }
  },
  {
    watch: [pasteParam],
  }
)

const textEdit = computed({
  get: () => pasteContent.value.content,
  set: (value) => {
    pasteContent.value.content = value
  },
})

const markdownHtml = computed(() => $md.render(pasteContent.value.content || ''))
</script>

<style>
:root {
  background: #212121;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  @apply bg-amber;
}

.nomarkdown {
  white-space: pre;
  overflow-y: scroll;
  overflow: auto;
  background: #212121;
  overflow-wrap: break-word;
  padding-left: 2rem;
  padding-top: 1rem;
  font-family: 'JetbrainsMono', Courier, monospace;
  font-size: 14px;
}

img {
  max-width: 35%;
  vertical-align: middle;
}

.markdown blockquote {
  padding: 0 1em;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 4px solid #8b949e;
}
table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
}

tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #1b1b1b;
}

.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #1b1b1b;
}
table > thead > tr > th,
table > tbody > tr > th,
table > tfoot > tr > th,
table > thead > tr > td,
table > tbody > tr > td,
table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border: 1px solid #3b434b;
}

.link-color a {
  color: #ff9800;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #3b434b;
}

.markdown {
  border: 1px solid #3b434b;
  border-radius: 6px;
  padding-right: 32px;
  padding-left: 32px;
}

.markdown pre {
  padding: 12px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #1b1b1b;
  border-radius: 6px;
  margin: 10px 0;
}

.markdown code pre tt {
  font-family: 'JetbrainsMono', SFMono-Regular, Consolas, Liberation Mono, Menlo,
    monospace;
}

.markdown .hljs {
  background: #1b1b1b;
  font-family: 'JetbrainsMono', SFMono-Regular, Consolas, Liberation Mono, Menlo,
    monospace;
}

.markdown blockquote > :last-child {
  margin-bottom: 0;
}

.markdown blockquote,
.markdown p,
.markdown ol,
.markdown pre,
.markdown table,
.markdown ul {
  margin-top: 0;
  margin-bottom: 16px;
}

.header-anchor {
  display: none;
  font-size: 0.8em;
}

h1:hover .header-anchor,
h2:hover .header-anchor,
h3:hover .header-anchor,
h4:hover .header-anchor,
h5:hover .header-anchor,
h6:hover .header-anchor {
  display: inline;
}

h1,
h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #3b434b;
}
</style>
