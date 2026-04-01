<template>
  <nav
    class="nav-bg font-sans flex items-center justify-between flex-wrap py-3 px-6 h-16"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link to="/">
        <span class="font-semibold text-xl tracking-tight"
          ><span class="text-amber">&lt;</span>&gt;</span
        >
      </nuxt-link>
    </div>
    <div class="flex sm:hidden items-center">
      <svg
        v-if="
          !isEdit &&
          !isHomeRoute &&
          !isAboutRoute
        "
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="h-8 w-8 cursor-pointer mr-4 fill-current text-white hover:text-amber"
        viewBox="0 0 208 128"
        @click="handleMD"
      >
        <rect
          width="198"
          height="118"
          x="5"
          y="5"
          ry="10"
          stroke="#000"
          stroke-width="10"
          fill="none"
        />
        <path
          d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"
        />
      </svg>

      <svg
        v-if="
          pasteContent.is_owner &&
          !isEdit &&
          !isHomeRoute &&
          !isAboutRoute
        "
        class="h-6 w-6 cursor-pointer fill-current text-white mr-4 hover:text-amber"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="handleEdit"
      >
        <path
          d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        />
      </svg>

      <svg
        v-if="
          (showSave && textInput !== '') ||
          isEdit
        "
        class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="handleSave"
      >
        <path
          d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"
        />
      </svg>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-base sm:text-sm sm:flex-grow">
        <nuxt-link
          to="/about"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4"
          :class="{ 'text-amber': isAbout }"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="#"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4"
          :class="{ 'text-amber': isChangelog }"
        >
          Changelog
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <svg
          v-if="
            pasteContent.is_owner &&
            !isEdit &&
            !isHomeRoute
          "
          class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="handleEdit"
        >
          <path
            d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
        </svg>

        <svg
          v-if="
            (showSave && textInput !== '') ||
            isEdit
          "
          class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="handleSave"
        >
          <path
            d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"
          />
        </svg>
        <svg
          v-if="
            !isEdit &&
            !isHomeRoute &&
            !isAboutRoute
          "
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="h-8 w-8 cursor-pointer ml-4 fill-current border-white text-white hover:text-amber"
          viewBox="0 0 208 128"
          @click="handleMD"
        >
          <rect
            width="198"
            height="118"
            x="5"
            y="5"
            ry="10"
            stroke="#1A1A1A"
            stroke-width="10"
            fill="none"
          />
          <path
            d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"
          />
        </svg>
        <svg
          v-if="
            !isEdit &&
            !isHomeRoute &&
            !isAboutRoute
          "
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          aria-label="Copy"
          class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber ml-4 copy-btn sm:hidden md:inline-block"
          @click="handleCopy"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { copyToClipboard } from '~/utils/clipboard'

const validURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return pattern.test(str)
}

const props = defineProps({
  showSave: Boolean,
  isAbout: Boolean,
  isChangelog: Boolean,
})

const open = ref(false)
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const { textInput, pasteContent, isEdit } = usePasteState()

const isHomeRoute = computed(() => route.path === '/')
const isAboutRoute = computed(() => route.path === '/about')

const toggle = () => {
  open.value = !open.value
}

const handleEdit = () => {
  isEdit.value = true
}

const handleCopy = () => {
  copyToClipboard(pasteContent.value.content)
}

const handleMD = () => {
  const currURL = window.location.href
  if (currURL.slice(-3) === '.md') {
    window.location.href = currURL.split('.md')[0]
    return
  }
  window.location.href += '.md'
}

const handleSave = async () => {
  if (isEdit.value) {
    try {
      const { id } = await $fetch(`${config.public.apiBase}/paste`, {
        method: 'PATCH',
        body: pasteContent.value,
        credentials: 'include',
      })

      isEdit.value = false
      await navigateTo(`/${id}`)
    } catch {
      isEdit.value = false
      await navigateTo(`/${pasteContent.value.id}`)
    }
  } else if (textInput.value !== '') {
    try {
      const content = textInput.value
      const isUrl = validURL(content)
      const { paste_id: pasteId } = await $fetch(`${config.public.apiBase}/paste`, {
        method: 'POST',
        body: { is_url: isUrl, content },
        credentials: 'include',
      })

      textInput.value = ''
      await router.push({ path: `${isUrl ? 'v/' : ''}${pasteId}` })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
}

const doSave = (e) => {
  if (!(e.keyCode === 83 && e.ctrlKey)) {
    return
  }

  e.preventDefault()
  handleSave()
}

const doCopy = (e) => {
  if (!(e.keyCode === 67 && e.altKey)) {
    return
  }
  e.preventDefault()
  handleCopy()
}

onMounted(() => {
  document.addEventListener('keydown', doSave)
  document.addEventListener('keydown', doCopy)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', doSave)
  document.removeEventListener('keydown', doCopy)
})
</script>

<style scoped>
.nav-bg {
  background: #1a1a1a;
  font-family: 'JetbrainsMono', Courier, monospace;
}
</style>
