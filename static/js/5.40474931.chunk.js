(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[5],{92:function(e,r,t){e.exports={Order:"Order_Order__2tCvw"}},96:function(e,r,t){"use strict";t.r(r);var n=t(8),a=t(9),i=t(12),o=t(10),s=t(13),c=t(0),p=t.n(c),u=t(17),d=t(11),l=t(92),m=t.n(l),h=function(e){var r=[];for(var t in e.ingredients)r.push({name:t,amount:e.ingredients[t]});var n=r.map((function(e){return p.a.createElement("span",{style:{textTransform:"capitalize",display:"inline",border:"1px solid #ccc",padding:"5px",margin:"0 8px"},key:e.name},e.name,"(",e.amount,") ","   ")}));return p.a.createElement("div",{className:m.a.Order},p.a.createElement("p",null,"Ingredients : ",n),p.a.createElement("p",null,"Price ",p.a.createElement("strong",null,"Rs. ",e.price.toFixed(2))))},f=t(39),g=t(38),b=t(18),O=t(22),v=function(e){function r(){return Object(n.a)(this,r),Object(i.a)(this,Object(o.a)(r).apply(this,arguments))}return Object(s.a)(r,e),Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.token&&this.props.fetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){if(!this.props.token)return p.a.createElement(u.a,{to:"/"});var e=p.a.createElement("div",{style:{marginTop:"100px"}},p.a.createElement(g.a,null));return this.props.loading||(e=this.props.orders.length?p.a.createElement("div",{style:{marginTop:"100px"}},this.props.orders.map((function(e){return p.a.createElement(h,{key:e.id,price:e.price,ingredients:e.ingredients})}))):p.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px"}},"You have no orders!")),e}}]),r}(c.Component);r.default=Object(d.b)((function(e){return{loading:e.order.loading,orders:e.order.orders,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{fetchOrders:function(r,t){return e(Object(O.c)(r,t))}}}))(Object(f.a)(v,b.a))}}]);
//# sourceMappingURL=5.40474931.chunk.js.map