(()=>{"use strict";const e=window.React,n=window.wp.components,t=window.wp.blockEditor;wp.blocks.registerBlockType("jjcpn/phone-link",{title:"Phone Number Link",icon:"phone",category:"common",supports:{spacing:{margin:!0,padding:!0,blockGap:!0},color:{gradients:!0,background:!1},typography:{fontSize:!0,lineHeight:!0},align:!0},edit:function(l){return(0,e.createElement)("div",null,(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:"Phone Number",initialOpen:!0},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)("div",null,(0,e.createElement)("p",null,'To input or change your business phone number, click on "settings" in the left-side menu of the main admin dashboard, then select "phone number".'))))),(0,e.createElement)("p",{style:{textAlign:"center"}},(0,e.createElement)("u",null,"Your Text Here (see side panel for instructions)")))},save:function(e){return null}}),wp.blocks.registerBlockType("jjcpn/phone-icon",{title:"Call Now Icon",icon:"phone",category:"common",supports:{spacing:{margin:!0,padding:!0,blockGap:!0},color:{gradients:!0,background:!1},typography:{fontSize:!0,lineHeight:!0},align:!0},edit:function(l){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:"Phone Number",initialOpen:!0},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)("div",null,(0,e.createElement)("p",null,'To input or change your business phone number, click on "settings" in the left-side menu of the main admin dashboard, then select "phone number".'),(0,e.createElement)("p",{style:{color:"red"}},"Note: this icon will only appear on small screens."))))),(0,e.createElement)("div",{style:{width:"60px",border:"solid black 5px",borderRadius:"15px",background:"#57f542"}},(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLjM4NCwxNy43NTJhMi4xMDgsMi4xMDgsMCwwLDEtLjUyMiwzLjM1OSw3LjU0Myw3LjU0MywwLDAsMS01LjQ3Ni42NDJDMTAuNSwyMC41MjMsMy40NzcsMTMuNSwyLjI0Nyw4LjYxNGE3LjU0Myw3LjU0MywwLDAsMSwuNjQyLTUuNDc2LDIuMTA4LDIuMTA4LDAsMCwxLDMuMzU5LS41MjJMOC4zMzMsNC43YTIuMDk0LDIuMDk0LDAsMCwxLC40NDUsMi4zMjhBMy44NzcsMy44NzcsMCwwLDEsOCw4LjJjLTIuMzg0LDIuMzg0LDUuNDE3LDEwLjE4NSw3LjgsNy44YTMuODc3LDMuODc3LDAsMCwxLDEuMTczLS43ODEsMi4wOTIsMi4wOTIsMCwwLDEsMi4zMjguNDQ1WiIvPjwvc3ZnPg==",alt:"a simple phone icon"})))},save:function(e){return null}})})();