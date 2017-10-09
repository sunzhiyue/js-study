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

var date = new Date();
var years = [];
var months = [];
var days = [];

for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1; _i2 <= 31; _i2++) {
  days.push(_i2);
}

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
      items1: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      objectMultiArray: [[{
        id: 0,
        name: '无脊柱动物'
      }, {
        id: 1,
        name: '脊柱动物'
      }], [{
        id: 0,
        name: '扁性动物'
      }, {
        id: 1,
        name: '线形动物'
      }, {
        id: 2,
        name: '环节动物'
      }, {
        id: 3,
        name: '软体动物'
      }, {
        id: 3,
        name: '节肢动物'
      }], [{
        id: 0,
        name: '猪肉绦虫'
      }, {
        id: 1,
        name: '吸血虫'
      }]],
      multiIndex: [0, 0, 0],
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'audioPlay',
    value: function audioPlay() {
      this.audioCtx.play();
    }
  }, {
    key: 'audioPause',
    value: function audioPause() {
      this.audioCtx.pause();
    }
  }, {
    key: 'audio14',
    value: function audio14() {
      this.audioCtx.seek(14);
    }
  }, {
    key: 'audioStart',
    value: function audioStart() {
      this.audioCtx.seek(0);
    }
  }, {
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
  }, {
    key: 'bindButtonTap',
    value: function bindButtonTap() {
      var that = this;
      _wepy2.default.chooseVideo({
        sourceType: ['camera'],
        maxDuration: 60,
        camera: 'front',
        success: function success(res) {
          that.setData({
            src: res.tempFilePath
          });
        }
      });
    }
  }, {
    key: 'ButtonTap',
    value: function ButtonTap() {
      var self = this;
      _wepy2.default.chooseImage({
        // count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          self.src = res.tempFilePaths[0];
          self.setData({
            src: res.tempFilePaths[0]
          });
        }
      });
    }
  }, {
    key: 'Button',
    value: function Button() {
      _wepy2.default.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }, {
    key: 'bindChange',
    value: function bindChange(e) {
      var val = e.detail.value;
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      });
    }
  }, {
    key: 'bindTimeChange',
    value: function bindTimeChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        time: e.detail.value
      });
    }
  }, {
    key: 'bindMultiPickerChange',
    value: function bindMultiPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        multiIndex: e.detail.value
      });
    }
  }, {
    key: 'bindMultiPickerColumnChange',
    value: function bindMultiPickerColumnChange(e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
              data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
              break;
            case 1:
              data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
              data.multiArray[2] = ['鲫鱼', '带鱼'];
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                  break;
                case 1:
                  data.multiArray[2] = ['蛔虫'];
                  break;
                case 2:
                  data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                  break;
                case 3:
                  data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;
                case 4:
                  data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;
              }
              break;
            case 1:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['鲫鱼', '带鱼'];
                  break;
                case 1:
                  data.multiArray[2] = ['青蛙', '娃娃鱼'];
                  break;
                case 2:
                  data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                  break;
              }
              break;
          }
      }
    }
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZGF0ZSIsIkRhdGUiLCJ5ZWFycyIsIm1vbnRocyIsImRheXMiLCJpIiwiZ2V0RnVsbFllYXIiLCJwdXNoIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImEiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJpdGVtczEiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJtdWx0aUFycmF5Iiwib2JqZWN0TXVsdGlBcnJheSIsImlkIiwibXVsdGlJbmRleCIsInBvc3RlciIsImF1dGhvciIsInNyYyIsImF1ZGlvQ3R4IiwicGxheSIsInBhdXNlIiwic2VlayIsInNlbGYiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInRoYXQiLCJjaG9vc2VWaWRlbyIsInNvdXJjZVR5cGUiLCJtYXhEdXJhdGlvbiIsImNhbWVyYSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwidGVtcEZpbGVQYXRoIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJzY2FuQ29kZSIsIm9ubHlGcm9tQ2FtZXJhIiwidmFsIiwidGltZSIsImNvbHVtbiIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxPQUFPLElBQUlDLElBQUosRUFBYjtBQUNBLElBQU1DLFFBQVEsRUFBZDtBQUNBLElBQU1DLFNBQVMsRUFBZjtBQUNBLElBQU1DLE9BQU8sRUFBYjs7QUFFQSxLQUFLLElBQUlDLElBQUksSUFBYixFQUFtQkEsS0FBS0wsS0FBS00sV0FBTCxFQUF4QixFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0NILFFBQU1LLElBQU4sQ0FBV0YsQ0FBWDtBQUNEOztBQUVELEtBQUssSUFBSUEsS0FBSSxDQUFiLEVBQWdCQSxNQUFLLEVBQXJCLEVBQXlCQSxJQUF6QixFQUE4QjtBQUM1QkYsU0FB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LElBQVAsRUFBYSxJQUFiLENBQXJCO0FBQ0E7QUFDRixxQkFBSyxDQUFMO0FBQ0VWLHVCQUFLVSxVQUFMLENBQWdCLENBQWhCLElBQXFCLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLENBQXJCO0FBQ0E7QUFmSjtBQWlCQTtBQUNGLGlCQUFLLENBQUw7QUFDRSxzQkFBUVYsS0FBS2EsVUFBTCxDQUFnQixDQUFoQixDQUFSO0FBQ0UscUJBQUssQ0FBTDtBQUNFYix1QkFBS1UsVUFBTCxDQUFnQixDQUFoQixJQUFxQixDQUFDLElBQUQsRUFBTyxJQUFQLENBQXJCO0FBQ0E7QUFDRixxQkFBSyxDQUFMO0FBQ0VWLHVCQUFLVSxVQUFMLENBQWdCLENBQWhCLElBQXFCLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBckI7QUFDQTtBQUNGLHFCQUFLLENBQUw7QUFDRVYsdUJBQUtVLFVBQUwsQ0FBZ0IsQ0FBaEIsSUFBcUIsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLElBQVosQ0FBckI7QUFDQTtBQVRKO0FBV0E7QUFoQ0o7QUFoQko7QUFtREQ7Ozs0QkFDT1ksQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLTCxRQUFMLEdBQWdCLGVBQUswQixrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBMU5nQyxlQUFLQyxJOztrQkFBbkIvQyxLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxuY29uc3QgeWVhcnMgPSBbXVxuY29uc3QgbW9udGhzID0gW11cbmNvbnN0IGRheXMgPSBbXVxuXG5mb3IgKGxldCBpID0gMTk5MDsgaSA8PSBkYXRlLmdldEZ1bGxZZWFyKCk7IGkrKykge1xuICB5ZWFycy5wdXNoKGkpXG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgbW9udGhzLnB1c2goaSlcbn1cblxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICBkYXlzLnB1c2goaSlcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoh6rmiJHku4vnu40nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhOiAxLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfSxcbiAgICAgIHsgbmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJyB9LFxuICAgICAgeyBuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nIH0sXG4gICAgICB7IG5hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvScgfVxuICAgIF0sXG4gICAgaXRlbXMxOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfSxcbiAgICAgIHsgbmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJyB9LFxuICAgICAgeyBuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nIH0sXG4gICAgICB7IG5hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvScgfVxuICAgIF0sXG4gICAgeWVhcnM6IHllYXJzLFxuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aHM6IG1vbnRocyxcbiAgICBtb250aDogMixcbiAgICBkYXlzOiBkYXlzLFxuICAgIGRheTogMixcbiAgICB2YWx1ZTogWzk5OTksIDEsIDFdLFxuICAgIG11bHRpQXJyYXk6IFtbJ+aXoOiEiuafseWKqOeJqScsICfohIrmn7HliqjniaknXSwgWyfmiYHmgKfliqjniaknLCAn57q/5b2i5Yqo54mpJywgJ+eOr+iKguWKqOeJqScsICfova/kvZPliqjniaknLCAn6IqC6IKi5Yqo54mpJ10sIFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddXSxcbiAgICBvYmplY3RNdWx0aUFycmF5OiBbXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAn5peg6ISK5p+x5Yqo54mpJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbmFtZTogJ+iEiuafseWKqOeJqSdcbiAgICAgICAgfVxuICAgICAgXSwgW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgbmFtZTogJ+aJgeaAp+WKqOeJqSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6ICfnur/lvaLliqjniaknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBuYW1lOiAn546v6IqC5Yqo54mpJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgbmFtZTogJ+i9r+S9k+WKqOeJqSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfoioLogqLliqjniaknXG4gICAgICAgIH1cbiAgICAgIF0sIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIG5hbWU6ICfnjKrogonnu6bomasnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn5ZC46KGA6JmrJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgXSxcbiAgICBtdWx0aUluZGV4OiBbMCwgMCwgMF0sXG4gICAgcG9zdGVyOiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJyxcbiAgICBuYW1lOiAn5q2k5pe25q2k5Yi7JyxcbiAgICBhdXRob3I6ICforrjlt40nLFxuICAgIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnXG4gIH1cbiAgYXVkaW9QbGF5KCkge1xuICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gIH1cbiAgYXVkaW9QYXVzZSgpIHtcbiAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgfVxuICBhdWRpbzE0KCkge1xuICAgIHRoaXMuYXVkaW9DdHguc2VlaygxNClcbiAgfVxuICBhdWRpb1N0YXJ0KCkge1xuICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICB9XG4gIG9uTG9hKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuYSsrXG4gIH1cbiAgZm9ybVN1Ym1pdChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgfVxuICBmb3JtUmVzZXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXG4gIH1cbiAgYmluZEJ1dHRvblRhcCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB3ZXB5LmNob29zZVZpZGVvKHtcbiAgICAgIHNvdXJjZVR5cGU6IFsnY2FtZXJhJ10sXG4gICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICBjYW1lcmE6ICdmcm9udCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgQnV0dG9uVGFwKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgLy8gY291bnQ6IDEsIC8vIOm7mOiupDlcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgc2VsZi5zcmMgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIEJ1dHRvbigpIHtcbiAgICB3ZXB5LnNjYW5Db2RlKHtcbiAgICAgIG9ubHlGcm9tQ2FtZXJhOiB0cnVlLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBiaW5kQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB5ZWFyOiB0aGlzLmRhdGEueWVhcnNbdmFsWzBdXSxcbiAgICAgIG1vbnRoOiB0aGlzLmRhdGEubW9udGhzW3ZhbFsxXV0sXG4gICAgICBkYXk6IHRoaXMuZGF0YS5kYXlzW3ZhbFsyXV1cbiAgICB9KVxuICB9XG4gIGJpbmRUaW1lQ2hhbmdlKGUpIHtcbiAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRpbWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfVxuICBiaW5kTXVsdGlQaWNrZXJDaGFuZ2UoZSkge1xuICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbXVsdGlJbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9XG4gIGJpbmRNdWx0aVBpY2tlckNvbHVtbkNoYW5nZShlKSB7XG4gICAgY29uc29sZS5sb2coJ+S/ruaUueeahOWIl+S4uicsIGUuZGV0YWlsLmNvbHVtbiwgJ++8jOWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbXVsdGlBcnJheTogdGhpcy5kYXRhLm11bHRpQXJyYXksXG4gICAgICBtdWx0aUluZGV4OiB0aGlzLmRhdGEubXVsdGlJbmRleFxuICAgIH1cbiAgICBkYXRhLm11bHRpSW5kZXhbZS5kZXRhaWwuY29sdW1uXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgc3dpdGNoIChlLmRldGFpbC5jb2x1bW4pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc3dpdGNoIChkYXRhLm11bHRpSW5kZXhbMF0pIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMV0gPSBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXVxuICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ11cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzFdID0gWyfpsbwnLCAn5Lik5qCW5Yqo54mpJywgJ+eIrOihjOWKqOeJqSddXG4gICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+myq+mxvCcsICfluKbpsbwnXVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLm11bHRpSW5kZXhbMV0gPSAwXG4gICAgICAgIGRhdGEubXVsdGlJbmRleFsyXSA9IDBcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgc3dpdGNoIChkYXRhLm11bHRpSW5kZXhbMF0pIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEubXVsdGlJbmRleFsxXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ11cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfom5TomasnXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+iaguiagScsICfomoLon6UnXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+ays+iajCcsICfonJfniZsnLCAn6Jue6J2TJ11cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfmmIbomasnLCAn55Sy5aOz5Yqo54mpJywgJ+ibm+W9ouWKqOeJqScsICflpJrotrPliqjniaknXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5tdWx0aUluZGV4WzFdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+myq+mxvCcsICfluKbpsbwnXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+mdkuibmScsICflqIPlqIPpsbwnXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMl0gPSBbJ+icpeictCcsICfpvp8nLCAn5aOB6JmOJ11cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbn1cbiJdfQ==