# Barcode-generator


不管是开发支付宝小程序还是微信小程序 经常会遇到使用barcode 目前官方并没有提供相应的解决方案 而网上存在的解决方案主要是利用barcode库 然后通过小程序的canvas绘制出来 barcode的最后生成比较依赖这部分绘制图形代码
其实我们可以换一个思路来实现 库还是使用barcode 但我们可以利用第三方的在内存中绘制 然后转成svg格式 最后让其显示出来。

效果如下

![image](https://github.com/Burderly001/Barcode-generator/blob/main/sample.png)
