import $ from 'jquery';
import { animationend, assign, each, Event, getContextSelectors, isNumber, isString, offsetTop, promise, requestAnimationFrame, toNode, toJQuery, transitionend } from './index';

var docEl = document.documentElement;
export const win = $(window);
export const doc = $(document);
export const docElement = $(docEl);

export const isRtl = docEl.getAttribute('dir') === 'rtl';

export function isReady() {
    return document.readyState === 'complete' || document.readyState !== 'loading' && !docEl.doScroll;
}

export function ready(fn) {

    var handle = function () {
        off(document, 'DOMContentLoaded', handle);
        off(window, 'load', handle);
        fn();
    };

    if (isReady()) {
        fn();
    } else {
        on(document, 'DOMContentLoaded', handle);
        on(window, 'load', handle);
    }

}

export function on(el, type, listener, useCapture) {
    type.split(' ').forEach(type => toNode(el).addEventListener(type, listener, useCapture));
}

export function off(el, type, listener, useCapture) {
    type.split(' ').forEach(type => toNode(el).removeEventListener(type, listener, useCapture));
}

export function transition(element, props, duration = 400, transition = 'linear') {

    var p = promise((resolve, reject) => {

        element = $(element);

        for (var name in props) {
            element.css(name, element.css(name));
        }

        let timer = setTimeout(() => element.trigger(transitionend || 'transitionend'), duration);

        element
            .one(transitionend || 'transitionend', (e, cancel) => {

                e.promise = p;

                clearTimeout(timer);
                element.removeClass('uk-transition').css('transition', '');
                if (!cancel) {
                    resolve();
                } else {
                    reject();
                }
            })
            .addClass('uk-transition')
            .css('transition', `all ${duration}ms ${transition}`)
            .css(props);

    }).then(null, () => {});

    return p;
}

export const Transition = {

    start: transition,

    stop(element, cancel) {
        var e = Event(transitionend || 'transitionend');
        $(element).triggerHandler(e, [cancel]);
        return e.promise || promise.resolve();
    },

    cancel(element) {
        return this.stop(element, true);
    },

    inProgress(element) {
        return $(element).hasClass('uk-transition');
    }

};

export function animate(element, animation, duration = 200, origin, out) {

    var p = promise(resolve => {

        var cls = out ? 'uk-animation-leave' : 'uk-animation-enter';

        element = $(element);

        if (animation.lastIndexOf('uk-animation-', 0) === 0) {

            if (origin) {
                animation += ` uk-animation-${origin}`;
            }

            if (out) {
                animation += ' uk-animation-reverse';
            }

        }

        reset();

        element
            .one(animationend || 'animationend', e => {
                e.promise = p;
                p.then(reset);
                resolve();
            })
            .css('animation-duration', `${duration}ms`)
            .addClass(animation)
            .addClass(cls);


        if (!animationend) {
            requestAnimationFrame(() => Animation.cancel(element));
        }

        function reset() {
            element.css('animation-duration', '').removeClass(`${cls} ${animation}`);
        }

    });

    return p;
}

export const Animation = {

    in(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return $(element).hasClass('uk-animation-enter') || $(element).hasClass('uk-animation-leave');
    },

    cancel(element) {
        var e = Event(animationend || 'animationend');
        $(element).triggerHandler(e);
        return e.promise || promise.resolve();
    }

};

export function isJQuery(obj) {
    return obj instanceof $;
}

export function isWithin(element, selector) {
    element = $(element);
    return element.is(selector)
        ? true
        : isString(selector)
            ? element.parents(selector).length
            : toNode(selector).contains(element[0]);
}

export function attrFilter(element, attr, pattern, replacement) {
    element = $(element);
    return element.attr(attr, (i, value) => value ? value.replace(pattern, replacement) : value);
}

export function removeClass(element, cls) {
    return attrFilter(element, 'class', new RegExp(`(^|\\s)${cls}(?!\\S)`, 'g'), '');
}

export function createEvent(e, bubbles = true, cancelable = false, data = false) {
    if (isString(e)) {
        var event = document.createEvent('Event');
        event.initEvent(e, bubbles, cancelable);
        e = event;
    }

    if (data) {
        assign(e, data);
    }

    return e;
}

export function isInView(element, offsetTop = 0, offsetLeft = 0) {

    var rect = toNode(element).getBoundingClientRect();

    return rect.bottom >= -1 * offsetTop
        && rect.right >= -1 * offsetLeft
        && rect.top <= window.innerHeight + offsetTop
        && rect.left <= window.innerWidth + offsetLeft;
}

export function scrolledOver(element) {

    var {top, height} = toNode(element).getBoundingClientRect(),
        topOffset = offsetTop(element),
        vp = window.innerHeight,
        vh = vp + Math.min(0, topOffset - vp),
        diff = Math.max(0, vp - (docHeight() - (topOffset + height)));

    return clamp(((vh - top) / ((vh + (height - (diff < vp ? diff : 0)) ) / 100)) / 100);
}

export function clamp(number, min = 0, max = 1) {
    return Math.min(Math.max(number, min), max);
}

export function docHeight() {
    return Math.max(docEl.offsetHeight, docEl.scrollHeight);
}

export function getIndex(index, elements, current = 0) {

    elements = $(elements);

    var length = $(elements).length;

    index = (isNumber(index)
        ? index
        : index === 'next'
            ? current + 1
            : index === 'previous'
                ? current - 1
                : isString(index)
                    ? parseInt(index, 10)
                    : elements.index(index)
    ) % length;

    return index < 0 ? index + length : index;
}

var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
export function isVoidElement(element) {
    return voidElements[toNode(element).tagName.toLowerCase()];
}

export const Dimensions = {

    ratio(dimensions, prop, value) {

        var aProp = prop === 'width' ? 'height' : 'width';

        return {
            [aProp]: Math.round(value * dimensions[aProp] / dimensions[prop]),
            [prop]: value
        };
    },

    fit(dimensions, maxDimensions) {
        dimensions = assign({}, dimensions);

        each(dimensions, prop => dimensions = dimensions[prop] > maxDimensions[prop] ? this.ratio(dimensions, prop, maxDimensions[prop]) : dimensions);

        return dimensions;
    },

    cover(dimensions, maxDimensions) {
        dimensions = this.fit(dimensions, maxDimensions);

        each(dimensions, prop => dimensions = dimensions[prop] < maxDimensions[prop] ? this.ratio(dimensions, prop, maxDimensions[prop]) : dimensions);

        return dimensions;
    }

};

export function query(selector, context) {
    var selectors = getContextSelectors(selector);
    return selectors ? selectors.reduce((context, selector) => toJQuery(selector, context), context) : toJQuery(selector);
}
