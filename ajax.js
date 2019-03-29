function ajax(method, url, async, fn) {

    // 第一步 创建XMLHttpRequset
    var xmlhttp = new XMLHttpRequest();

    // 第二步 给后台发送请求 get,post  url  异步,同步
    xmlhttp.open(method, url, async);

    // 第三步 发送
    xmlhttp.send();

    // 第四步 服务器响应事件    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) { // 如果等于4 代表后台已经找到你的文件 并且已经可以开始请求数据
            if(xmlhttp.status == 200) {
                // console.log(xmlhttp.responseText);
                fn(xmlhttp.responseText)
            }
        }
    }

}

