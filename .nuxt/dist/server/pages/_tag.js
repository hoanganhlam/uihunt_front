exports.ids = [1];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5d3b7632", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".submit-form .upload .upload-draggable{min-height:200px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_tag.vue?vue&type=template&id=69c6f8a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero is-small\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container content small has-text-centered\">","</div>",[_vm._ssrNode("<div class=\"image is-128x128\" style=\"margin: 0 auto\"><img src=\"https://demo.iveel.co/dawn/content/images/2020/02/icon.png\" alt></div> <h1><span>"+_vm._ssrEscape(_vm._s(_vm.tag ? ((_vm.tag['term'].title) + " - UI design samples") : 'UIHunt'))+"</span> "+((_vm.page > 1)?("<span class=\"tag\">"+_vm._ssrEscape("Page "+_vm._s(_vm.page))+"</span>"):"<!---->")+"</h1> "+((_vm.tag)?("<span class=\"tag is-medium\">Sample design inspire to create the best product!</span>"):"<!---->")+" "+((_vm.tag)?("<p class=\"subtitle\">"+_vm._ssrEscape(_vm._s(_vm.tag.description))+"</p>"):("<p class=\"subtitle\">Explore ideas &amp; inspiration for your great products.</p>"))+" "),_vm._ssrNode("<div class=\"buttons\" style=\"justify-content: center\">","</div>",[_vm._ssrNode("<div class=\"button is-medium\">","</div>",[_vm._ssrNode("<span>Submit</span> "),_c('b-icon',{attrs:{"icon":"upload"}})],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hero\">","</div>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.page === 1)?_vm._ssrNode("<div class=\"level\">","</div>",[_vm._ssrNode("<div class=\"level-left\"><h4 class=\"widget_title\">FEATURED DESIGN</h4></div> "),_vm._ssrNode("<div class=\"level-right\">","</div>",[_c('b-pagination',{attrs:{"current":_vm.currentPage,"simple":"","total":_vm.featured.count,"per-page":3},on:{"update:current":function($event){_vm.currentPage=$event},"change":_vm.fetch}})],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.page === 1)?_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.featured.results),function(ui,i){return _vm._ssrNode("<div class=\"column is-4\">","</div>",[_c('ui',{attrs:{"value":ui}})],1)}),0):_vm._e(),_vm._ssrNode(" <h4 class=\"widget_title\">NEW DESIGN</h4> "),_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.response.results),function(ui,i){return _vm._ssrNode("<div class=\"column is-3\">","</div>",[_c('ui',{attrs:{"value":ui}})],1)}),0),_vm._ssrNode(" "),_c('b-pagination',{attrs:{"total":_vm.response.count,"per-page":8,"current":_vm.page},on:{"update:current":function($event){_vm.page=$event}},scopedSlots:_vm._u([{key:"default",fn:function(props){return _c('b-pagination-button',{attrs:{"page":props.page,"id":("page" + (props.page.number)),"tag":"router-link","href":("?page=" + (props.page.number)),"to":("?page=" + (props.page.number))}},[_vm._v("\n                        "+_vm._s(props.page.number)+"\n                    ")])}},{key:"previous",fn:function(props){return _c('b-pagination-button',{attrs:{"page":props.page,"tag":"router-link","href":("?page=" + (props.page.number)),"to":("?page=" + (props.page.number))}},[_vm._v("\n                        Previous\n                    ")])}},{key:"next",fn:function(props){return _c('b-pagination-button',{attrs:{"page":props.page,"tag":"router-link","href":("?page=" + (props.page.number)),"to":("?page=" + (props.page.number))}},[_vm._v("\n                        Next\n                    ")])}}])})],2)])]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"active":_vm.showCreate,"width":640,"scroll":"keep"},on:{"update:active":function($event){_vm.showCreate=$event}}},[_c('div',{staticClass:"card submit-form"},[_c('div',{staticClass:"card-content"},[_c('upload',{attrs:{"multiple":"","height":"200px","text":"Drop your files here or click to upload"},on:{"done":_vm.handleUpload}}),_vm._v(" "),(_vm.form.medias.length)?_c('div',{staticClass:"columns is-multiline",staticStyle:{"margin-top":"1rem"}},_vm._l((_vm.form.medias),function(img){return _c('div',{key:img.id,staticClass:"column is-3"},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":img.sizes['thumb_247_247'],"alt":""}})])])}),0):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content"},[_c('b-field',{attrs:{"label":"Title","label-position":"on-border"}},[_c('b-input',{attrs:{"size":"is-medium","placeholder":"My new idea."},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Source","label-position":"on-border"}},[_c('b-input',{attrs:{"size":"is-medium","placeholder":"https://yourdomain......"},model:{value:(_vm.form.source_url),callback:function ($$v) {_vm.$set(_vm.form, "source_url", $$v)},expression:"form.source_url"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Description","label-position":"on-border"}},[_c('b-input',{attrs:{"size":"is-medium","type":"textarea","placeholder":"It's amazing?"},model:{value:(_vm.form.short_description),callback:function ($$v) {_vm.$set(_vm.form, "short_description", $$v)},expression:"form.short_description"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Add some tags","label-position":"on-border"}},[_c('field-data',{attrs:{"module":"taxonomy","multiple":"","icon":"label"},model:{value:(_vm.form.terms),callback:function ($$v) {_vm.$set(_vm.form, "terms", $$v)},expression:"form.terms"}})],1),_vm._v(" "),_c('b-field',[_c('button',{staticClass:"button is-medium is-primary",attrs:{"disabled":!_vm.isReady},on:{"click":_vm.submit}},[_vm._v("Submit\n                        ")])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_tag.vue?vue&type=template&id=69c6f8a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_tag.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _tagvue_type_script_lang_js_ = ({
  name: "Tag",
  watchQuery: true,

  async asyncData({
    $api,
    params,
    query,
    store
  }) {
    let tag = params.tag ? await $api['taxonomy'].get(params.tag, {
      params: {
        taxonomy: 'tag',
        publication: 5
      }
    }) : null;
    let page = query.page ? Number.parseInt(query.page) : 1;
    await store.commit('config/SET_APP', tag);
    return {
      page,
      tag: tag,
      response: await $api['post'].list({
        taxonomies: tag ? [tag['id']] : undefined,
        page_size: 8,
        page: page,
        type: 'post'
      }),
      featured: await $api['post'].list({
        taxonomies: tag ? [tag['id']] : undefined,
        page_size: 3,
        type: 'post'
      })
    };
  },

  head() {
    return {
      title: this.tag ? `${this.tag['term'].title} Sample UI` : 'UIHunt - Inspire to the creator to make an awesome product',
      meta: [{
        hid: 'description',
        name: 'description',
        content: undefined
      }]
    };
  },

  data() {
    return {
      showCreate: false,
      currentPage: 1,
      form: {
        title: null,
        short_description: null,
        terms: [],
        medias: [],
        source_url: null
      }
    };
  },

  methods: {
    handleUpload(files) {
      this.form.medias = files;
    },

    async submit() {
      let data = this.cleanData(this.form);
      let res = this.$api.ui.post(data);
      this.showCreate = false;
      this.$buefy.toast.open({
        message: 'Submit successfully!',
        type: 'is-success'
      });
    },

    async fetch(page) {
      this.currentPage = page;
      this.featured = await this.$api['public_ui'].list({
        hash_tags: this.tag ? [this.tag.id] : undefined,
        page_size: 3,
        page: page
      });
    }

  },

  created() {
    if (this.tag) {
      this.form.terms.push(this.tag);
    }
  },

  computed: {
    isReady() {
      return !!(this.form.title && this.form.title.length && this.form.medias.length);
    }

  }
});
// CONCATENATED MODULE: ./pages/_tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tagvue_type_script_lang_js_ = (_tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_tag.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "99c93fae"
  
)

/* harmony default export */ var _tag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_tag.js.map