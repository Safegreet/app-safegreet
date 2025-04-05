import{r as a,b as v,c as N,u as C,d as E,s as j,e as P,f as L,j as e,D as k,F as r,I as w,C as S,B as A}from"./index-BjsY-W5t.js";import{u as I}from"./useCompanyGet-CFuXODvR.js";import{l as T,L as F,v as _}from"./react-simple-captcha-CZvyqn5K.js";const z=()=>{const[y,x]=a.useState(null),n=async s=>(await N.post("/user/login",s,{headers:{"Content-Type":"application/json"}})).data,{companyData:o,companyError:t,isCompanyLoading:i,isCompanyError:l,isCompanySuccess:c}=I({token:y}),{mutate:h,data:d,error:m,isLoading:u,isError:g,isSuccess:f}=v(n,{onSuccess:s=>{var b;const p=(b=s==null?void 0:s.data)==null?void 0:b.jwt_token;x(p)}});return{mutate:h,data:d,error:m||t,isLoading:u||i,isError:g||l,isSuccess:f&&c,companyData:o}},V=({onLoginSuccess:y})=>{const{mutate:x,data:n,error:o,isLoading:t,isError:i,isSuccess:l,companyData:c}=z(),h=a.useRef(null),d=C(),m=E(),[u,g]=a.useState(""),f=s=>{_(u)?(s.identifier==="police"&&(s.identifier="admin"),s.identifier==="owner"&&(s.identifier="emp"),x(s)):j.error("CAPTCHA validation failed! Please try again.")};return a.useEffect(()=>{l&&(j.success("Login Success!"),m(P(n.data.jwt_token)),m(L(c.data)),d("/"))},[l,n,c]),a.useEffect(()=>{i&&j.error(o.message)},[i,o]),a.useEffect(()=>{T(4,"#000","#fff","numbers")},[]),e.jsx(k,{children:e.jsx("main",{className:"relative h-full flex flex-col justify-center bg-indigo-500 overflow-hidden px-4",children:e.jsxs("div",{className:"w-100 max-w-6xl mx-auto px-0 md:px-6 my-2 mb-12 md:py-24",children:[e.jsx("h1",{className:"text-4xl text-white pacifico-regular w-100 text-center my-5",children:"SafeGreet!"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-indigo-500 mb-1",children:"Login"}),e.jsx("p",{className:"text-[15px] text-slate-500",children:"Please login using your email/phone and password."})]}),e.jsxs(r,{onFinish:f,ref:h,layout:"vertical",initialValues:{remember:!0},children:[e.jsx(r.Item,{name:"identifier",label:"Email / Phone",rules:[{required:!0,message:"Please enter your email or phone number!"},{pattern:/(police)|(owner)|(admin)|(emp)|(guard)|^([6-9]\d{9}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,message:"Please enter a valid email / phone!"}],children:e.jsx(w,{placeholder:"Enter your email or phone",className:"w-80 px-4 border rounded-md"})}),e.jsx(r.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please enter your password!"},{min:6,message:"Password must be at least 6 characters!"}],children:e.jsx(w.Password,{placeholder:"Enter your password",className:"w-80 px-4 border rounded-md"})}),e.jsx(r.Item,{className:"flex items-center justify-center",children:e.jsxs("div",{className:"captcha-wrapper w-80",children:[e.jsx(F,{}),e.jsx(w,{placeholder:"Enter the CAPTCHA",className:"px-4 border rounded-md ",value:u,pattern:"[a-zA-Z0-9]{4}",onInput:s=>{s.target.value=s.target.value.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()},onChange:s=>g(s.target.value)})]})}),e.jsx(r.Item,{name:"terms",valuePropName:"checked",rules:[{validator:(s,p)=>p?Promise.resolve():Promise.reject(new Error("You must accept the terms and conditions"))}],children:e.jsxs(S,{children:["I agree to the"," ",e.jsx("a",{href:"/terms",target:"_blank",className:"text-indigo-500",children:"Terms"})," ","and"," ",e.jsx("a",{href:"/policy",target:"_blank",className:"text-indigo-500",children:"Privacy Policy"})]})}),e.jsx(A,{htmlType:"submit",className:"w-80 mt-1 bg-indigo-500 text-white px-2 rounded-lg",disabled:t,loading:t,children:t?"Logging in...":"Login"}),e.jsx("div",{className:"text-center w-full text-slate-500 mt-1 text-[12px] ",children:e.jsx("span",{className:"cursor-pointer text-indigo-500",onClick:()=>d("/reset-password"),children:"Forgot password? Click here to reset"})})]})]})})]})})})};export{V as default};
