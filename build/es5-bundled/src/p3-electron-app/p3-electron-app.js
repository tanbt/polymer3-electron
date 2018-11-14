define(["../../node_modules/@polymer/polymer/polymer-element.js"], function (_polymerElement) {
  "use strict";

  function _templateObject_25f7e1b0e85011e8ad70e9e20b18b668() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <h2>Hello [[prop1]]!</h2>\n    "]);

    _templateObject_25f7e1b0e85011e8ad70e9e20b18b668 = function _templateObject_25f7e1b0e85011e8ad70e9e20b18b668() {
      return data;
    };

    return data;
  }

  /**
   * @customElement
   * @polymer
   */
  var P3ElectronApp =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(P3ElectronApp, _PolymerElement);

    function P3ElectronApp() {
      babelHelpers.classCallCheck(this, P3ElectronApp);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(P3ElectronApp).apply(this, arguments));
    }

    babelHelpers.createClass(P3ElectronApp, null, [{
      key: "template",
      get: function get() {
        return (0, _polymerElement.html)(_templateObject_25f7e1b0e85011e8ad70e9e20b18b668());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          prop1: {
            type: String,
            value: 'p3-electron-app'
          }
        };
      }
    }]);
    return P3ElectronApp;
  }(_polymerElement.PolymerElement);

  window.customElements.define('p3-electron-app', P3ElectronApp);
});