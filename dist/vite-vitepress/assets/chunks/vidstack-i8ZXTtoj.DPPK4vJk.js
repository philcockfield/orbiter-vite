var a=Object.defineProperty;var o=(i,e,t)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>o(i,typeof e!="symbol"?e+"":e,t);import{H as p,s as d,a as u}from"./theme.BQqXCBzZ.js";import"./framework.YPpNXepj.js";class y extends p{constructor(t,s){super(t,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");d(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};
