import{u as d,j as e,F as p}from"./index-7170da19.js";import{I as x}from"./eye-slash-fill-777ed64e.js";const i=()=>{const{isValidateRepPass:s,setIsValidateRepPass:t,repeatPassword:r,setRepeatPassword:l,password:n}=d(),o=a=>{l(a.target.value),n===a.target.value?t(!0):t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"تکرار رمز عبور",type:"password",showEyeIcon:!0,htmlFor:"InputRepPass",value:r,onInput:o,children:e.jsx(p,{})}),e.jsx("div",{className:"flex items-center justify-center h-8 sm:h-6 sm:text-sm 2xl:h-8 2xl:text-base",children:s===null?null:s?e.jsx("span",{className:"font-bold text-green-700",children:"تکرار رمز عبور صحیح میباشد !"}):e.jsx("span",{className:"font-bold text-red-700",children:"تکرار رمز مطابقت ندارد !"})})]})};export{i as default};