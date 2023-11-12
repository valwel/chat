(function(){"use strict";var e={881:function(e,s,t){var a=t(9963),n=t(6252);const o=(0,n._)("nav",null,null,-1);function r(e,s,t,a,r,u){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n.Wm)(i)],64)}const u={getItem:e=>JSON.parse(localStorage.getItem(e)),setItem:(e,s)=>localStorage.setItem(e,JSON.stringify(s))},i={key:"user",user:null,login(e){this.user={name:e},u.setItem(this.key,this.user)},logout(){this.user=null,u.setItem(this.key,this.user)},getUser(){return this.user},fetchUserFromLS(){this.user=u.getItem(this.key)}};var l={beforeMount(){i.fetchUserFromLS()}},c=t(3744);const d=(0,c.Z)(l,[["render",r]]);var m=d,p=t(2201),_=t.p+"img/login_logo.84a022c4.svg";const g=e=>((0,n.dD)("data-v-0f9c8986"),e=e(),(0,n.Cn)(),e),h={class:"container"},v={class:"login"},f=g((()=>(0,n._)("div",{class:"login__logo"},[(0,n._)("img",{src:_,alt:""})],-1))),w=g((()=>(0,n._)("h1",{class:"login__title"},"Авторизация",-1))),b=g((()=>(0,n._)("h2",{class:"login__subtitle"}," Введите пожалуйста свой ник для дальнейшей авторизации ",-1)));function M(e,s,t,o,r,u){const i=(0,n.up)("input-comp"),l=(0,n.up)("button-comp");return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",v,[f,w,b,(0,n._)("form",{onSubmit:s[1]||(s[1]=(0,a.iM)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[(0,n.Wm)(i,{class:"login__input",modelValue:r.name,"onUpdate:modelValue":s[0]||(s[0]=e=>r.name=e),placeholder:"Введите свой ник"},null,8,["modelValue"]),(0,n.Wm)(l,{type:"submit",class:"login__button"},{default:(0,n.w5)((()=>[(0,n.Uk)("войти")])),_:1})],32)])])}t(7658);const y=["value"];function k(e,s,t,a,o,r){return(0,n.wg)(),(0,n.iD)("input",{class:"input",type:"text",name:"",id:"",required:"",pattern:".{1,}",autofocus:"",value:t.modelValue,onInput:s[0]||(s[0]=s=>e.$emit("update:modelValue",s.target.value))},null,40,y)}var C={props:["modelValue"],emits:["update:modelValue"]};const I=(0,c.Z)(C,[["render",k],["__scopeId","data-v-cf809462"]]);var D=I;const O={class:"button"};function x(e,s){return(0,n.wg)(),(0,n.iD)("button",O,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}const W={},j=(0,c.Z)(W,[["render",x],["__scopeId","data-v-4945b9d8"]]);var S=j,V={components:{InputComp:D,ButtonComp:S},data(){return{name:""}},methods:{login(){i.login(this.name),this.$router.push("/about")}}};const Z=(0,c.Z)(V,[["render",M],["__scopeId","data-v-0f9c8986"]]);var U=Z;const $={class:"chat"};function q(e,s,t,a,o,r){const u=(0,n.up)("sidebar-comp"),i=(0,n.up)("chat-comp");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n.Wm)(u,{user:o.user},null,8,["user"]),(0,n.Wm)(i,{onAddMessage:r.addMessage,messages:o.messages,user:o.user},null,8,["onAddMessage","messages","user"])])}const z={key:"messages",messages:[],addMessage(e,s){this.messages.push({id:this.messages.length,name:e,text:s,timestamp:new Date,avatarURL:null}),u.setItem(this.key,this.messages)},loadMessages(){this.messages=u.getItem(this.key)||[]}};var A=t(3577),L=t.p+"img/exit.567be6ff.svg";const B=e=>((0,n.dD)("data-v-2721db02"),e=e(),(0,n.Cn)(),e),F={class:"chat__sidebar"},H={class:"chat__exit"},P=B((()=>(0,n._)("img",{src:L,alt:""},null,-1))),T=[P],J={class:"chat__users"},N={key:0,class:"chat__user"},Y=B((()=>(0,n._)("div",{class:"avatar-wrapper"},[(0,n._)("img",{src:"",alt:"",class:"chat__user-avatar"})],-1))),E={class:"chat__user-nickname"};function K(e,s,t,a,o,r){const u=(0,n.up)("modal-comp");return(0,n.wg)(),(0,n.iD)("div",F,[(0,n.Wm)(u,{show:o.showModal,onClose:s[0]||(s[0]=e=>o.showModal=!1)},null,8,["show"]),(0,n._)("div",H,[(0,n._)("button",{onClick:s[1]||(s[1]=e=>o.showModal=!0),class:"chat__exit-button"},T)]),(0,n._)("ul",J,[t.user?((0,n.wg)(),(0,n.iD)("li",N,[Y,(0,n._)("div",E,(0,A.zw)(t.user.name),1)])):(0,n.kq)("",!0)])])}const R=e=>((0,n.dD)("data-v-30a6eea0"),e=e(),(0,n.Cn)(),e),G={key:0,class:"modal"},Q={class:"modal__contant"},X=R((()=>(0,n._)("h2",null,"Вы действительно хотите выйти?",-1))),ee={class:"modal__wrapper"};function se(e,s,t,a,o,r){return t.show?((0,n.wg)(),(0,n.iD)("div",G,[(0,n._)("div",Q,[X,(0,n._)("div",ee,[(0,n._)("button",{onClick:s[0]||(s[0]=s=>e.$emit("close")),class:"modal__button"},"Остаться"),(0,n._)("button",{onClick:s[1]||(s[1]=(...e)=>r.logout&&r.logout(...e)),class:"modal__button"},"Разлогиниться")])])])):(0,n.kq)("",!0)}var te={data(){return{}},props:{show:{type:Boolean,required:!0}},methods:{logout(){this.$router.push("/")},close(){this.showModal=!1}}};const ae=(0,c.Z)(te,[["render",se],["__scopeId","data-v-30a6eea0"]]);var ne=ae,oe={components:{ModalComp:ne},data(){return{showModal:!1}},props:{user:Object}};const re=(0,c.Z)(oe,[["render",K],["__scopeId","data-v-2721db02"]]);var ue=re;const ie={class:"chat__header"},le={class:"chat__input"};function ce(e,s,t,o,r,u){const i=(0,n.up)("chat-header"),l=(0,n.up)("chat-window"),c=(0,n.up)("input-comp"),d=(0,n.up)("button-comp");return(0,n.wg)(),(0,n.iD)("div",ie,[(0,n.Wm)(i),(0,n.Wm)(l,{messages:t.messages,user:t.user},null,8,["messages","user"]),(0,n._)("div",le,[(0,n._)("form",{onSubmit:s[1]||(s[1]=(0,a.iM)(((...e)=>u.addMessage&&u.addMessage(...e)),["prevent"])),class:"chat__input-wrapper"},[(0,n.Wm)(c,{placeholder:"Введите сообщение...",modelValue:r.newMessage,"onUpdate:modelValue":s[0]||(s[0]=e=>r.newMessage=e)},null,8,["modelValue"]),(0,n.Wm)(d,{type:"submit",class:"button"},{default:(0,n.w5)((()=>[(0,n.Uk)("Отправить")])),_:1})],32)])])}const de=e=>((0,n.dD)("data-v-17cf282f"),e=e(),(0,n.Cn)(),e),me={class:"chat__header-container"},pe=de((()=>(0,n._)("div",{class:"chat__header-title"},"Чат",-1))),_e=de((()=>(0,n._)("div",{class:"chat__header-subtitle"},"1 участник",-1))),ge=[pe,_e];function he(e,s){return(0,n.wg)(),(0,n.iD)("div",me,ge)}const ve={},fe=(0,c.Z)(ve,[["render",he],["__scopeId","data-v-17cf282f"]]);var we=fe;const be={class:"chat__window"},Me={class:"messages-list"},ye={class:"messages-list__item-contant"},ke={class:"messages-list__item-message"},Ce={class:"messages-list__item-text"},Ie={class:"messages-list__item-time"};function De(e,s,t,a,o,r){return(0,n.wg)(),(0,n.iD)("div",be,[(0,n._)("ul",Me,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.messages,((e,s)=>((0,n.wg)(),(0,n.iD)("li",{key:e.id,class:(0,A.C_)(["messages-list__item",{"jc-r":e.name===t.user.name}])},[(0,n._)("div",ye,[0===s||t.messages[s-1].name!==e.name?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,A.C_)(["messages-list__item-nickname",{"jc-r":e.name===t.user.name}])},(0,A.zw)(e.name),3)):(0,n.kq)("",!0),(0,n._)("div",ke,[(0,n._)("span",Ce,(0,A.zw)(e.text),1),(0,n._)("span",Ie,(0,A.zw)(new Date(e.timestamp).toLocaleTimeString("ru").substr(0,5)),1)])])],2)))),128))])])}var Oe={props:{messages:Array,user:Object}};const xe=(0,c.Z)(Oe,[["render",De],["__scopeId","data-v-c5d5ceb8"]]);var We=xe,je={components:{InputComp:D,ButtonComp:S,ChatHeader:we,ChatWindow:We},data(){return{newMessage:null}},props:{messages:{type:Array,default:()=>[]},user:{type:Object,default:()=>({})}},methods:{addMessage(){this.$emit("addMessage",this.newMessage),this.newMessage=null}}};const Se=(0,c.Z)(je,[["render",ce],["__scopeId","data-v-086071e8"]]);var Ve=Se,Ze={components:{SidebarComp:ue,ChatComp:Ve},data(){return{messages:[],user:null}},methods:{addMessage(e){z.addMessage(this.user.name,e),this.loadMessages()},loadMessages(){z.loadMessages(),this.messages=[...z.messages]}},beforeMount(){i.getUser(),this.user=i.user},created(){this.loadMessages()}};const Ue=(0,c.Z)(Ze,[["render",q],["__scopeId","data-v-4a905e8d"]]);var $e=Ue;const qe=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:$e}],ze=(0,p.p7)({history:(0,p.PO)("/chat/"),routes:qe});var Ae=ze;(0,a.ri)(m).use(Ae).mount("#app")}},s={};function t(a){var n=s[a];if(void 0!==n)return n.exports;var o=s[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(s,a,n,o){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],o=e[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(u=!1,o<r&&(r=o));if(u){e.splice(c--,1);var l=n();void 0!==l&&(s=l)}}return s}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,n,o]}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/chat/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var n,o,r=a[0],u=a[1],i=a[2],l=0;if(r.some((function(s){return 0!==e[s]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(i)var c=i(t)}for(s&&s(a);l<r.length;l++)o=r[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=self["webpackChunkchat"]=self["webpackChunkchat"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(881)}));a=t.O(a)})();
//# sourceMappingURL=app.b8fcd987.js.map