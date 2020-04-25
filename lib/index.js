"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sonar = void 0;

var _raspiPeripheral = require("raspi-peripheral");

var _raspiSonarAddon = _interopRequireDefault(require("../build/Release/raspiSonarAddon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Sonar class provides a read method to interact with an ultrasonic sensor
var Sonar = /*#__PURE__*/function () {
  function Sonar(opts) {
    _classCallCheck(this, Sonar);

    this.opts = Object.assign({}, {
      callWiringPiSetup: true
    }, opts);
    this.sensor = _raspiSonarAddon["default"].RaspiSonar(this.opts);
  } // accepts function as an argument which is called back with a duration


  _createClass(Sonar, [{
    key: "read",
    value: function read(callback) {
      this.sensor.read(callback);
    }
  }]);

  return Sonar;
}();

exports.Sonar = Sonar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNvbmFyIiwib3B0cyIsIk9iamVjdCIsImFzc2lnbiIsImNhbGxXaXJpbmdQaVNldHVwIiwic2Vuc29yIiwiYWRkb24iLCJSYXNwaVNvbmFyIiwiY2FsbGJhY2siLCJyZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtJQUNhQSxLO0FBQ1gsaUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0FBQzVCQyxNQUFBQSxpQkFBaUIsRUFBRTtBQURTLEtBQWxCLEVBRVRILElBRlMsQ0FBWjtBQUlBLFNBQUtJLE1BQUwsR0FBY0MsNEJBQU1DLFVBQU4sQ0FBaUIsS0FBS04sSUFBdEIsQ0FBZDtBQUNELEcsQ0FFRDs7Ozs7eUJBQ0tPLFEsRUFBVTtBQUNiLFdBQUtILE1BQUwsQ0FBWUksSUFBWixDQUFpQkQsUUFBakI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcmlwaGVyYWwgfSBmcm9tICdyYXNwaS1wZXJpcGhlcmFsJztcbmltcG9ydCBhZGRvbiBmcm9tICcuLi9idWlsZC9SZWxlYXNlL3Jhc3BpU29uYXJBZGRvbic7XG5cbi8vIFNvbmFyIGNsYXNzIHByb3ZpZGVzIGEgcmVhZCBtZXRob2QgdG8gaW50ZXJhY3Qgd2l0aCBhbiB1bHRyYXNvbmljIHNlbnNvclxuZXhwb3J0IGNsYXNzIFNvbmFyIHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGNhbGxXaXJpbmdQaVNldHVwOiB0cnVlXG4gICAgfSwgb3B0cyk7XG5cbiAgICB0aGlzLnNlbnNvciA9IGFkZG9uLlJhc3BpU29uYXIodGhpcy5vcHRzKTsgXG4gIH1cbiAgXG4gIC8vIGFjY2VwdHMgZnVuY3Rpb24gYXMgYW4gYXJndW1lbnQgd2hpY2ggaXMgY2FsbGVkIGJhY2sgd2l0aCBhIGR1cmF0aW9uXG4gIHJlYWQoY2FsbGJhY2spIHtcbiAgICB0aGlzLnNlbnNvci5yZWFkKGNhbGxiYWNrKTtcbiAgfVxufSJdLCJmaWxlIjoiaW5kZXguanMifQ==
