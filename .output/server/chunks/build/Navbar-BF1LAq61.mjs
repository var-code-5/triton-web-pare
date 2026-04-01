import { _ as __nuxt_component_0$1 } from './nuxt-link-Bv6Xdmfc.mjs';
import { toRef, isRef, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, b as useRoute, e as useRouter } from './server.mjs';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const usePasteState = () => {
  const textInput = useState("textInput", () => "");
  const pasteContent = useState("pasteContent", () => ({
    id: "",
    content: "",
    is_owner: false,
    is_url: false
  }));
  const isEdit = useState("isEdit", () => false);
  return {
    textInput,
    pasteContent,
    isEdit
  };
};
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    showSave: Boolean,
    isAbout: Boolean,
    isChangelog: Boolean
  },
  setup(__props) {
    const open = ref(false);
    const route = useRoute();
    useRouter();
    const { textInput, pasteContent, isEdit } = usePasteState();
    const isHomeRoute = computed(() => route.path === "/");
    const isAboutRoute = computed(() => route.path === "/about");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav-bg font-sans flex items-center justify-between flex-wrap py-3 px-6 h-16" }, _attrs))} data-v-297e6ffc><div class="flex items-center flex-no-shrink text-white mr-6" data-v-297e6ffc>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-semibold text-xl tracking-tight" data-v-297e6ffc${_scopeId}><span class="text-amber" data-v-297e6ffc${_scopeId}>&lt;</span>&gt;</span>`);
          } else {
            return [
              createVNode("span", { class: "font-semibold text-xl tracking-tight" }, [
                createVNode("span", { class: "text-amber" }, "<"),
                createTextVNode(">")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex sm:hidden items-center" data-v-297e6ffc>`);
      if (!unref(isEdit) && !unref(isHomeRoute) && !unref(isAboutRoute)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="h-8 w-8 cursor-pointer mr-4 fill-current text-white hover:text-amber" viewBox="0 0 208 128" data-v-297e6ffc><rect width="198" height="118" x="5" y="5" ry="10" stroke="#000" stroke-width="10" fill="none" data-v-297e6ffc></rect><path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pasteContent).is_owner && !unref(isEdit) && !unref(isHomeRoute) && !unref(isAboutRoute)) {
        _push(`<svg class="h-6 w-6 cursor-pointer fill-current text-white mr-4 hover:text-amber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-297e6ffc><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showSave && unref(textInput) !== "" || unref(isEdit)) {
        _push(`<svg class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-297e6ffc><path d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([unref(open) ? "block" : "hidden", "w-full flex-grow sm:flex sm:items-center sm:w-auto"])}" data-v-297e6ffc><div class="text-base sm:text-sm sm:flex-grow" data-v-297e6ffc>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/about",
        class: ["no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4", { "text-amber": __props.isAbout }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "#",
        class: ["no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4", { "text-amber": __props.isChangelog }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Changelog `);
          } else {
            return [
              createTextVNode(" Changelog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center" data-v-297e6ffc>`);
      if (unref(pasteContent).is_owner && !unref(isEdit) && !unref(isHomeRoute)) {
        _push(`<svg class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-297e6ffc><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showSave && unref(textInput) !== "" || unref(isEdit)) {
        _push(`<svg class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-297e6ffc><path d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEdit) && !unref(isHomeRoute) && !unref(isAboutRoute)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="h-8 w-8 cursor-pointer ml-4 fill-current border-white text-white hover:text-amber" viewBox="0 0 208 128" data-v-297e6ffc><rect width="198" height="118" x="5" y="5" ry="10" stroke="#1A1A1A" stroke-width="10" fill="none" data-v-297e6ffc></rect><path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isEdit) && !unref(isHomeRoute) && !unref(isAboutRoute)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-label="Copy" class="h-6 w-6 cursor-pointer fill-current text-white hover:text-amber ml-4 copy-btn sm:hidden md:inline-block" data-v-297e6ffc><path d="M0 0h24v24H0z" fill="none" data-v-297e6ffc></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" data-v-297e6ffc></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-297e6ffc"]]);

export { __nuxt_component_0 as _, usePasteState as u };
//# sourceMappingURL=Navbar-BF1LAq61.mjs.map
