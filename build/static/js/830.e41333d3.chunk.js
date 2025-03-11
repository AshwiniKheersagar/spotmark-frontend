"use strict";(self.webpackChunkmern=self.webpackChunkmern||[]).push([[830],{3830:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(5043),n=a(1688),r=a(2244),l=a(8347),i=a(7962),o=a(171),c=(a(4284),a(5789)),d=a(8863),u=a(9626),h=a(837),p=a(6886),v=a(579);const m=()=>{const e=(0,s.useContext)(p.c),{isLoading:t,error:a,sendRequest:m,clearError:f}=(0,o.x)(),[x,y]=(0,s.useState)(),j=(0,n.useParams)().placeId,b=(0,n.useHistory)(),[A,C,g]=(0,c.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);(0,s.useEffect)((()=>{(async()=>{try{const e=await m(`http://localhost:5000/api/places/${j}`);y(e.place),g({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()}),[m,j,g]);return t?(0,v.jsx)("div",{className:"center_spinner",children:(0,v.jsx)(h.A,{children:(0,v.jsx)(d.A,{})})}):x||a?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.A,{error:a,onClear:f}),t&&(0,v.jsx)("div",{className:"center_spinner",children:(0,v.jsx)(d.A,{})}),!t&&x&&(0,v.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{await m(`http://localhost:5000/api/places/${j}`,"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}),b.push("/"+e.userId+"/places")}catch(a){}},children:[(0,v.jsx)(r.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,i.B_)()],errorText:"Please enter a valid title.",onInput:C,initialValue:x.title,initialValid:!0}),(0,v.jsx)(r.A,{id:"description",element:"textarea",label:"Description",validators:[(0,i.Ik)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:C,initialValue:x.description,initialValid:!0}),(0,v.jsx)(l.A,{type:"submit",disabled:!A.isValid,children:"UPDATE PLACE"})]})]}):(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(h.A,{children:(0,v.jsx)("h2",{children:"Could not find place!"})})})}},8347:(e,t,a)=>{a.d(t,{A:()=>r});a(5043);var s=a(2582),n=a(579);const r=e=>e.href?(0,n.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,n.jsx)(s.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,n.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},2244:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(5043),n=a(7962),r=a(579);const l=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,n.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},i=e=>{const[t,a]=(0,s.useReducer)(l,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),{id:n,onInput:i}=e,{value:o,isValid:c}=t;(0,s.useEffect)((()=>{i(n,o,c)}),[n,o,c,i]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},h="input"===e.element?(0,r.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,value:t.value,onBlur:u}):(0,r.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:d,value:t.value,onBlur:u});return(0,r.jsxs)("div",{className:`form-control ${!t.isValid&&t.isTouched&&"form-control--invalid"}`,children:[(0,r.jsx)("label",{htmlFor:e.id,children:e.label}),h,!t.isValid&&t.isTouched&&(0,r.jsx)("p",{children:e.errorText})]})}},837:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(579);const n=e=>(0,s.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},9626:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var s=a(8630),n=a(8347),r=a(579);const l=e=>(0,r.jsx)(s.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(n.A,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},8630:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(5043),n=a(7950),r=a(8336),l=a(3006),i=a(579);const o=e=>{const t=(0,i.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,i.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,i.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return n.createPortal(t,document.getElementById("modal-hook"))},c=e=>{const t=(0,s.useRef)(null);return(0,i.jsxs)(i.Fragment,{children:[e.show&&(0,i.jsx)(l.A,{onClick:e.onCancel}),(0,i.jsx)(r.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",nodeRef:t,children:(0,i.jsx)(o,{...e,ref:t})})]})}},5789:(e,t,a)=>{a.d(t,{m:()=>r});var s=a(5043);const n=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const s in e.inputs)e.inputs.hasOwnProperty(s)&&e.inputs[s]&&(a=s===t.inputId?a&&t.isValid:a&&e.inputs[s].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},r=(e,t)=>{const[a,r]=(0,s.useReducer)(n,{inputs:e,isValid:t});return[a,(0,s.useCallback)(((e,t,a)=>{r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[r]),(0,s.useCallback)(((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})}),[r])]}},171:(e,t,a)=>{a.d(t,{x:()=>n});var s=a(5043);const n=()=>{const[e,t]=(0,s.useState)(!1),[a,n]=(0,s.useState)(null),r=(0,s.useRef)([]),l=(0,s.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0),n(null);const i=new AbortController;r.current.push(i);try{const t=await fetch(e,{method:a,body:s,headers:l,signal:i.signal}),n=await t.json();if(r.current=r.current.filter((e=>e!==i)),!t.ok)throw new Error(n.message||"Something went wrong!");return n}catch(o){if("AbortError"===o.name)return void console.log("Fetch request was aborted.");throw n(o.message),o}finally{t(!1)}}),[]),i=(0,s.useCallback)((()=>{n(null)}),[]);return(0,s.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:l,clearError:i}}},7962:(e,t,a)=>{a.d(t,{B_:()=>i,Ik:()=>o,i$:()=>c,tf:()=>d});const s="REQUIRE",n="MINLENGTH",r="MAXLENGTH",l="EMAIL",i=()=>({type:s}),o=e=>({type:n,val:e}),c=()=>({type:l}),d=(e,t)=>{let a=!0;for(const i of t)i.type===s&&(a=a&&e.trim().length>0),i.type===n&&(a=a&&e.trim().length>=i.val),i.type===r&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),i.type===l&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},4284:()=>{}}]);
//# sourceMappingURL=830.e41333d3.chunk.js.map