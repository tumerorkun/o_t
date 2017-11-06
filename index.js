var o = {
    crt :function(tt){
        el = new this.cd;
        el.t = document.createElement(tt);
        return el;
    },
    jcrt :function(tt){
        el = new this.cd;
        el.t = document.createElement(tt);
        return el.t;
    },
    sel:function(tt){
        el = new this.cd;
        el.t = document.querySelector(tt);
        return el;
    },
    cd:function(){
        this.e = null;
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
        this.end = function(){
        return this.t;
        };
        this.put = function(pt){
        pt.appendChild(this.t);
        return this;
        };
    }
};

exports.default = o;