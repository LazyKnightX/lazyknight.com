// redirect to https, see: https://gist.github.com/konklone/9968713

/*global window */
/*jslint browser: true */

(function (root) {
  "use strict";
  var h = root ? root.location.hostname : "",
  p = root ? root.location.protocol : "";
  if ("http:" === p && !(/^(localhost|127.0.0.1)/).test(h)) {
    root.location.protocol = "https:";
  }
}("undefined" !== typeof window ? window : this));
