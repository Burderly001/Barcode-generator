var JsBarcode = require('jsbarcode');


const { DOMImplementation, XMLSerializer } = require('xmldom');
const svg64 = require('svg64');

Page({
  data: {
    barcode: "",
    xmltext: null
  },

  onLoad(query) {
    // 页面加载


    const xmlSerializer = new XMLSerializer();
    const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    JsBarcode(svgNode, 'test111111111111111111111111111111111111111', {
      format: "code128",
      xmlDocument: document,
      height: 120,
      width: 3,
      displayValue: false,

    });

    const svgText = xmlSerializer.serializeToString(svgNode);

    //console.log(svgText)
    this.setData({
      xmltext: svgText
    })

    var buffer = svg64(svgText);

    console.log(buffer)


    this.setData({
      base64: buffer
    })


  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
