exports.ids = [7];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/_username.vue?vue&type=template&id=4eb25a50&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero is-light\" data-v-4eb25a50>","</section>",[_vm._ssrNode("<div class=\"hero-body\" data-v-4eb25a50>","</div>",[_vm._ssrNode("<div class=\"container content small has-text-centered\" data-v-4eb25a50>","</div>",[_c('avatar',{staticClass:"is-128x128",staticStyle:{"margin":"0 auto"},attrs:{"size":"thumb_247_247","value":_vm.user.profile.media}}),_vm._ssrNode(" <h1 data-v-4eb25a50>"+_vm._ssrEscape(_vm._s(_vm.convertName(_vm.user)))+"</h1> <span class=\"tag is-medium\" data-v-4eb25a50>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</span> "+((_vm.user.profile.bio)?("<p class=\"subtitle\" data-v-4eb25a50>"+_vm._ssrEscape(_vm._s(_vm.user.profile.bio))+"</p>"):"<!---->"))],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hero\" data-v-4eb25a50>","</div>",[_vm._ssrNode("<div class=\"hero-body\" data-v-4eb25a50>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-4eb25a50>","</div>",[_vm._ssrNode("<h4 class=\"widget_title\" data-v-4eb25a50>"+_vm._ssrEscape(_vm._s(_vm.convertName(_vm.user))+"'s posts")+"</h4> "),_vm._ssrNode("<div class=\"columns is-multiline\" data-v-4eb25a50>","</div>",_vm._l((_vm.response.results),function(ui,i){return _vm._ssrNode("<div class=\"column is-3\" data-v-4eb25a50>","</div>",[_c('ui',{attrs:{"value":ui}})],1)}),0)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/_username.vue?vue&type=template&id=4eb25a50&scoped=true&

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
//
//
//
/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  name: "Profile",

  async asyncData({
    $api,
    params
  }) {
    let user = await $api.user.get(params.username);
    return {
      user,
      response: await $api.public_ui.list({
        user: user.id,
        page_size: 16
      })
    };
  },

  head() {
    return {
      title: this.convertName(this.user)
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
  "4eb25a50",
  "e3bcc01e"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_username.js.map