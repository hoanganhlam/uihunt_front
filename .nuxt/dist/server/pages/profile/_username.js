exports.ids = [7];
exports.modules = {

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/_username.vue?vue&type=template&id=2e12d0bf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero is-light\" data-v-2e12d0bf><div class=\"hero-body\" data-v-2e12d0bf><div class=\"container content small has-text-centered\" data-v-2e12d0bf><h1 data-v-2e12d0bf>"+_vm._ssrEscape(_vm._s(_vm.$route.params.username))+"</h1></div></div></section> "),_vm._ssrNode("<div class=\"hero\" data-v-2e12d0bf>","</div>",[_vm._ssrNode("<div class=\"hero-body\" data-v-2e12d0bf>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-2e12d0bf>","</div>",[_vm._ssrNode("<h4 class=\"widget_title\" data-v-2e12d0bf>"+_vm._ssrEscape(_vm._s(_vm.$route.params.username)+"'s posts")+"</h4> "),_vm._ssrNode("<div class=\"columns is-multiline\" data-v-2e12d0bf>","</div>",_vm._l((_vm.response.results),function(ui,i){return _vm._ssrNode("<div class=\"column is-3\" data-v-2e12d0bf>","</div>",[_c('ui',{attrs:{"value":ui}})],1)}),0)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/_username.vue?vue&type=template&id=2e12d0bf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/_username.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  name: "Profile",

  async asyncData({
    $api,
    params
  }) {
    return {
      response: await $api.post.list({
        page_size: 16
      })
    };
  },

  head() {
    return {
      title: this.$route.params.username
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/_username.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/_username.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e12d0bf",
  "e3bcc01e"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_username.js.map