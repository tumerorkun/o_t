import {o} from './../../index.js'
window['o'] = o;
o.sel('body')
 .attr({ style:{ padding:'0px', margin:0 }, id: 'govde' })
 .apn([
    o.crt('div')
     .attr({'style':{'height':'200px','background':'#000'}})
     .apn([
            o.crt('div').attr({'style':'height:50px;background:blue'}).t,
            o.crt('div').attr({'style':'height:50px;background:yellow'}).t,
            o.crt('div').attr({'style':'height:50px;background:green'}).t
     ]).t,
    o.crt('div')
     .attr({'style':'height:50px;background:red'}).t
 ]);

o.elems.filter((e)=>{return e.t.style.background === 'red'})
       .forEach((e)=>e.on('click',dFunc(e.t.style.background)));



function dFunc(a) {
    return ()=>console.log(a);
}
