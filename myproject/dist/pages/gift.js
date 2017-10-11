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
      wallet: '../image/钱包.png',
      wife: '老婆/女票',
      sister: '姐妹/闺蜜',
      mother: '妈妈',
      red: 'red',
      solidred: 'red',
      gray: 'gray',
      solidgray: '#fff'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/戒指.png';
        self.lipstick = '../image/口红.png';
        self.flower = '../image/花束.png';
        self.elder = '../image/送长辈.png';
        self.wallet = '../image/钱包.png';
        self.wife = '老婆/女票';
        self.sister = '姐妹/闺蜜';
        self.mother = '妈妈';
        self.red = 'red';
        self.solidred = 'red';
        self.gray = 'gray';
        self.solidgray = '#fff';
      },
      he: function he() {
        var self = this;
        self.lipstick = '../image/手表.png';
        self.flower = '../image/眼镜.png';
        self.wife = '老公/男票';
        self.sister = '兄弟/基友';
        self.mother = '爸爸';
        self.red = 'gray';
        self.solidred = '#fff';
        self.gray = 'red';
        self.solidgray = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBlcnNvbiIsImxpa2UiLCJmaW5pc2giLCJjYW1lcmEiLCJyaW5nIiwibGlwc3RpY2siLCJmbG93ZXIiLCJlbGRlciIsIndhbGxldCIsIndpZmUiLCJzaXN0ZXIiLCJtb3RoZXIiLCJyZWQiLCJzb2xpZHJlZCIsImdyYXkiLCJzb2xpZGdyYXkiLCJtZXRob2RzIiwic2hlIiwic2VsZiIsImhlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxxQkFGSDtBQUdMQyxZQUFNLHFCQUhEO0FBSUxDLGNBQVEsaUJBSkg7QUFLTEMsY0FBUSxpQkFMSDtBQU1MQyxZQUFNLGlCQU5EO0FBT0xDLGdCQUFVLGlCQVBMO0FBUUxDLGNBQVEsaUJBUkg7QUFTTEMsYUFBTyxrQkFURjtBQVVMQyxjQUFRLGlCQVZIO0FBV0xDLFlBQU0sT0FYRDtBQVlMQyxjQUFRLE9BWkg7QUFhTEMsY0FBUSxJQWJIO0FBY0xDLFdBQUssS0FkQTtBQWVMQyxnQkFBVSxLQWZMO0FBZ0JMQyxZQUFNLE1BaEJEO0FBaUJMQyxpQkFBVztBQWpCTixLLFFBbUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLZixNQUFMLEdBQWMsaUJBQWQ7QUFDQWUsYUFBS2QsSUFBTCxHQUFZLGlCQUFaO0FBQ0FjLGFBQUtiLFFBQUwsR0FBZ0IsaUJBQWhCO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxpQkFBZDtBQUNBWSxhQUFLWCxLQUFMLEdBQWEsa0JBQWI7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLGlCQUFkO0FBQ0FVLGFBQUtULElBQUwsR0FBWSxPQUFaO0FBQ0FTLGFBQUtSLE1BQUwsR0FBYyxPQUFkO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxJQUFkO0FBQ0FPLGFBQUtOLEdBQUwsR0FBVyxLQUFYO0FBQ0FNLGFBQUtMLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQUssYUFBS0osSUFBTCxHQUFZLE1BQVo7QUFDQUksYUFBS0gsU0FBTCxHQUFpQixNQUFqQjtBQUNELE9BaEJPO0FBaUJSSSxRQWpCUSxnQkFpQkg7QUFDSCxZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2IsUUFBTCxHQUFnQixpQkFBaEI7QUFDQWEsYUFBS1osTUFBTCxHQUFjLGlCQUFkO0FBQ0FZLGFBQUtULElBQUwsR0FBWSxPQUFaO0FBQ0FTLGFBQUtSLE1BQUwsR0FBYyxPQUFkO0FBQ0FRLGFBQUtQLE1BQUwsR0FBYyxJQUFkO0FBQ0FPLGFBQUtOLEdBQUwsR0FBVyxNQUFYO0FBQ0FNLGFBQUtMLFFBQUwsR0FBZ0IsTUFBaEI7QUFDQUssYUFBS0osSUFBTCxHQUFZLEtBQVo7QUFDQUksYUFBS0gsU0FBTCxHQUFpQixLQUFqQjtBQUNEO0FBNUJPLEs7Ozs7RUF2QnVCLGVBQUtLLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoiZ2lmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpLznianor7QnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHBlcnNvbjogJy4uL2ltYWdlL+S4quS6uiAoMSkucG5nJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv56S854mpICgxKS5wbmcnLFxuICAgIGZpbmlzaDogJy4uL2ltYWdlL+WujOaIkC5wbmcnLFxuICAgIGNhbWVyYTogJy4uL2ltYWdlL+ebuOacui5wbmcnLFxuICAgIHJpbmc6ICcuLi9pbWFnZS/miJLmjIcucG5nJyxcbiAgICBsaXBzdGljazogJy4uL2ltYWdlL+WPo+e6oi5wbmcnLFxuICAgIGZsb3dlcjogJy4uL2ltYWdlL+iKseadny5wbmcnLFxuICAgIGVsZGVyOiAnLi4vaW1hZ2Uv6YCB6ZW/6L6ILnBuZycsXG4gICAgd2FsbGV0OiAnLi4vaW1hZ2Uv6ZKx5YyFLnBuZycsXG4gICAgd2lmZTogJ+iAgeWphi/lpbPnpagnLFxuICAgIHNpc3RlcjogJ+WnkOWmuS/pl7ronJwnLFxuICAgIG1vdGhlcjogJ+WmiOWmiCcsXG4gICAgcmVkOiAncmVkJyxcbiAgICBzb2xpZHJlZDogJ3JlZCcsXG4gICAgZ3JheTogJ2dyYXknLFxuICAgIHNvbGlkZ3JheTogJyNmZmYnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+ebuOacui5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5oiS5oyHLnBuZydcbiAgICAgIHNlbGYubGlwc3RpY2sgPSAnLi4vaW1hZ2Uv5Y+j57qiLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+iKseadny5wbmcnXG4gICAgICBzZWxmLmVsZGVyID0gJy4uL2ltYWdlL+mAgemVv+i+iC5wbmcnXG4gICAgICBzZWxmLndhbGxldCA9ICcuLi9pbWFnZS/pkrHljIUucG5nJ1xuICAgICAgc2VsZi53aWZlID0gJ+iAgeWphi/lpbPnpagnXG4gICAgICBzZWxmLnNpc3RlciA9ICflp5Dlprkv6Ze66JycJ1xuICAgICAgc2VsZi5tb3RoZXIgPSAn5aaI5aaIJ1xuICAgICAgc2VsZi5yZWQgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZHJlZCA9ICdyZWQnXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuc29saWRncmF5ID0gJyNmZmYnXG4gICAgfSxcbiAgICBoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5saXBzdGljayA9ICcuLi9pbWFnZS/miYvooagucG5nJ1xuICAgICAgc2VsZi5mbG93ZXIgPSAnLi4vaW1hZ2Uv55y86ZWcLnBuZydcbiAgICAgIHNlbGYud2lmZSA9ICfogIHlhawv55S356WoJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5YWE5byfL+WfuuWPiydcbiAgICAgIHNlbGYubW90aGVyID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYucmVkID0gJ2dyYXknXG4gICAgICBzZWxmLnNvbGlkcmVkID0gJyNmZmYnXG4gICAgICBzZWxmLmdyYXkgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZGdyYXkgPSAncmVkJ1xuICAgIH1cbiAgfVxufVxuXG4iXX0=