exports.ids = [4];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return post_detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return post_list; });
const post_detail = ["id", "pid", "title", "slug", "description", "content", "created", {
  "media": ["id", "title", "sizes"]
}, {
  "medias": ["id", "title", "sizes"]
}, {
  "post_related": ["title", "slug", "post_type", "content"]
}, {
  "related": ["title", "pid", "slug", "created", {
    "media": ["id", "title", "sizes"]
  }, {
    "medias": ["id", "title", "sizes"]
  }]
}, "meta", "options", {
  "post_parent": ["meta"]
}, {
  "terms": ["id", "taxonomy", {
    "term": ["title", "slug"]
  }]
}, "user", "post_type", "next", "previous"];
const post_list = ["id", "pid", "title", "slug", "created", {
  "media": ["title", "sizes"]
}, {
  "medias": ["id", "title", "sizes"]
}, {
  "meta": ["source"]
}, "user"];

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_id.vue?vue&type=template&id=36a869bb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ui)?_c('div',[_vm._ssrNode("<section class=\"hero\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.ui.title))+"</h1> <p class=\"subtitle\">"+_vm._ssrEscape(_vm._s(_vm.ui.short_description))+"</p> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("credit:\n                    "),_c('n-link',{attrs:{"to":("/profile/" + (_vm.ui.meta.author))}},[_vm._v(_vm._s(_vm.ui.meta.author))])],2)],2),_vm._ssrNode(" <div class=\"container media-show\"><div class=\"columns\"><div class=\"column has-text-centered\"><div class=\"image\"><img"+(_vm._ssrAttr("src",_vm.ui.medias[_vm.index].sizes['full_size']))+(_vm._ssrAttr("alt",_vm.ui.medias[_vm.index].title))+"></div></div> <div class=\"column is-3\"><div class=\"columns is-mobile is-multiline\">"+(_vm._ssrList((_vm.ui.medias),function(media,i){return ("<div class=\"column is-6\"><div class=\"clickable\"><div class=\"image\"><img"+(_vm._ssrAttr("src",media.sizes['thumb_247_247']))+(_vm._ssrAttr("alt",media.title))+"></div></div></div>")}))+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<div class=\"buttons\" style=\"justify-content: center;\">","</div>",[(_vm.ui['vote_object'])?_vm._ssrNode("<div"+(_vm._ssrClass("button is-medium",{'is-success': _vm.ui['vote_object'].is_voted}))+">","</div>",[_c('b-icon',{attrs:{"icon":"heart"}}),_vm._ssrNode(" <span>"+_vm._ssrEscape(_vm._s(_vm.ui['vote_object'].total))+"</span>")],2):_vm._e(),_vm._ssrNode(" "+((_vm.ui['meta'] && _vm.ui['meta']['view_count'])?("<div class=\"button is-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.ui['meta']['view_count'])+" views\n                    ")+"</div>"):"<!---->")+" "),(_vm.ui['meta'] && _vm.ui['meta']['source_url'])?_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.ui['meta']['source_url']))+" target=\"_blank\" class=\"button is-text is-small\">","</a>",[_c('b-icon',{attrs:{"size":"is-small","icon":"link"}})],1):_vm._e()],2),_vm._ssrNode(" "),(_vm.updating)?_c('b-field',{attrs:{"label":"Add some tags","label-position":"on-border"}},[_c('field-data',{attrs:{"module":"hash_tag","multiple":"","icon":"label"},model:{value:(_vm.ui.hash_tags),callback:function ($$v) {_vm.$set(_vm.ui, "hash_tags", $$v)},expression:"ui.hash_tags"}})],1):_c('div',{staticClass:"tags",staticStyle:{"justify-content":"center"}},_vm._l((_vm.ui.terms),function(t){return _c('n-link',{key:t.id,staticClass:"tag is-medium",attrs:{"to":("/" + (t['term']['slug']))}},[_c('b-icon',{attrs:{"size":"is-small","icon":"label"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(t['term']['title']))])],1)}),1),_vm._ssrNode(" "+((_vm.currentUser && _vm.currentUser.username === 'lam')?("<div class=\"buttons\" style=\"justify-content: center\">"+((_vm.updating)?("<div class=\"button\">Save</div>"):"<!---->")+" <div class=\"button is-text\">"+_vm._ssrEscape(_vm._s(_vm.updating ? 'Cancel' : 'Update')+"\n                    ")+"</div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"buttons\" style=\"justify-content: center;\">","</div>",[(_vm.ui.previous)?_c('n-link',{staticClass:"button is-large",attrs:{"to":("/post/" + (_vm.ui.previous.pid))}},[_c('b-icon',{attrs:{"icon":"chevron-left"}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.ui.next)?_c('n-link',{staticClass:"button is-large",attrs:{"to":("/post/" + (_vm.ui.next.pid))}},[_c('b-icon',{attrs:{"icon":"chevron-right"}})],1):_vm._e()],2)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"hero is-light\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<h4 class=\"widget_title\">Response</h4> "),_c('comment-form',{attrs:{"ui":_vm.ui,"parent":_vm.commentParent},on:{"posted":function($event){return _vm.fetch()}}},[(_vm.commentParent)?_c('div',{staticClass:"control"},[_c('div',{staticClass:"button",on:{"click":function($event){_vm.commentParent = null}}},[_c('b-icon',{attrs:{"size":"is-small","icon":"window-close"}}),_vm._v(" "),_c('span',[_vm._v("Replying "+_vm._s(_vm.convertName(_vm.commentParent.user)))])],1)]):_vm._e()]),_vm._ssrNode(" "),_vm._l((_vm.response.results),function(comment){return _c('comment',{key:comment.id,attrs:{"ui":_vm.ui,"value":comment,"avatar-size":"is-24x24"},on:{"reply":_vm.reply}})})],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"hero\">","</section>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h4 class=\"widget_title\">RELATED UI</h4> "),(_vm.ui.related)?_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.ui.related),function(u,i){return _vm._ssrNode("<div class=\"column is-3\">","</div>",[_c('ui',{attrs:{"value":u}})],1)}),0):_vm._e()],2)])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=template&id=36a869bb&

// EXTERNAL MODULE: ./helper/schema.js
var schema = __webpack_require__(36);

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

  async fetch() {
    this.ui = await this.$axios.$post(`uihunt.com/posts/${this.$route.params.id}/`, {
      schema: schema["a" /* post_detail */]
    }, {
      params: {
        force: this.$route.query.force,
        uid: true
      }
    });
  },

  data() {
    return {
      ui: null,
      index: 0,
      commentParent: null,
      updating: false,
      response: {
        results: [],
        count: 0
      }
    };
  },

  head() {
    return {
      title: this.ui ? this.ui.title : 'UIHunt',
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.ui ? this.ui.description : null
      }]
    };
  },

  methods: {
    vote() {
      if (this.currentUser) {
        this.$api.ui.vote(this.ui.id, {}).then(res => {
          this.ui["vote_object"].is_voted = res;

          if (res) {
            this.ui["vote_object"]['vote_count']++;
          } else {
            this.ui["vote_object"]['vote_count']--;
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
    },

    "$route.params.id"() {
      this.$fetch();
    }

  }
});
// CONCATENATED MODULE: ./pages/post/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/post/_id.vue



function injectStyles (context) {
  
  
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