import { u as usePasteState, _ as __nuxt_component_0 } from './Navbar-BF1LAq61.mjs';
import { _ as __nuxt_component_1 } from './CustomFooter-Dp24y0X0.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-Bv6Xdmfc.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'markdown-it';
import 'markdown-it-anchor';
import 'markdown-it-div';
import 'markdown-it-emoji';
import 'markdown-it-highlightjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { textInput } = usePasteState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_CustomFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, { "show-save": "" }, null, _parent));
      _push(`<textarea spellcheck="false" class="h-full px-6 py-4 outline-none" placeholder="&gt; GDSC VIT&#39;s Pastebin and URL Shortener. Paste, save and share!">${ssrInterpolate(unref(textInput))}</textarea>`);
      _push(ssrRenderComponent(_component_CustomFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-VaEVvqTT.mjs.map
