# o_t
simple dom creation and manipulation tool

## Functions
- crt: creates element and returns an object with element and chainable functions
- jcrt: creates element and returns that element
- sel: selects  an element with querySelector
- attr: adds attributes
- apn: append element
- on: adds a event listener
- off: removes event listener
- end: returns element
- put: puts created or selected element in the given element

## Usages
---
### crt: 
```
o.crt('div').t
```
### jcrt: 
```
o.jcrt('div').t
```
### sel:
```
o.sel('body')
o.sel('.class')
o.sel('#id')
```
### attr:
parameters in attr can be a string or object

```
o.crt('div').attr('id','divID').t

o.crt('div').attr('style','height:50px;background:blue').t
```

```
o.crt('div').attr({'style':'height:50px;background:blue'}).t

o.crt('div').attr({ style:{ padding:'0px', margin:0 }, id: 'divID' }).t
```
### apn:
it can be create a new element or append an existing one or just write a string with innerHTML
```
o.crt('div').apn(o.crt('span').end()).t

o.crt('div').apn(o.crt('span').apn('just simple text',1).end()).t

o.crt('div').apn([
    o.crt('div').attr({'style':'height:50px;background:blue'}).t,
    o.crt('div').attr({'style':'height:50px;background:yellow'}).t,
    o.crt('div').attr({'style':'height:50px;background:green'}).t
]).t
```
### on:
```
o.crt('div').on('click',FUNCTION)
o.crt('div').on('click',()=>{ /* do something */ })
```
### off:
```
o.crt('div').off('click',FUNCTION)
```
### end:
```
o.crt('div').end()
```
### put:
```
o.crt('div').put(document.body)
```
