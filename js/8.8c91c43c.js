(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"80c2":function(t,l,i){"use strict";i("ba94")},b9e6:function(t,l,i){"use strict";i.r(l);var e=function(){var t=this,l=t.$createElement,i=t._self._c||l;return i("div",{staticClass:"container-fluid"},[t._m(0),i("div",{staticClass:"row justify-between text-center shadow-2",staticStyle:{position:"sticky",top:"0",left:"0","z-index":"1000"}},t._l(t.products,(function(l){return i("div",{key:l._id,staticClass:"col q-py-sm tags"},[i("a",{attrs:{href:"#"+l._id}},[t._v(t._s(l.tabLabels))])])})),0),t._l(t.products,(function(l){return i("div",{key:l._id,staticClass:"column row-md q-mb-md-lg all"},[i("div",{staticClass:"col left",attrs:{id:l._id}},[i("div",{staticClass:"imageBox"},[i("div",{staticClass:"mask"}),i("q-img",{attrs:{src:t.leftImage(l),ratio:1}})],1),i("div",{staticClass:"column box text-white"},[i("div",{staticClass:"col-4 flex justify-center items-end"},[i("div",{staticClass:"text-h4"},[i("strong",[t._v(t._s(t.leftTitle(l)))])])]),i("div",{staticClass:"col-8 q-px-lg q-pt-sm",staticStyle:{"letter-spacing":"1.5px","text-indent":"2rem","white-space":"pre-line"}},["null"!==t.leftPara1(l)?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.leftPara1(l)))]):t._e(),"null"!==t.leftPara2(l)?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.leftPara2(l)))]):t._e(),"null"!==t.leftPara3(l)?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.leftPara3(l)))]):t._e()])])]),i("div",{staticClass:"col right"},t._l(t.leftRightLength(),(function(l){return i("div",{key:l},[i("div",{staticClass:"column rightItem q-pt-xl"},[i("div",{staticClass:"col rightImage"},[i("q-img",{attrs:{src:t.leftRightImage(l)}})],1),i("div",{staticClass:"col column textBox"},[i("div",{staticClass:"col name"},[t._v(t._s(t.leftRightName(l)))]),i("div",{staticClass:"col"},[t._v(t._s(t.leftRightContent(l)))]),i("div",{staticClass:"col"},[t._v(t._s(t.leftRightPrice(l))+" 元")]),t._m(1,!0)])])])})),0)])}))],2)},n=[function(){var t=this,l=t.$createElement,i=t._self._c||l;return i("div",{staticClass:"row q-mt-xl q-mb-lg q-pa-lg q-pb-sm text-center"},[i("div",{staticClass:"col text-h5"},[i("strong",[t._v("林邊伴手禮")])])])},function(){var t=this,l=t.$createElement,i=t._self._c||l;return i("div",{staticClass:"col flex justify-end"},[i("hr")])}],a={name:"Souvenir",data(){return{products:[],targetTab:"",leftArr:[],rightArr:[],rightArrLength:[],rightEach:[]}},computed:{},methods:{leftImage:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.image},leftTitle:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.title},leftPara1:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.intro_para1},leftPara2:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.intro_para2},leftPara3:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.intro_para3},leftRightLength:function(t){var l,i;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i?void 0:i.right.length},leftRightImage:function(t){var l,i,e,n;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i||null===(e=i.right)||void 0===e||null===(n=e[t-1])||void 0===n?void 0:n.image},leftRightName:function(t){var l,i,e,n;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i||null===(e=i.right)||void 0===e||null===(n=e[t-1])||void 0===n?void 0:n.name},leftRightContent:function(t){var l,i,e,n;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i||null===(e=i.right)||void 0===e||null===(n=e[t-1])||void 0===n?void 0:n.content},leftRightPrice:function(t){var l,i,e,n;return null===t||void 0===t||null===(l=t.left)||void 0===l||null===(i=l[0])||void 0===i||null===(e=i.right)||void 0===e||null===(n=e[t-1])||void 0===n?void 0:n.price}},async mounted(){try{const{data:t}=await this.$axios.get("/products");this.products=t.result.map((t=>{if(t.left.length>0&&t.left[0].image&&(t.left[0].image=`https://linbian317.herokuapp.com/files/${t.left[0].image}`,t.left[0].right.length>0))for(let l=0;l<t.left[0].right.length;l++)t.left[0].right[l].image&&(t.left[0].right[l].image=`https://linbian317.herokuapp.com/files/${t.left[0].right[l].image}`);return t}))}catch(t){console.log(t),this.$q.notify({color:"negative",textColor:"white",message:"取得商品失敗！",icon:"fas fa-exclamation-circle",position:"top",timeout:2500})}}},s=a,o=(i("80c2"),i("2877")),r=i("068f"),c=i("eebe"),u=i.n(c),d=Object(o["a"])(s,e,n,!1,null,"0ec29023",null);l["default"]=d.exports;u()(d,"components",{QImg:r["a"]})},ba94:function(t,l,i){}}]);