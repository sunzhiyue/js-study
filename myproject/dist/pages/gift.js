'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      person: '../image/个人 (1).png',
      like: '../image/礼物 (1).png',
      finish: '../image/完成.png',
      camera: '../image/相机.png',
      ring: '../image/戒指.png',
      lipstick: '../image/口红.png',
      flower: '../image/花束.png',
      elder: '../image/送长辈.png',
      wallet: '../image/钱包.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBlcnNvbiIsImxpa2UiLCJmaW5pc2giLCJjYW1lcmEiLCJyaW5nIiwibGlwc3RpY2siLCJmbG93ZXIiLCJlbGRlciIsIndhbGxldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEscUJBRkg7QUFHTEMsWUFBTSxxQkFIRDtBQUlMQyxjQUFRLGlCQUpIO0FBS0xDLGNBQVEsaUJBTEg7QUFNTEMsWUFBTSxpQkFORDtBQU9MQyxnQkFBVSxpQkFQTDtBQVFMQyxjQUFRLGlCQVJIO0FBU0xDLGFBQU8sa0JBVEY7QUFVTEMsY0FBUTtBQVZILEs7Ozs7RUFKMEIsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImdpZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwZXJzb246ICcuLi9pbWFnZS/kuKrkurogKDEpLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL+ekvOeJqSAoMSkucG5nJyxcbiAgICBmaW5pc2g6ICcuLi9pbWFnZS/lrozmiJAucG5nJyxcbiAgICBjYW1lcmE6ICcuLi9pbWFnZS/nm7jmnLoucG5nJyxcbiAgICByaW5nOiAnLi4vaW1hZ2Uv5oiS5oyHLnBuZycsXG4gICAgbGlwc3RpY2s6ICcuLi9pbWFnZS/lj6PnuqIucG5nJyxcbiAgICBmbG93ZXI6ICcuLi9pbWFnZS/oirHmnZ8ucG5nJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL+mAgemVv+i+iC5wbmcnLFxuICAgIHdhbGxldDogJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gIH1cbn1cblxuIl19