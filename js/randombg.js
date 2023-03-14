//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://s2.loli.net/2022/04/24/V3ecGjXf8OqJEsU.png)",
    "url(https://s2.loli.net/2022/04/26/DYzgJ64SqFCAUKs.jpg)",
    "url(https://s2.loli.net/2022/04/26/7m5P3eBCZ6ANbFG.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://s2.loli.net/2022/04/24/V3ecGjXf8OqJEsU.png)",
    "url(https://s2.loli.net/2022/04/26/DYzgJ64SqFCAUKs.jpg)",
    "url(https://s2.loli.net/2022/04/26/7m5P3eBCZ6ANbFG.jpg)",
    "url(https://s2.loli.net/2023/03/14/fPe97ySvnGrBUlo.jpg)",
    "url(https://s2.loli.net/2023/03/14/z4wv3SbLDqRAVtl.jpg)",
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
  