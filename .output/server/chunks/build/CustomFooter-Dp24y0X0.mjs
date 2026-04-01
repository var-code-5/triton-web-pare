import { _ as _export_sfc, b as useRoute } from './server.mjs';
import { u as usePasteState } from './Navbar-BF1LAq61.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

function copyToClipboard(content) {
  if (!content) {
    return;
  }
  (void 0).permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      (void 0).clipboard.writeText(content).then(
        function() {
          console.log("copied to clipboard");
        },
        function() {
          console.error("Unable to copy to clipboard");
        }
      );
    }
  });
}
const _sfc_main = {
  name: "CustomFooter",
  props: {
    slug: {
      type: String,
      default: ""
    }
  },
  setup() {
    const route = useRoute();
    const { isEdit, pasteContent } = usePasteState();
    const isHomeRoute = computed(() => route.path === "/");
    const isAboutRoute = computed(() => route.path === "/about");
    return {
      isEdit,
      isHomeRoute,
      isAboutRoute,
      pasteContent
    };
  },
  methods: {
    handleCopy() {
      copyToClipboard(this.pasteContent.content);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-caab79ec>`);
  if (!$setup.isEdit && !$setup.isHomeRoute && !$setup.isAboutRoute) {
    _push(`<div class="copy-bg sm:hidden" data-v-caab79ec>`);
    if (!$setup.isEdit && !$setup.isHomeRoute && !$setup.isAboutRoute) {
      _push(`<button aria-label="Copy" class="h-6 w-6 cursor-pointer fill-current text-white mr-4 copy-btn" viewBox="0 0 24 24" data-v-caab79ec><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" data-v-caab79ec><path d="M0 0h24v24H0z" fill="none" data-v-caab79ec></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" data-v-caab79ec></path></svg></button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex px-4 py-1 text-xs sm:text-base justify-between text-amber" style="${ssrRenderStyle({ "background": "#1a1a1a", "font-family": "JetbrainsMono" })}" data-v-caab79ec><a href="https://dscvit.com" data-v-caab79ec><span data-v-caab79ec>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} GDSC-VIT</span></a>`);
  if ($props.slug != "") {
    _push(`<a${ssrRenderAttr("href", `https://simpleanalytics.com/dscv.it/${$props.slug}`)} data-v-caab79ec> Simple analytics </a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-caab79ec"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=CustomFooter-Dp24y0X0.mjs.map
