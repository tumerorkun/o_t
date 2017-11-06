var o = {
    elems : [],
    crt :function(tt){
        var el = new this.Commands;
        el.t = document.createElement(tt);
        this.elems.push(el);
        return el;
    },
    jcrt :function(tt){
        var el = new this.Commands;
        el.t = document.createElement(tt);
        this.elems.push(el);
        return el.t;
    },
    sel:function(tt){
        var el = new this.Commands;
        el.t = document.querySelector(tt);
        return el;
    },
    Commands:function(){
        this.attr = function(a,b){
            this.t.setAttribute(a,b);
            return this;
        };
        this.apn = function(tt,i){
            if(typeof tt == 'object' && tt.length > 1){
                var dis = this;
                tt.forEach(function(a){
                    if(typeof a == 'string'){
                        a = document.createElement(a);
                    }
                    dis.t.appendChild(a);
                })
            }
            else if(i === undefined || (typeof tt != 'string' && i === 1)){
                if(typeof tt == 'string'){
                    tt = document.createElement(tt);
                }
                this.t.appendChild(tt);
            }
            else if(typeof tt == 'string' && i === 1){
                this.t.innerHTML = tt;
            }
            return this;
        };
        this.on = function(a,b){
            this.t.addEventListener(a,b);
            return this;
        };
        this.off = function(a,b){
            this.t.removeEventListener(a,b);
            return this;
        };
        this.end = function(){
            return this.t;
        };
        this.put = function(pt){
            pt.appendChild(this.t);
            return this;
        };
    }
};

exports.o = o;