exports.ids = [4];
exports.modules = {

/***/ 35:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=template&id=700b5ad4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.ui.title))+"</h1> <p class=\"subtitle\">"+_vm._ssrEscape(_vm._s(_vm.ui.short_description))+"</p> "),_c('user-card',{attrs:{"username":"","value":_vm.ui.user}})],2),_vm._ssrNode(" <div class=\"container media-show\"><div class=\"columns\"><div class=\"column has-text-centered\"><div class=\"image\"><img"+(_vm._ssrAttr("src",_vm.ui.medias[_vm.index].sizes['full_size']))+(_vm._ssrAttr("alt",_vm.ui.medias[_vm.index].title))+"></div></div> <div class=\"column is-3\"><div class=\"columns is-mobile is-multiline\">"+(_vm._ssrList((_vm.ui.medias),function(media,i){return ("<div class=\"column is-6\"><div class=\"clickable\"><div class=\"image\"><img"+(_vm._ssrAttr("src",media.sizes['thumb_247_247']))+(_vm._ssrAttr("alt",media.title))+"></div></div></div>")}))+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<div class=\"buttons\" style=\"justify-content: center;\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("button is-medium",{'is-success': _vm.ui.is_voted}))+">","</div>",[_c('b-icon',{attrs:{"icon":"heart"}}),_vm._ssrNode(" <span>"+_vm._ssrEscape(_vm._s(_vm.ui['vote_count']))+"</span>")],2),_vm._ssrNode(" "+((_vm.ui['options'] && _vm.ui['options']['view_count'])?("<div class=\"button is-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.ui['options']['view_count'])+" views\n                    ")+"</div>"):"<!---->")+" "),(_vm.ui['options'] && _vm.ui['options']['source_url'])?_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.ui['options']['source_url']))+" target=\"_blank\" class=\"button is-text is-small\">","</a>",[_c('b-icon',{attrs:{"size":"is-small","icon":"link"}})],1):_vm._e()],2),_vm._ssrNode(" "),(_vm.updating)?_c('b-field',{attrs:{"label":"Add some tags","label-position":"on-border"}},[_c('field-data',{attrs:{"module":"hash_tag","multiple":"","icon":"label"},model:{value:(_vm.ui.hash_tags),callback:function ($$v) {_vm.$set(_vm.ui, "hash_tags", $$v)},expression:"ui.hash_tags"}})],1):_c('div',{staticClass:"tags",staticStyle:{"justify-content":"center"}},_vm._l((_vm.ui.hash_tags),function(tag){return _c('n-link',{key:tag.id,staticClass:"tag is-medium",attrs:{"to":("/" + (tag.slug))}},[_c('b-icon',{attrs:{"size":"is-small","icon":"label"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(tag.title))])],1)}),1),_vm._ssrNode(" "+((_vm.currentUser && _vm.currentUser.username === 'lam')?("<div class=\"buttons\" style=\"justify-content: center\">"+((_vm.updating)?("<div class=\"button\">Save</div>"):"<!---->")+" <div class=\"button is-text\">"+_vm._ssrEscape(_vm._s(_vm.updating ? 'Cancel' : 'Update')+"\n                    ")+"</div></div>"):"<!---->"))],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"hero is-light\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<h4 class=\"widget_title\">Response</h4> "),_c('comment-form',{attrs:{"ui":_vm.ui,"parent":_vm.commentParent},on:{"posted":function($event){return _vm.fetch()}}},[(_vm.commentParent)?_c('div',{staticClass:"control"},[_c('div',{staticClass:"button",on:{"click":function($event){_vm.commentParent = null}}},[_c('b-icon',{attrs:{"size":"is-small","icon":"window-close"}}),_vm._v(" "),_c('span',[_vm._v("Replying "+_vm._s(_vm.convertName(_vm.commentParent.user)))])],1)]):_vm._e()]),_vm._ssrNode(" "),_vm._l((_vm.response.results),function(comment){return _c('comment',{key:comment.id,attrs:{"ui":_vm.ui,"value":comment,"avatar-size":"is-24x24"},on:{"reply":_vm.reply}})})],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"hero\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h4 class=\"widget_title\">RELATED UI</h4> "),(_vm.ui.related)?_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.ui.related),function(u,i){return _vm._ssrNode("<div class=\"column is-3\">","</div>",[_c('ui',{attrs:{"value":u}})],1)}),0):_vm._e()],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=template&id=700b5ad4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "PostDetail",

  async asyncData({
    $api,
    params
  }) {
    let ui = await $api.public_ui.get(params.id);
    return {
      ui: ui,
      response: await $api.comment.list({
        ui: ui.id
      })
    };
  },

  data() {
    return {
      index: 0,
      commentParent: null,
      updating: false
    };
  },

  head() {
    return {
      title: this.ui ? this.ui.title : 'UIHunt',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.ui.short_description
      }]
    };
  },

  methods: {
    vote() {
      if (this.currentUser) {
        this.$api.ui.vote(this.ui.id, {}).then(res => {
          this.ui.is_voted = res;

          if (res) {
            this.ui['vote_count']++;
          } else {
            this.ui['vote_count']--;
          }
        });
      } else {
        this.$buefy.toast.open({
          message: 'Login required!',
          type: 'is-warning'
        });
      }
    },

    reply(comment) {
      this.commentParent = comment;
    },

    async fetch() {
      this.response.results = [];
      this.response = await this.$api.comment.list({
        ui: this.ui.id
      });
    },

    submit() {
      this.$api.ui.update(this.ui.id, {
        hash_tags: this.ui.hash_tags.map(x => x.id)
      });
    }

  },

  mounted() {
    this.toTop();
  },

  watch: {
    $route(to, from) {
      this.toTop();
    }

  }
});
// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/post/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4b34f3ce"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map