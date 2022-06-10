---
date: 2021/10/15 12:41
---



# 设置鼠标右键打开方式



一般在安装一些程序的时候，其都会提示是否添加到打开方式中，但是如果你忘记设置，或者是没有，在者右键打开方式空白的情况，或者不可用，都可以通过下面的方式进行修复





![](https://picture.xcye.xyz/image-20211015124046242.png?x-oss-process=style/pictureProcess1)





## 解决

按住`win R`键，输入`regedit`

![](https://picture.xcye.xyz/image-20211015124559493.png?x-oss-process=style/pictureProcess1)



找到如下图的表单

![](https://picture.xcye.xyz/image-20211015124658755.png?x-oss-process=style/pictureProcess1)

注册表中的`shell`项就是控制右键打开方式的

![](https://picture.xcye.xyz/image-20211015124755806.png?x-oss-process=style/pictureProcess1)



这里通过添加`Phpstorm`作为演示

![](https://picture.xcye.xyz/image-20211015124951738.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125050042.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125156979.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125436410.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125641203.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125807107.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211015125931181.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211015130016691.png?x-oss-process=style/pictureProcess1)





同理，你如果删除`shell`下的某些项，那么就不会出现在打开方式中

![](https://picture.xcye.xyz/image-20211015130209490.png?x-oss-process=style/pictureProcess1)
