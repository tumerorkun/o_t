import { o } from "./../../index.js";
window["o"] = o;

function store(initial, startFn, type) {
    let store = initial;
    const subscribers = {};
    let sList = Object.values(subscribers);
    let subscriber_count = 0;
    let stopFn;

    const triggerAllSubscribers = () => sList.forEach(f => f(store));

    const unsubscribe = i => {
        delete subscribers[i];
        sList = Object.values(subscribers);
        if (stopFn && Object.keys(subscribers).length === 0) stopFn();
    };
    const update = function(updater) {
        store = updater(store);
        triggerAllSubscribers();
    };
    const set = function(newStoreValue) {
        update(() => newStoreValue);
        //  store = newStoreValue;
    };
    const subscribe = function(fn) {
        if (subscriber_count === 0 && startFn) {
            stopFn = startFn(set);
        }
        const i = subscriber_count++;
        (subscribers[i] = fn)(store);
        sList = Object.values(subscribers);
        return () => unsubscribe(i);
    };

    return {
        subscribe,
        update,
        set,
         ...(type !== "readable" ? { update } : {}),
         ...(type !== "readable" ? { set } : {})
    };
}
const writable = (initial, startFn) => store(initial, startFn, "writable");
// const readable = (initial, startFn) => store(initial, startFn, "readable");

const purse = writable({});
window["purse"] = purse;
const box = props => {
    const height =
        purse.box && purse.box.height ? purse.box.height : props.height;
    const backgroundColor =
        purse.box && purse.box.backgroundColor
            ? purse.box.backgroundColor
            : props.backgroundColor;
    const component = o.crt("div").attr({
        style: `height:${height};background:${backgroundColor}`
    });

    purse.subscribe(store => {
        const height =
            store.box && store.box.height ? store.box.height : props.height;
        const backgroundColor =
            store.box && store.box.backgroundColor
                ? store.box.backgroundColor
                : props.backgroundColor;
        component.attr({
            style: `height:${height};background:${backgroundColor}`
        });
    });

    return component.t;
};

o.sel("body")
    .attr({ style: { padding: "0px", margin: 0 }, id: "govde" })
    .apn([
        o
            .crt("div")
            .attr({ style: { height: "700px", background: "#000" } })
            .apn([
                box({ height: "50px", backgroundColor: "blue" }),
                box({ height: "50px", backgroundColor: "yellow" }),
                box({ height: "50px", backgroundColor: "green" })
            ]).t,
        o.crt("div").attr({ style: "height:50px;background:red" }).t
    ]);

o.elems //.filter((e)=>{return e.t.style.background === 'red'})
    .forEach(e => e.on("click", dFunc(e.t.style.background)));

function dFunc(a) {
    return e => {
        e.stopPropagation();
        console.log("a", a);
    };
}

function updatePurse() {
    let value = 0;
    let step = 5;
    let way = true;
    return setInterval(() => {
        if (way && value <= 700 / 3) {
            value += step;
        } else if (!way && value >= 0) {
            value -= step;
        } else {
            way = !way;
        }
        purse.update(store => ({ box: { height: `${value}px` } }));
    }, 10);
}

const IntervalNumber = updatePurse();

setTimeout(() => {
       clearInterval(IntervalNumber);
}, 30000)
