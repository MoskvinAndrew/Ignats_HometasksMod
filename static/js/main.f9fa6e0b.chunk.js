(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,n,t){e.exports={dropbtn:"N_dropbtn__1hqvr",dropdown:"N_dropdown__2zCRT",dropdown_content:"N_dropdown_content__3okKJ",accordion:"N_accordion__3zhSK",active:"N_active__9PbHw"}},22:function(e,n,t){e.exports={homeTaskcontainer:"H_homeTaskcontainer__28euw",buttonsContainer:"H_buttonsContainer__1nlQK",namesContainer:"H_namesContainer__3ixPl",title:"H_title__2JotN"}},23:function(e,n,t){e.exports={buttonsBlock:"Junior_buttonsBlock___3oYH",selectComponent:"Junior_selectComponent__20cjE",radioComponent:"Junior_radioComponent__Gs1aH",hometaskSeven:"Junior_hometaskSeven__1vk3K",Sevenand8TaskContainer:"Junior_Sevenand8TaskContainer__2SB-M",wrrapp:"Junior_wrrapp__tdE8D"}},31:function(e,n,t){e.exports={box1:"B_box1__2MNwT",box11:"B_box11__WFYei",btn:"B_btn__2SJSa",btnone:"B_btnone__1Qoon"}},44:function(e,n,t){e.exports={inputContainer:"ThirdHometask_inputContainer__3LUfn",Wrapp:"ThirdHometask_Wrapp__3vzIF",message:"ThirdHometask_message__14_iI",input:"ThirdHometask_input__2nIC_",addButton:"ThirdHometask_addButton__OqySA",span:"ThirdHometask_span__3CZPz",counter:"ThirdHometask_counter__20cjX"}},45:function(e,n,t){e.exports={inputNya:"inputNew_inputNya__mo3NI",span:"inputNew_span__2EjjU",errorStyle:"inputNew_errorStyle__3Wrwr"}},46:function(e,n,t){e.exports={chekboxtwo:"C_chekboxtwo__2cilK",checkbox:"C_checkbox__uEHi8",checkbox__icon:"C_checkbox__icon__3QT33","icon--check":"C_icon--check__JFGAE","icon--check-empty":"C_icon--check-empty__1xhzU","chekbox-two":"C_chekbox-two__3b0ks"}},47:function(e,n,t){e.exports={timeContainer:"T_timeContainer__Z0g22",buttonsContainer:"T_buttonsContainer__2_b_9"}},59:function(e,n,t){e.exports={editableSpan:"ES_editableSpan__lcw_6"}},60:function(e,n,t){e.exports={timeCount:"pop_timeCount__jScsZ",popForm:"pop_popForm__3ExD4"}},61:function(e,n,t){e.exports={loader:"L_loader__3l9hc",spin:"L_spin__1bCgw"}},65:function(e,n,t){e.exports=t(81)},70:function(e,n,t){},71:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(70),t(29)),l=t(12),u=(t(71),t(117)),s=t(7),m=t(44),d=t.n(m),p=t(45),_=t.n(p);var v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:" "!==e.error?_.a.inputNya:_.a.inputNya+" "+_.a.errorStyle,value:e.nNew,onKeyPress:function(n){13===n.charCode&&(e.onKeyPressHandler&&e.onKeyPressHandler(n),e.onEnter&&e.onEnter())},onChange:e.onChangeHandler,onBlur:e.offEditMode,autoFocus:!0}))},E=t(31),b=t.n(E);var f=function(e){return r.a.createElement("div",{className:e.typeofButton?b.a.box1+" "+b.a.box11:b.a.box1},r.a.createElement("div",{className:b.a.btn+" "+b.a.btnone,onClick:e.onClick},r.a.createElement("span",null,e.name)))};var h=function(e){return r.a.createElement("div",{className:d.a.inputContainer},r.a.createElement(v,{autoFocus:!0,error:e.error,setnNew:e.setnNew,nNew:e.nNew,onChangeHandler:e.onChangeHandler,onKeyPressHandler:e.onKeyPressHandler}),r.a.createElement(f,{name:"ADD",typeofButton:e.typeofButton,onClick:e.onClick}),r.a.createElement("div",{className:d.a.counter},r.a.createElement("p",null,"\u041e\u0431\u044c\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435:"),r.a.createElement("span",{className:d.a.span},e.newArr.length)))},C=t(46),N=t.n(C);var g=function(e){return r.a.createElement("div",{className:N.a.chekboxtwo},r.a.createElement("label",{className:N.a.checkbox},r.a.createElement("input",{type:"checkbox",checked:!0}),r.a.createElement("span",{className:N.a.checkbox__icon})))};var k=function(e){return r.a.createElement("div",null,r.a.createElement(h,{nNew:e.nNew,newArr:e.newArr,onKeyPressHandler:e.onKeyPressHandler,onChangeHandler:e.onChangeHandler,typeofButton:!1,setnNew:e.setnNew,error:e.error,NewElemInNewArr:e.NewElemInNewArr,onClick:e.onClick}),r.a.createElement("div",{className:"wrapperForNew"},r.a.createElement(v,{autoFocus:!0,onKeyPressHandler:e.onKeyPressHandler,onEnter:e.onEnter,setnNew:e.setnNew}),r.a.createElement(f,{name:"\u041c\u043e\u044f \u043a\u043d\u043e\u043f\u043a\u0430",typeofButton:!0,onClick:function(){return console.log("sdf")}}),r.a.createElement(g,null)))};var w=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"JuniorPlus"))},O=t(15),y=t.n(O),j=t(21);var S=function(){return r.a.createElement("div",{className:y.a.dropdown},r.a.createElement("button",{className:y.a.dropbtn},"\u041c\u0415\u041d\u042e"),r.a.createElement("div",{className:y.a.dropdown_content},r.a.createElement("div",{className:y.a.accordion},r.a.createElement(j.b,{activeClassName:y.a.active,to:"/PreJunior"},"PreJunior")),r.a.createElement("div",{className:y.a.accordion},r.a.createElement(j.b,{activeClassName:y.a.active,to:"/JuniorContainer"},"Junior")),r.a.createElement("div",{className:y.a.accordion},r.a.createElement(j.b,{activeClassName:y.a.active,to:"/Junior+"},"Junior+"))))},x=t(20),T=t(59),H=t.n(T);var A=function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),o=t[0],c=t[1],i=function(){c(!1),e.settitle(e.title)};return o?r.a.createElement(v,{autoFocus:!0,onBlur:i,onKeyPressHandler:i,onChangeHandler:function(n){e.settitle(n.currentTarget.value)},offEditMode:i}):r.a.createElement("span",{className:H.a.editableSpan,onDoubleClick:function(){c(!0)}},e.title)},J=t(23),B=t.n(J);var P=function(e){var n=function(n){var t=n.currentTarget.id;e.onRadioChange(t)},t=e.value.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("label",null,t.item,r.a.createElement("input",{type:"radio",name:e.name,id:t.id,value:t.item,onChange:n})))}));return r.a.createElement("div",null,r.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430:"),t)},R=t(115);var K=function(e){var n=e.value.map((function(e){return r.a.createElement("option",{key:e.id,value:e.digit},e.item)}));return r.a.createElement(R.a,{value:e.parentValue,onChange:function(n){var t=n.currentTarget.value;e.onSelectChange(t)}},n)},I=t(22),D=t.n(I),F=t(30),L={testReducerArray:[{id:Object(u.a)(),name:"Andrey",age:28},{id:Object(u.a)(),name:"Inat",age:29},{id:Object(u.a)(),name:"Dima",age:30},{id:Object(u.a)(),name:"Aleksandr",age:17},{id:Object(u.a)(),name:"Arsenii",age:22},{id:Object(u.a)(),name:"Kolya",age:12},{id:Object(u.a)(),name:"Kolya",age:12}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SORT_UP":return Object(F.a)({},e,{testReducerArray:Object(i.a)(e.testReducerArray.sort((function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})))});case"SORT_DOWN":return Object(F.a)({},e,{testReducerArray:Object(i.a)(e.testReducerArray.sort((function(e,n){return e.name<n.name?1:e.name>n.name?-1:0})))});case"CHECK":return Object(F.a)({},e,{testReducerArray:Object(i.a)(e.testReducerArray.filter((function(e){return e.age>n.payload})))});default:return e}},z=function(){var e=Object(x.d)((function(e){return e.hwReducer.testReducerArray})),n=Object(x.c)(),t=e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,"Name: ",e.name,", age: ",e.age))}));return r.a.createElement("div",{className:D.a.homeTaskcontainer},r.a.createElement("h2",{className:D.a.title},"\u0412\u043e\u0441\u044c\u043c\u0430\u044f \u0434\u043e\u043c\u0430\u0448\u043a\u0430:"),r.a.createElement("div",{className:D.a.namesContainer}," ",t),r.a.createElement("div",{className:D.a.buttonsContainer},r.a.createElement(f,{name:"SORT UP",onClick:function(){n({type:"SORT_UP",payload:"up"})}}),r.a.createElement(f,{name:"SORT DOWN",onClick:function(){n({type:"SORT_DOWN",payload:"down"})}}),r.a.createElement(f,{name:"FILTER",onClick:function(){n({type:"CHECK",payload:18})}})))},M=t(47),U=t.n(M),G=t(113),V=t(116),Q=t(114),Z=t(60),q=t.n(Z),Y=Object(G.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(2),backgroundColor:"#d7d460",fontSize:"large",marginLeft:50}}}));function X(e){var n=Y(),t=r.a.useState(null),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(){c(null)},u=Boolean(o);return r.a.createElement("div",null,r.a.createElement(Q.a,{"aria-owns":u?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){c(e.currentTarget)},onMouseLeave:i},r.a.createElement("div",{className:q.a.timeCount}," ","\u0412\u0440\u0435\u043c\u044f \u0432 \u0421\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u0435: "+e.watch)),r.a.createElement(V.a,{id:"mouse-over-popover",className:n.popover,classes:{paper:n.paper},open:u,anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0},r.a.createElement(Q.a,null,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f "+e.dateValue)))}var $=function(){var e=Object(a.useState)((new Date).toLocaleTimeString()),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(),i=Object(l.a)(c,2),u=i[0],s=i[1],m=(new Date).toLocaleDateString();return r.a.createElement("div",{className:U.a.timeContainer},r.a.createElement("h2",{className:D.a.title},"\u0414\u0435\u0432\u044f\u0442\u0430\u044f \u0434\u043e\u043c\u0430\u0448\u043a\u0430:"),r.a.createElement(X,{watch:t,dateValue:m}),r.a.createElement("div",{className:U.a.buttonsContainer},r.a.createElement("div",{className:U.a.buttonPuskColor},r.a.createElement(f,{name:"\u041f\u0423\u0421\u041a",onClick:function(){clearInterval(u);var e=setInterval((function(){return(new Date).toLocaleString(),o((new Date).toLocaleTimeString())}),1e3);s(e)}})),r.a.createElement(f,{name:"\u0421\u0422\u041e\u041f",onClick:function(){return clearInterval(u)}})))},ee=t(61),ne=t.n(ee),te=function(){return r.a.createElement("div",{className:ne.a.loader},r.a.createElement("h3",null,"\u0414\u0435\u0441\u044f\u0442\u0430\u044f \u0434\u043e\u043c\u0430\u0448\u043a\u0430:"))};var ae=function(e){var n=[{id:Object(u.a)(),item:"\u0427\u0435\u0431\u0443\u0440\u0430\u0448\u043a\u0430",digit:"1"},{id:Object(u.a)(),item:"\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b \u0413\u0435\u043d\u0430",digit:"2"},{id:Object(u.a)(),item:"\u0428\u0430\u043f\u043e\u043a\u043b\u044f\u043a",digit:"3"},{id:Object(u.a)(),item:"\u041a\u0440\u044b\u0441\u0430 \u041b\u0430\u0440\u0438\u0441\u0430",digit:"4"}],t=[{id:Object(u.a)(),item:"\u0427\u0435\u0431\u0443\u0440\u0430\u0448\u043a\u0430",isChecked:!1},{id:Object(u.a)(),item:"\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b \u0413\u0435\u043d\u0430",isChecked:!1},{id:Object(u.a)(),item:"\u0428\u0430\u043f\u043e\u043a\u043b\u044f\u043a",isChecked:!1},{id:Object(u.a)(),item:"\u041a\u0440\u044b\u0441\u0430 \u041b\u0430\u0440\u0438\u0441\u0430",isChecked:!1}],o=Object(a.useState)("\u041a\u043b\u0438\u043a\u043d\u0438 \u043d\u0430 \u043c\u043d\u0435 2 \u0440\u0430\u0437\u0430"),c=Object(l.a)(o,2),i=c[0],s=c[1],m=Object(a.useState)("1"),d=Object(l.a)(m,2),p=d[0],_=d[1];return r.a.createElement("div",{className:B.a.wrrapp},1==e.loading?r.a.createElement(te,null):r.a.createElement("div",null,r.a.createElement(A,{title:i,settitle:s}),r.a.createElement("div",{className:B.a.buttonsBlock},r.a.createElement(f,{name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",typeofButton:!0,onClick:function(){!function(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}("test",{value:i})}}),r.a.createElement(f,{name:"\u0412\u043ec\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",typeofButton:!1,onClick:function(){!function(e,n){var t=localStorage.getItem(e);null!==t&&(n=JSON.parse(t))}("test",{value:"jhh"})}})),r.a.createElement("div",{className:B.a.Sevenand8TaskContainer},r.a.createElement("div",{className:B.a.hometaskSeven},r.a.createElement("h2",null,"\u0421\u0435\u0434\u044c\u043c\u0430\u044f \u0434\u043e\u043c\u0430\u0448\u043a\u0430:"),r.a.createElement("div",{className:B.a.selectComponent},r.a.createElement(K,{value:n,onSelectChange:function(e){var t=n.find((function(n){return n.item==e}));t&&_(t.digit)},parentValue:p})),r.a.createElement("div",{className:B.a.radioComponent},r.a.createElement(P,{value:t,name:"HomeTask",onRadioChange:function(e){var n=t.find((function(n){return n.id==e}));n&&(n.isChecked=!0,console.log(n))}}))),r.a.createElement(z,null)),r.a.createElement($,null),r.a.createElement("div",null,r.a.createElement(f,{name:"\u041f\u043e\u0434\u0443\u043c\u0430\u0442\u044c 3 \u0441\u0435\u043a\u0443\u043d\u0434\u044b",onClick:function(){e.setLoading(!0);setTimeout((function(){return e.setLoading(!1)}),2e3)}}))))},re={loading:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOADING":return Object(F.a)({},e,{loading:n.loading});default:return e}},ce=Object(x.b)((function(e){return{loading:e.loadingForm.loading}}),{setLoading:function(e){return{type:"SET_LOADING",loading:e}}})(ae);var ie=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),d=m[0],p=m[1],_=Object(a.useState)([]),v=Object(l.a)(_,2),E=v[0],b=v[1];function f(e){var n={id:Object(u.a)(),name:e};b([n].concat(Object(i.a)(E)))}function h(e){p(e.currentTarget.value),o("sdf")}var C=function(){alert("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u043d\u0430 \u044d\u043d\u0442\u0435\u0440!!")},N=function(){""!==d&&(f(d),p(""))};function g(){""!==d&&f(d),""!==d&&alert("Privet "+d),p("")}return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/PreJunior",render:function(){return r.a.createElement(k,{onKeyPressHandler:g,onEnter:C,onChangeHandler:h,error:t,nNew:d,setnNew:p,typeofButton:!1,newArr:E,NewElemInNewArr:f,onClick:N})}}),r.a.createElement(s.a,{exact:!0,path:"/JuniorContainer",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(s.a,{exact:!0,path:"/Junior+",render:function(){return r.a.createElement(w,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=t(34),ue=Object(le.b)({loadingForm:oe,hwReducer:W}),se=Object(le.c)(ue);window.store=se;var me=se;c.a.render(r.a.createElement(j.a,null,r.a.createElement(x.a,{store:me},r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.f9fa6e0b.chunk.js.map