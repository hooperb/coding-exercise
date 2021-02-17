(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{72:function(e,a,t){},73:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(9),s=t.n(c),r=(t(72),t(54)),l=t(41),o=t(55),d=(t(73),t(126)),h=t(131),u=t(127),j=t(125),b=t(130),p=t(27),m=t(28),f=t(29),O=t(34),x=t(32),v=t(132),D=t(128),y=t(124),C=function(e,a){try{return a.forEach((function(a){e=e.replaceAll(a,'"'+a+'"')})),e=e.replaceAll("'",'"'),JSON.parse(e)}catch(t){return!1}},N=t(26),g=t.n(N);var S=t(120),w=t(123),B=t(116),P=t(119),R=t(121),F=t(122),k=t(57),G=t(5),E=function(e){Object(O.a)(t,e);var a=Object(x.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).tableColumns=e.columns,n.tableRows=e.rows,n}return Object(m.a)(t,[{key:"createRow",value:function(e){return this.tableColumns.map((function(a){return Object(G.jsx)(B.a,{children:e[a.field]})}))}},{key:"render",value:function(){var e=this;return Object(G.jsx)("div",{className:"table-container",children:Object(G.jsx)(P.a,{component:k.a,children:Object(G.jsxs)(S.a,{className:"table","aria-label":"simple table",children:[Object(G.jsx)(R.a,{children:Object(G.jsx)(F.a,{children:this.tableColumns.map((function(e){return Object(G.jsx)(B.a,{children:e.headerName})}))})}),Object(G.jsx)(w.a,{children:this.tableRows.map((function(a){return Object(G.jsx)(F.a,{children:e.createRow(a)})}))})]})})})}}]),t}(i.a.Component),I=function(e){Object(O.a)(t,e);var a=Object(x.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).processedData=[],n.displayData=!1,n.columns=[{field:"SysBP",headerName:"SysBP",width:70},{field:"DiaBP",headerName:"DiaBP",width:70},{field:"atDate",headerName:"Date",width:70},{field:"classification",headerName:"Classification",width:70}],n.state={value:""},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.inputData=C(e.target.value,["SysBP","DiaBP","atDate"]),function(e){var a=!1;try{e.forEach((function(e){a=!!(g.a.isNumber(e.SysBP)&&g.a.isNumber(e.DiaBP)&&g.a.isDate(new Date(e.atDate)))}))}catch(t){}return a}(this.inputData)&&(this.processedData=function(e){try{return e.forEach((function(e){e.classification=function(e,a){switch(!0){case e>=180&&a>=120:return"Stage 3";case 180>e>=160||110>a>=100:return"Stage 2";case 160>e>=140||100>a>=90:return"Stage 1";default:return"No Hypertension"}}(e.SysBP,e.DiaBP)})),e}catch(a){return!1}}(this.inputData),this.displayData=!0),this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(G.jsxs)("div",{className:"content-container",children:[Object(G.jsxs)("div",{className:"input",children:[Object(G.jsx)("form",{children:Object(G.jsx)(v.a,{variant:"outlined",className:"input-container",children:Object(G.jsx)(D.a,{label:"Input Data",id:"inputArray",type:"text",onChange:this.handleChange,variant:"outlined",multiline:!0,rows:4})})}),!1===this.inputData?"Whoops! There's an issue with the data you input. Check it's in the same form as the sample data below":"",Object(G.jsxs)(y.a,{className:"data-info",variant:"outlined",children:[Object(G.jsx)(j.a,{className:"data-example",variant:"h6",component:"h1",children:"Input data needs to be in the form:"}),Object(G.jsxs)(j.a,{className:"data-example",color:"textSecondary",children:[Object(G.jsx)("span",{children:"["}),Object(G.jsxs)("span",{children:[String.fromCharCode("123"),"SysBP: 120, DiaBP: 90, atDate: '2020/04/05' ",String.fromCharCode("125"),","]}),Object(G.jsxs)("span",{children:[String.fromCharCode("123"),"SysBP: 120, DiaBP: 90, atDate: '2020/08/01' ",String.fromCharCode("125")," "]}),Object(G.jsx)("span",{children:"]"})]})]})]}),!1!==this.displayData?Object(G.jsx)("div",{className:"results-container",children:Object(G.jsx)(E,{columns:this.columns,rows:this.processedData})}):""]})}}]),t}(i.a.Component);function M(e,a){return e.atDate<a.atDate?-1:e.atDate>a.atDate?1:0}var A=function(e){Object(O.a)(t,e);var a=Object(x.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).processedData=[],n.displayData=!1,n.columns=[{field:"eGFR",headerName:"eGFR",width:70},{field:"atDate",headerName:"Date",width:70},{field:"classification",headerName:"Classification",width:70},{field:"dropflag",headerName:"Drop Detected",width:70}],n.state={value:""},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.inputData=C(e.target.value,["eGFR","atDate"]),function(e){var a=!1;try{e.forEach((function(e){a=!(!g.a.isNumber(e.eGFR)&&!e.eGFR.is_float()||!g.a.isDate(new Date(e.atDate)))}))}catch(t){console.log("failed validate")}return a}(this.inputData)&&(this.processedData=function(e){try{e.sort(M);var a=0;return e.forEach((function(e){var t;a-e.eGFR>.2*a?e.dropflag="20% Drop":e.dropflag="",e.classification=(t=e.eGFR)>=90?"Normal":89>=t&&t>=60?"Mildly Decreased":59>=t&&t>=45?"Mild to Moderate":44>=t&&t>=30?"Moderate to Severe":29>=t&&t>=15?"Severeley Decreased":"Kidney Failure",a=e.eGFR})),e}catch(t){return!1}}(this.inputData),this.displayData=!0),this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(G.jsxs)("div",{className:"content-container",children:[Object(G.jsxs)("div",{className:"input",children:[Object(G.jsx)("form",{children:Object(G.jsx)(v.a,{variant:"outlined",className:"input-container",children:Object(G.jsx)(D.a,{label:"Input Data",id:"inputArray",type:"text",onChange:this.handleChange,variant:"outlined",multiline:!0,rows:4})})}),!1===this.inputData?"Whoops! There's an issue with the data you input. Check it's in the same form as the sample data below":"",Object(G.jsxs)(y.a,{className:"data-info",children:[Object(G.jsx)(j.a,{className:"data-example",variant:"h6",component:"h1",children:"Input data needs to be in the form:"}),Object(G.jsxs)(j.a,{className:"data-example",color:"textSecondary",children:[Object(G.jsx)("span",{children:"["}),Object(G.jsxs)("span",{children:[String.fromCharCode("123"),"eGFR: 65, atDate: '2020/04/05' ",String.fromCharCode("125"),","]}),Object(G.jsxs)("span",{children:[String.fromCharCode("123"),"eGFR: 71, atDate: '2020/08/01' ",String.fromCharCode("125")," "]}),Object(G.jsx)("span",{children:"]"})]})]})]}),!1!==this.displayData?Object(G.jsx)("div",{className:"results-container",children:Object(G.jsx)(E,{columns:this.columns,rows:this.processedData})}):""]})}}]),t}(i.a.Component),J=function(){function e(e){var a=e.children,t=e.value,n=e.index,i=Object(o.a)(e,["children","value","index"]);return Object(G.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),{},{children:t===n&&Object(G.jsx)(b.a,{p:2,children:Object(G.jsx)(j.a,{component:"span",children:a})})}))}function a(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var t=i.a.useState(0),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("div",{className:"content",children:[Object(G.jsx)(d.a,{position:"static",children:Object(G.jsxs)(h.a,{value:c,onChange:function(e,a){s(a)},"aria-label":"simple tabs example",children:[Object(G.jsx)(u.a,Object(l.a)({label:"Hypertension Calculator"},a(0))),Object(G.jsx)(u.a,Object(l.a)({label:"Kidney Disease Calculator"},a(1)))]})}),Object(G.jsx)(e,{value:c,index:0,children:Object(G.jsx)(I,{})}),Object(G.jsx)(e,{value:c,index:1,children:Object(G.jsx)(A,{})})]})})};s.a.render(Object(G.jsx)(i.a.StrictMode,{children:Object(G.jsx)(J,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.fada3970.chunk.js.map