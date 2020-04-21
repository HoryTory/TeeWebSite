export function MP(ak) {
  return new Promise((resolve, reject) => {
    window.onload = function() {
      console.log("百度地图初始化成功");
      resolve(BMap);
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=initialize";
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
