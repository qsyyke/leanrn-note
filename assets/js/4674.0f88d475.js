"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4674],{84674:(e,a,t)=>{let n,o,l,h,i,c,s,r,d,u,p,f;function b(){o.clearRect(0,0,l,h);for(let e in i)i[e].draw();requestAnimationFrame(b)}function g(){let e=this;function a(){e.pos.x=Math.random()*l,e.pos.y=h+100*Math.random(),e.alpha=.1+Math.random()*s,e.alpha_change=2e-4+Math.random()*r,e.scale=.2+Math.random()*d,e.scale_change=Math.random()*u,e.speed=.1+Math.random()*p}e.pos={},a(),this.draw=function(){e.alpha<=0&&a(),e.pos.y-=e.speed,e.alpha-=e.alpha_change,e.scale+=e.scale_change,o.beginPath(),o.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),o.fillStyle="rgba("+f+","+e.alpha+")",o.fill()}}function m(e,a,t,m,w,M,y){c=e,s=a,r=t,d=m,u=w,p=M,f=y,function(){n=document.getElementById("aurora-bubble-canvas"),function(){l=window.innerWidth,h=window.innerHeight;let e=document.getElementById("aurora-bubble-box");l=e.offsetWidth,h=e.offsetHeight,n.width=l,n.height=h}(),o=n.getContext("2d"),i=[];let e=l*c;for(let a=0;a<e;a++){let e=new g;i.push(e)}b()}()}t.r(a),t.d(a,{bubble:()=>m})}}]);