import{aM as l,Y as T,aE as A,aF as q,r as c,j as e,W as t,aG as v,ad as h,R as i,ar as j,a0 as a,ab as I,aw as p,ay as S,aH as k,aI as g,I as N,au as V,aK as w,aL as _,aJ as O}from"./index-DJQ5e826.js";import{G as J,F as K,c as Q,a as R,d as U,b as Y,A as Z,e as X,f as ee}from"./AuthFooter-4lYTSPLT.js";import{I as te,C as re}from"./InputAdornment-D-ucf3Qq.js";const se=r=>new RegExp(/[0-9]/).test(r),ne=r=>new RegExp(/[a-z]/).test(r)&&new RegExp(/[A-Z]/).test(r),ie=r=>new RegExp(/[!#@$%^&*)(+=._-]/).test(r),ae=r=>r<2?{label:"Poor",color:l.errorMain}:r<3?{label:"Weak",color:l.warningDark}:r<4?{label:"Normal",color:l.orangeMain}:r<5?{label:"Good",color:l.successMain}:r<6?{label:"Strong",color:l.successDark}:{label:"Poor",color:l.errorMain},oe=r=>{let s=0;return r.length>5&&(s+=1),r.length>7&&(s+=1),se(r)&&(s+=1),ie(r)&&(s+=1),ne(r)&&(s+=1),s},le=({...r})=>{const s=T(),f=A(s.breakpoints.down("md")),E=q(n=>n.customization),[m,F]=c.useState(!1),[M,P]=c.useState(!0),[W,z]=c.useState(0),[o,D]=c.useState(),B=async()=>{console.error("Register")},G=()=>{F(!m)},L=n=>{n.preventDefault()},b=n=>{const d=oe(n);z(d),D(ae(d))};return c.useEffect(()=>{b("123456")},[]),e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(v,{children:e.jsxs(h,{variant:"outlined",fullWidth:!0,onClick:B,size:"large",sx:{color:"grey.700",backgroundColor:s.palette.grey[50],borderColor:s.palette.grey[100]},children:[e.jsx(i,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:J,alt:"google",width:16,height:16,style:{marginRight:f?8:16}})}),"Sign up with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(i,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(h,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${s.palette.grey[100]} !important`,color:`${s.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${E.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(i,{sx:{mb:2},children:e.jsx(a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),e.jsx(K,{initialValues:{email:"",password:"",submit:null},validationSchema:Q().shape({email:R().email("Must be a valid email").max(255).required("Email is required"),password:R().max(255).required("Password is required")}),children:({errors:n,handleBlur:d,handleChange:y,handleSubmit:$,isSubmitting:H,touched:u,values:C})=>e.jsxs("form",{noValidate:!0,onSubmit:$,...r,children:[e.jsxs(t,{container:!0,spacing:f?0:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(I,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(I,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})})]}),e.jsxs(p,{fullWidth:!0,error:!!(u.email&&n.email),sx:{...s.typography.customInput},children:[e.jsx(S,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),e.jsx(k,{id:"outlined-adornment-email-register",type:"email",value:C.email,name:"email",onBlur:d,onChange:y,inputProps:{}}),u.email&&n.email&&e.jsx(g,{error:!0,id:"standard-weight-helper-text--register",children:n.email})]}),e.jsxs(p,{fullWidth:!0,error:!!(u.password&&n.password),sx:{...s.typography.customInput},children:[e.jsx(S,{htmlFor:"outlined-adornment-password-register",children:"Password"}),e.jsx(k,{id:"outlined-adornment-password-register",type:m?"text":"password",value:C.password,name:"password",label:"Password",onBlur:d,onChange:x=>{y(x),b(x.target.value)},endAdornment:e.jsx(te,{position:"end",children:e.jsx(N,{"aria-label":"toggle password visibility",onClick:G,onMouseDown:L,edge:"end",size:"large",children:m?e.jsx(U,{}):e.jsx(Y,{})})}),inputProps:{}}),u.password&&n.password&&e.jsx(g,{error:!0,id:"standard-weight-helper-text-password-register",children:n.password})]}),W!==0&&e.jsx(p,{fullWidth:!0,children:e.jsx(i,{sx:{mb:2},children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(t,{item:!0,children:e.jsx(i,{style:{backgroundColor:o==null?void 0:o.color},sx:{width:85,height:8,borderRadius:"7px"}})}),e.jsx(t,{item:!0,children:e.jsx(a,{variant:"subtitle1",fontSize:"0.75rem",children:o==null?void 0:o.label})})]})})}),e.jsx(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(t,{item:!0,children:e.jsx(V,{control:e.jsx(re,{checked:M,onChange:x=>P(x.target.checked),name:"checked",color:"primary"}),label:e.jsxs(a,{variant:"subtitle1",children:["Agree with  ",e.jsx(a,{variant:"subtitle1",component:w,to:"#",children:"Terms & Condition."})]})})})}),n.submit&&e.jsx(i,{sx:{mt:3},children:e.jsx(g,{error:!0,children:n.submit})}),e.jsx(i,{sx:{mt:2},children:e.jsx(v,{children:e.jsx(h,{disableElevation:!0,disabled:H,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})})]})},xe=()=>{const r=A(s=>s.breakpoints.down("md"));return e.jsx(Z,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(X,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(w,{to:"#","aria-label":"theme logo",children:e.jsx(_,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(O,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(a,{color:"secondary.main",gutterBottom:!0,variant:r?"h3":"h2",children:"Sign up"}),e.jsx(a,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(le,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(j,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(a,{component:w,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(ee,{})})]})})};export{xe as default};
