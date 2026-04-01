import { _ as __nuxt_component_0 } from './Navbar-BF1LAq61.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  name: "About"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root flex flex-col h-screen" }, _attrs))} data-v-6e75528d>`);
  _push(ssrRenderComponent(_component_Navbar, { "is-about": "" }, null, _parent));
  _push(`<div class="p-4 h-full" data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d> Triton - GDSC VIT&#39;s pastebin and URL shortener </h1><p class="text-body sm:pr-64" data-v-6e75528d> Sharing short code samples, logs or links is now easier than ever! </p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Basics</h1><p class="text-body sm:pr-64" data-v-6e75528d> The easiest way to use triton, is from inside your browser. Type or paste your content into the text area on the homepage, save it, and copy the link. You can now share this link with whoever you want. </p><p class="text-body sm:pr-64" data-v-6e75528d> If you want to create a short url from a link, simply paste the link in the text field. You can now copy the resulting link and it will automatically redirect everyone. </p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Editing</h1><p class="text-body sm:pr-64" data-v-6e75528d> You can edit your documents by clicking the edit button </p><p class="text-body sm:pr-64" data-v-6e75528d> When you create your first document we will automatically create an (anonymous) account for you, so you will be able to edit your documents for as long as you keep our cookie. If you want a more permanent way to keep your pastes and edit them from multiple devices you can create an account. Pastes which you created before signing up will be automatically transferred to your account. </p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Markdown support</h1><p class="text-body sm:pr-64" data-v-6e75528d> We support markdown documents formatting in the CommonMark spec. Append &quot;.md&quot; to the end of the url to render any paste as markdown. </p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Analytics</h1><p class="text-body sm:pr-64" data-v-6e75528d> We support per-page analytics using a privacy-friendly analytics provider, <a class="underline text-amber cursor-pointer" href="https://simpleanalytics.com" data-v-6e75528d>Simple Analytics</a></p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Document lifetime</h1><p class="text-body sm:pr-64" data-v-6e75528d> There is no explicit expiration time for documents on triton. Documents may however be removed at any time without notice. </p><br data-v-6e75528d><h1 class="text-title sm:pr-64" data-v-6e75528d>Open source</h1><p class="text-body sm:pr-64" data-v-6e75528d> Triton is fully open source and built on open source technology. All sources can be found on <a class="underline text-amber cursor-pointer" href="https://github.com/GDGVIT/triton-web" data-v-6e75528d>GitHub</a>. You can easily deploy it yourself wherever you want. </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6e75528d"]]);

export { about as default };
//# sourceMappingURL=about-BfvpVent.mjs.map
