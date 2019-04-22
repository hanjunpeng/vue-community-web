/*
 取窗口可视范围的高度 
*/
export const getClientHeight = function() {
  let Height: number = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    Height =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    Height =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return Math.round(Height);
};
/*
 取窗口可视范围的高度 
*/
export const getClientWidth = function() {
  let Width: number = 0;
  if (document.body.clientWidth && document.documentElement.clientWidth) {
    Width =
      document.body.clientWidth < document.documentElement.clientWidth
        ? document.body.clientWidth
        : document.documentElement.clientWidth;
  } else {
    Width =
      document.body.clientWidth > document.documentElement.clientWidth
        ? document.body.clientWidth
        : document.documentElement.clientWidth;
  }
  return Math.round(Width);
};
/*
    取窗口滚动条高度 
*/
export const getScrollTop = function() {
  let scrollTop: number = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return Math.round(scrollTop);
};
export const setScrollTop = function(height: number) {
  if (document.documentElement && document.documentElement.scrollTop) {
    document.documentElement.scrollTop = height;
  } else if (document.body) {
    document.body.scrollTop = height;
  }
};
/*
    取文档高度 
*/
export const getDocumentHeight = function() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
};
/**
 * @module
 * @description 获取url参数
 */
export const getUrlArgs = function() {
  var argStr = window.location.search
    ? window.location.search.substring(1)
    : "";
  var argObj: any = {},
    item = null,
    value = null,
    key = null,
    argArr = argStr.length > 0 ? argStr.split("&") : [];
  for (var i = 0, len = argArr.length; i < len; i++) {
    item = argArr[i].split("=");
    key = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    argObj[key] = value;
  }
  return argObj;
};
export const pageScroll = (function() {
  const fn = function(e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    e.preventDefault();
    e.stopPropagation();
  };
  let islock = false;

  return {
    lock(el: any) {
      if (islock) return;
      islock = true;
      (el || document).addEventListener("touchmove", fn);
    },
    unlock(el: any) {
      islock = false;
      (el || document).removeEventListener("touchmove", fn);
    }
  };
})();

export const isIOS = !!(
  (window.navigator && window.navigator.userAgent) ||
  ""
).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const hasClass = function(elem: { className: string }, cls: string) {
  cls = cls || "";
  if (cls.replace(/\s/g, "").length === 0 || !elem) return false;
  return new RegExp(" " + cls + " ").test(" " + elem.className + " ");
};
export const addClass = function(ele: { className: any }, cls: string) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === "" ? cls : ele.className + " " + cls;
  }
};

export const removeClass = function(ele: { className: any }, cls: string) {
  if (hasClass(ele, cls)) {
    let newClass = " " + ele.className.replace(/[\t\r\n]/g, "") + " ";
    while (newClass.indexOf(" " + cls + " ") >= 0) {
      newClass = newClass.replace(" " + cls + " ", " ");
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, "");
  }
};

/**
 * @module  cookie
 * @description cookie相关操作
 * 例子：
 *cookie.get("name");
 *cookie.set("name","minghuang",0.5, "/", "58.com")
 *cookie.unset("name","minghuang")
 */
export const cookie = {
  get: function(name: string) {
    var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
    }
    return cookieValue;
  },
  set: function(
    name: string,
    value: string,
    expires: number,
    path: string,
    domain: string,
    secure: string
  ) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    var date = new Date();
    // if (expires instanceof Date) {
    //     cookieText += "; expires=" + expires.toGMTString();
    // }
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    cookieText += "; expires=" + date.toUTCString();
    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      cookieText += "; secure=" + secure;
    }
    document.cookie = cookieText;
  }
};
