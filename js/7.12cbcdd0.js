(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4b1c":function(t,e,i){},b9e6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[t._m(0),i("div",{staticClass:"row justify-between text-center shadow-2",staticStyle:{position:"sticky",top:"0",left:"0","z-index":"1000"}},t._l(t.products,(function(e){return i("div",{key:e._id,staticClass:"col q-py-sm tags"},[i("a",{attrs:{href:"#"+e._id}},[t._v(t._s(e.tabLabels))])])})),0),t._l(t.products,(function(e){return i("div",{key:e._id,staticClass:"column row-md q-mb-md-lg all"},[i("div",{staticClass:"col left",attrs:{id:e._id}},[i("div",{staticClass:"imageBox"},[i("div",{staticClass:"mask"}),i("q-img",{attrs:{src:e.left[0].image,ratio:1}})],1),i("div",{staticClass:"column box text-white"},[i("div",{staticClass:"col-4 flex justify-center items-end"},[i("div",{staticClass:"text-h4"},[i("strong",[t._v(t._s(e.left[0].title))])])]),i("div",{staticClass:"col-8 q-px-lg q-pt-sm",staticStyle:{"letter-spacing":"1.5px","text-indent":"2rem","white-space":"pre-line"}},["null"!==e.left[0].intro_para1?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.left[0].intro_para1))]):t._e(),"null"!==e.left[0].intro_para2?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.left[0].intro_para2))]):t._e(),"null"!==e.left[0].intro_para3?i("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.left[0].intro_para3))]):t._e()])])]),i("div",{staticClass:"col right"},t._l(e.left[0].right.length,(function(s){return i("div",{key:s},[i("div",{staticClass:"column rightItem q-pt-xl"},[i("div",{staticClass:"col rightImage"},[i("q-img",{attrs:{src:e.left[0].right[s-1].image}})],1),i("div",{staticClass:"col column textBox"},[i("div",{staticClass:"col name"},[t._v(t._s(e.left[0].right[s-1].name))]),i("div",{staticClass:"col"},[t._v(t._s(e.left[0].right[s-1].content))]),i("div",{staticClass:"col"},[t._v(t._s(e.left[0].right[s-1].price)+" 元")]),t._m(1,!0)])])])})),0)])}))],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row q-mt-xl q-mb-lg q-pa-lg q-pb-sm text-center"},[i("div",{staticClass:"col text-h5"},[i("strong",[t._v("林邊伴手禮")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col flex justify-end"},[i("hr")])}],l={name:"Souvenir",data(){return{products:[],targetTab:"",leftArr:[],rightArr:[],rightArrLength:[],rightEach:[]}},computed:{},methods:{},async mounted(){try{const{data:t}=await this.$axios.get("/products");this.products=t.result.map((t=>{if(t.left.length>0&&t.left[0].image&&(t.left[0].image=`https://linbian317.herokuapp.com/files/${t.left[0].image}`,t.left[0].right.length>0))for(let e=0;e<t.left[0].right.length;e++)t.left[0].right[e].image&&(t.left[0].right[e].image=`https://linbian317.herokuapp.com/files/${t.left[0].right[e].image}`);return t}))}catch(t){console.log(t),this.$q.notify({color:"negative",textColor:"white",message:"取得商品失敗！",icon:"fas fa-exclamation-circle",position:"top",timeout:2500})}}},c=l,r=(i("cc0b"),i("2877")),n=i("068f"),o=i("eebe"),f=i.n(o),d=Object(r["a"])(c,s,a,!1,null,"029f405b",null);e["default"]=d.exports;f()(d,"components",{QImg:n["a"]})},cc0b:function(t,e,i){"use strict";i("4b1c")}}]);