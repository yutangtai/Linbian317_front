(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0dca":function(t,s,i){},cf7e:function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"login"}},[i("div",{staticClass:"container-fluid row justify-center items-center",staticStyle:{position:"relative"}},[i("div",{staticClass:"bg"}),i("q-form",{staticClass:"loginForm",attrs:{name:"loginForm"},on:{submit:t.onSubmit}},[i("div",{staticClass:"loginBox"},[i("div",{staticClass:"loginTitle"},[i("span",[t._v("登入")])]),i("div",{staticClass:"row q-mb-md q-mt-lg"},[i("div",{staticStyle:{"max-width":"250px"}},[i("q-input",{attrs:{label:"帳號",filled:"",dense:"",clearable:"","clear-icon":"close",color:"light-blue-10","bg-color":"white","input-style":{width:"250px"}},model:{value:t.form.account,callback:function(s){t.$set(t.form,"account",s)},expression:"form.account"}})],1)]),i("div",{staticClass:"row q-mb-md"},[i("div",{staticStyle:{"max-width":"250px"}},[i("q-input",{attrs:{label:"密碼",filled:"",type:t.isPwd?"password":"text",dense:"",color:"light-blue-10","bg-color":"white","input-style":{width:"250px"}},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility",color:"grey-5"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1)]),i("div",{staticClass:"row q-mb-lg",staticStyle:{width:"250px"}},[i("q-btn",{staticClass:"full-width",attrs:{label:"送出",type:"submit",color:"negative"}})],1),i("div",{staticClass:"row justify-between",staticStyle:{width:"250px"}},[i("div",{staticClass:"col row"},[t._v("\n            忘記密碼\n          ")]),i("div",{staticClass:"col row justify-end"},[i("router-link",{attrs:{to:"register"}},[t._v("\n              註冊帳號\n            ")])],1)])])])],1)])},e=[],a=i("6821"),n=i.n(a),c={name:"Login",data(){return{form:{account:"",password:""},newForm:{},isPwd:!0}},methods:{async onSubmit(){try{this.encryptPassword(this.form.password);const{data:t}=await this.$axios.post("/users/login",this.newForm);this.$q.notify({color:"positive",textColor:"white",message:"登入成功！",icon:"fas fa-check-circle",position:"top",timeout:2500}),console.log(this.$store),this.$store.commit("users/login",t),this.$router.push("/cart")}catch(t){console.log(t),this.$q.notify({color:"negative",textColor:"white",message:t.response.data.message,icon:"fas fa-exclamation-circle",position:"top",timeout:2500})}this.form.account="",this.form.password=""},encryptPassword(t){return this.newForm.account=this.form.account,this.newForm.password=n()(t),this.newForm}}},r=c,l=(i("dcb1"),i("2877")),d=i("0378"),u=i("27f9"),m=i("0016"),p=i("9c40"),w=i("eebe"),f=i.n(w),h=Object(l["a"])(r,o,e,!1,null,null,null);s["default"]=h.exports;f()(h,"components",{QForm:d["a"],QInput:u["a"],QIcon:m["a"],QBtn:p["a"]})},dcb1:function(t,s,i){"use strict";i("0dca")}}]);