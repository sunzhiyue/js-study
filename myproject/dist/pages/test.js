'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      navigationBarTitleText: '自我介绍'
    }, _this.data = {
      a: 1,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      items1: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoa',
    value: function onLoa() {
      var self = this;
      self.a++;
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImEiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJpdGVtczEiLCJzZWxmIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsU0FBRyxDQURFO0FBRUxDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQURLLEVBRUwsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsTUFBcEMsRUFGSyxFQUdMLEVBQUNGLE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBSEssRUFJTCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUpLLEVBS0wsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFMSyxFQU1MLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBTkssQ0FGRjtBQVVMRSxjQUFRLENBQ04sRUFBQ0gsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFETSxFQUVOLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLE1BQXBDLEVBRk0sRUFHTixFQUFDRixNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUhNLEVBSU4sRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFKTSxFQUtOLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBTE0sRUFNTixFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQU5NO0FBVkgsSzs7Ozs7NEJBbUJDO0FBQ04sVUFBSUcsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLENBQUw7QUFDRDs7OytCQUNVTyxDLEVBQUc7QUFDWkMsY0FBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDRixFQUFFRyxNQUFGLENBQVNQLEtBQS9DO0FBQ0Q7OztnQ0FDVztBQUNWSyxjQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7OztFQWhDZ0MsZUFBS0UsSTs7a0JBQW5CZixLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Ieq5oiR5LuL57uNJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYTogMSxcbiAgICBpdGVtczogW1xuICAgICAge25hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvSd9LFxuICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICB7bmFtZTogJ0JSQScsIHZhbHVlOiAn5be06KW/J30sXG4gICAgICB7bmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJ30sXG4gICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9J30sXG4gICAgICB7bmFtZTogJ1RVUicsIHZhbHVlOiAn5rOV5Zu9J31cbiAgICBdLFxuICAgIGl0ZW1zMTogW1xuICAgICAge25hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvSd9LFxuICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICB7bmFtZTogJ0JSQScsIHZhbHVlOiAn5be06KW/J30sXG4gICAgICB7bmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJ30sXG4gICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9J30sXG4gICAgICB7bmFtZTogJ1RVUicsIHZhbHVlOiAn5rOV5Zu9J31cbiAgICBdXG4gIH1cbiAgb25Mb2EoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5hKytcbiAgfVxuICBmb3JtU3VibWl0KGUpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICB9XG4gIGZvcm1SZXNldCgpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgfVxufVxuIl19