(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=(a(31),a(32),a(33),a(8)),o=a(9),i=a(11),u=a(10),m=a(16),d=a(12),h=(a(34),a(15)),b=a(46),p=a(47),E=a(48),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).start=e.start.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"start",value:function(){alert("Hola!")}},{key:"render",value:function(){return r.a.createElement(b.a,{className:"container"},r.a.createElement(p.a,{className:"header-home"},r.a.createElement("h1",null,"BATTLE OF POWERS"),r.a.createElement("h3",null,"The battle to save or destroy the world!")),r.a.createElement(E.a,null,r.a.createElement("div",{className:"text-content"},r.a.createElement("p",null,"En una imponente guerra \xe9pica, donde se enfrenta Greta Thunberg y Donald Trump con su poder pol\xedtico, teniendo 2 opciones : poder salvar a la Tierra o generar el comienzo de una extinci\xf3n masiva. \xbfExistir\xe1 realmente el cambio Clim\xe1tico? \xbfSe salvar\xe1 el planeta ?"))),r.a.createElement(p.a,{className:"home-content"},r.a.createElement(h.b,{to:"/GameBoard"},r.a.createElement("button",{className:"btn-start"},"START"))))}}]),t}(n.Component),f=a(13);a(40);var q=function(e){return r.a.createElement("button",{type:"button",className:"btn-square1",onClick:e.onClick},e.value)},O=(a(41),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(q,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board-me"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"border1-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"border1-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"border1-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))))}}]),t}(n.Component));a(42),a(43);var k=function(e){return r.a.createElement("button",{type:"button",className:"btn-square2",onClick:e.onClick},e.value)},S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(k,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board-enemy"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"border2-row"},this.renderSquare(9),this.renderSquare(10),this.renderSquare(11)),r.a.createElement("div",{className:"border2-row"},this.renderSquare(12),this.renderSquare(13),this.renderSquare(14)),r.a.createElement("div",{className:"border2-row"},this.renderSquare(15),this.renderSquare(16),this.renderSquare(17))))}}]),t}(n.Component),y=(a(44),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={playerOne:!0,stepNumber:0,steps:[{squares:Array(9).fill(null)}]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this.state.steps.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();a[e]=this.state.playerOne?"miss":"hit",this.setState({steps:t.concat({squares:a}),playerOne:!this.state.playerOne,stepNumber:t.length})}},{key:"render",value:function(){var e=this,t=this.state.steps[this.state.stepNumber];return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement("h1",null,"BATTLE OF POWERS"),r.a.createElement("h3",null,"The battle to save or destroy the world!"),r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-secondary"},"Home")),r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(O,{onClick:function(t){return e.handleClick(t)},squares:t.squares})),r.a.createElement(p.a,null,r.a.createElement(S,{onClick:function(t){return e.handleClick(t)},squares:t.squares})))))}}]),t}(n.Component));var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:v}),r.a.createElement(f.a,{path:"/GameBoard",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");l.a.render(r.a.createElement(N,null),j),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.de9ddf9e.chunk.js.map