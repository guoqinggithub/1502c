;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.858905 0c-8.918077 0-26.7969 7.148416-50.094841 53.126688C408.738062 153.035317 320.24002 316.095336 320.24002 316.095336S158.434536 347.480689 54.063172 367.191706C2.858905 375.609071-13.867822 421.16436 12.118343 453.226486c73.435453 88.276591 203.366281 234.036598 203.366281 234.036598s-21.207101 160.056838-33.154763 269.313396c-3.88299 41.959932 18.262855 66.027676 49.156096 66.027676 10.070173 0 21.07909-2.580197 32.429369-7.909786 87.601967-43.398075 220.861072-109.764137 251.028919-124.737742 29.655805 15.142798 161.592133 82.566318 248.212684 126.091288 11.222269 5.371886 22.145845 7.952084 32.088007 7.952084 30.551879 0 52.441703-24.025445 48.558713-66.069974-11.776981-109.425751-32.770731-269.736379-32.770731-269.736379s128.43737-145.886902 201.019418-234.290388c25.687474-32.146722 9.174098-77.74431-41.432786-86.203974-103.176598-19.753315-263.147262-51.180966-263.147262-51.180966s-87.473956-163.271511-142.859905-263.307035c-19.585632-36.926432-34.56288-48.769962-44.03567-52.026932C519.68064 0.719071 517.76048 0 514.858905 0L514.858905 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M666.957282 510.400994 271.058824 169.199616 327.621572 120.470588 723.509308 461.66269 723.687605 461.50903 780.047059 510.108431 779.884122 510.24884 780.047059 510.389248 723.484371 559.118276 723.33059 558.985758 329.095349 898.731128 272.735895 850.153291 666.957282 510.400994Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M737.879194 166.441745C754.562934 150.299516 754.562934 124.177987 737.879194 108.087332 721.221238 91.97089 694.19719 91.97089 677.51345 108.087332L300.493466 474.689648C283.835511 490.80609 283.835511 516.927619 300.493466 533.018275L677.51345 899.594803C685.868211 907.665917 696.801606 911.688579 707.709216 911.688579 718.642608 911.688579 729.576003 907.665917 737.879194 899.569018 754.562934 883.452573 754.562934 857.356832 737.879194 841.24039L391.054976 503.853962 737.879194 166.441745Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.387781 73.876568c-240.576217 0-435.602006 195.025789-435.602006 435.602006S269.811564 945.079556 510.387781 945.079556c240.576217 0 435.602006-195.025789 435.602006-435.602006S750.962975 73.876568 510.387781 73.876568zM799.453363 349.968673 442.248891 707.213054c-5.28333 5.244444-12.170181 7.879458-19.0908 7.879458-6.922666 0-13.847379-2.635013-19.091824-7.916297L221.320153 524.467963c-10.56973-10.590196-10.56973-27.613918 0-38.20309 10.531867-10.512425 27.633361-10.512425 38.145785 0l163.710572 163.671687 338.151533-338.13209c10.492982-10.588149 27.612894-10.588149 38.125319 0C810.023092 322.353732 810.023092 339.418386 799.453363 349.968673z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512.16 896c-32.8 0-64.64-2.88-95.68-8.16L192 1024 192 797.44c-116.96-82.08-192-208-192-349.44 0-247.36 229.28-448 512.16-448 282.88 0 512.16 200.64 512.16 448C1024.32 695.36 795.04 896 512.16 896L512.16 896zM512.16 64C264.64 64 64 236 64 448c0 130.08 75.68 244.96 191.2 314.4l-2.08 148.48 150.72-90.56c34.72 7.36 70.88 11.68 108.16 11.68 247.52 0 448.16-172 448.16-384C960.32 236 759.68 64 512.16 64L512.16 64zM736.32 416l-448.16 0c-17.76 0-32-14.24-32-32 0-17.76 14.24-32 32-32l448.16 0c17.76 0 32 14.24 32 32C768.32 401.76 753.92 416 736.32 416L736.32 416zM352.16 544l320.16 0c17.76 0 32 14.24 32 32 0 17.76-14.24 32-32 32L352.16 608c-17.76 0-32-14.24-32-32C320.16 558.24 334.4 544 352.16 544L352.16 544zM352.16 544"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)