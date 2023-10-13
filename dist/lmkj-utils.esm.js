/**
 * 判断xx相关工具函数
 */
/**
 * 判断是否为数组
 * @param input 任意值对象
 * @returns boolean
 */
function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
/**
 * 判断是否为空
 * @param input 任意值对象
 * @returns boolean
 */
function isEmpty(input) {
    return typeof input === 'undefined' || input === null || input === '';
}
/**
 * 判断是否为数字
 * @param input 任意值对象
 * @returns boolean
 */
function isNumber(input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
}

/**
 * @description 判断是否是偶数
 * @returns boolean
 */
const isEven = (n) => n % 2 === 0;

/**
 * @description setTimeout封装
 * @param timeout 延迟的时间
 * @returns promist
 */
const sleep = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const noop = () => {
    // do nothing
};

/**
 * @description 在页面添加 script 标签加载 js
 * @param url 资源链接
 * @param onload onload 会调
 */
const loadJs = (params) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { url = '', onload = noop } = params;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
        onload();
    };
    script.src = url;
    const node = document.getElementsByTagName('script')[0];
    (_a = node === null || node === void 0 ? void 0 : node.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(script, node);
});

export { isArray, isEmpty, isEven, isNumber, loadJs, sleep };
