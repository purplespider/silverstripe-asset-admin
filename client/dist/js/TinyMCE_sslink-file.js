!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=168)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=i18n},150:function(e,t){e.exports=ShortcodeSerialiser},151:function(e,t){e.exports=TinyMCEActionRegistrar},168:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=i(r),a=n(151),l=i(a),s=n(0),u=i(s),c=n(5),d=i(c),f=n(3),p=n(6),g=i(p),_=n(150),m=i(_),k=n(20),h=i(k),x=n(7);l.default.addAction("sslink",{text:o.default._t("AssetAdmin.LINKLABEL_FILE","Link to a file"),onclick:function(e){return e.execCommand("sslinkfile")}});var b={init:function(e){e.addCommand("sslinkfile",function(){(0,g.default)("#"+e.id).entwine("ss").openLinkFileDialog()})}},v="insert-link__dialog-wrapper--file",A=(0,x.provideInjector)(h.default);g.default.entwine("ss",function(e){e(".insert-link__dialog-wrapper--internal .nav-link, .insert-media-react__dialog-wrapper .breadcrumb__container a").entwine({onclick:function(e){return e.preventDefault()}}),e("textarea.htmleditor").entwine({openLinkFileDialog:function(){var t=e("#"+v);t.length||(t=e('<div id="'+v+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+v).entwine({renderModal:function(e){var t=this,n=ss.store,i=ss.apolloClient,r=function(){return t.close()},o=function(){return t.handleInsert.apply(t,arguments)},a=this.getOriginalAttributes();d.default.render(u.default.createElement(f.ApolloProvider,{store:n,client:i},u.default.createElement(A,{show:e,type:"insert-link",onInsert:o,onHide:r,title:!1,bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:a})),this[0])},buildAttributes:function(e){return{href:m.default.serialise({name:"file_link",properties:{id:e.ID}},!0)+(e.Anchor&&e.Anchor.length?"#"+e.Anchor:""),target:e.TargetBlank?"_blank":"",title:e.Description}},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),i=(n.attr("href")||"").split("#");if(!i[0])return{};var r=m.default.match("file_link",!1,i[0]);return r?{ID:r.properties.id?parseInt(r.properties.id,10):0,Anchor:i[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkfile",function(e){return b.init(e)}),t.default=b},20:function(e,t){e.exports=InsertMediaModal},3:function(e,t){e.exports=ReactApollo},5:function(e,t){e.exports=ReactDom},6:function(e,t){e.exports=jQuery},7:function(e,t){e.exports=Injector}});