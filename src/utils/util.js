var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    getCookie:function(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
        return decodeURIComponent(arr[2]);
      else
        return null;
    },
    setCookie: function (name,value) {
      document.cookie = name + "="+ escape (value);
    },
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        }

    },
    //����ʱ���ʽ
    jsonDateFormat:function(jsonDate) {
    try {
        var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();
        return date.getFullYear() + "-" + month + "-" + day;
    } catch (ex) {
        return "";
    }
},
    //����ʱ���ʽ
    jsonDateFormat:function(jsonDate) {
        try {
            var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day;
        } catch (ex) {
            return "";
        }
    },
    //����ʱ���ʽ
    jsonDateFormatAllTime:function(jsonDate) {
        try {
            var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours()< 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds()< 10 ? "0" + date.getSeconds() : date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day+' '+hours+':'+minutes+':'+seconds;
        } catch (ex) {
            return "";
        }
    },
    //��ȡʱ��EL��ʱ��
    jsonDateFormatEL:function(date){
        try {
            var date = date;
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours()< 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day+' '+hours+':'+minutes;
        } catch (ex) {
            return "";
        }
    },
    //��ȡʱ��EL��ʱ��
    jsonDateFormatAll:function(date){
        try {
            var date = date;
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours()< 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds()< 10 ? "0" + date.getSeconds() : date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day+' '+hours+':'+minutes+':'+seconds;
        } catch (ex) {
            return "";
        }
    },
    //��ȡʱ��EL��ʱ��
    jsonDateFormatDay:function(date){
        try {
            var date = date;
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours()< 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds();
            var milliseconds = date.getMilliseconds();
            return date.getFullYear() + "-" + month + "-" + day
        } catch (ex) {
            return "";
        }
    },
    jsonDateFormatUpAli:function(){
    try {
        var date = new Date();
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours()< 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds()< 10 ? "0" + date.getSeconds() : date.getSeconds();
        var milliseconds = date.getMilliseconds();
        return date.getFullYear() + "/" + month + "/" + day;
    } catch (ex) {
        return "";
    }
},
    //ʱ��ת��
      turntime:function(sec) {
    var s = sec / 1000;
    var hh = parseInt(s / 3600);//1
    var mm = parseInt(s % 3600 / 60);//995/60=16
    var ss = parseInt(s % 60);//35
    ss = ss < 10 ? ("0" + ss) : ss;
    mm = mm < 10 ? ("0" + mm) : mm;
    hh = hh < 10 ? ("0" + hh) : hh;
    return (hh + ':' + mm + ':' + ss);
     },
  turntimeMS:function(sec) {
    var s = sec / 1000;
    var hh = parseInt(s / 3600);//1
    var mm = parseInt(s % 3600 / 60);//995/60=16
    var ss = (s % 60).toFixed(0);//35
    ss = ss < 10 ? ("0" + ss) : ss;
    mm = mm < 10 ? ("0" + mm) : mm;
    hh = hh < 10 ? ("0" + hh) : hh;
    return ( mm + ':' + ss);
  },
   turnTimeOue:function(sec) {
  var s = sec;
  var hh = parseInt(s / 3600);
  var mm = parseInt(s % 3600 / 60);
  var ss = parseInt(s % 60);
  ss = ss < 10 ? ("0" + ss) : ss;
  mm = mm < 10 ? ("0" + mm) : mm;
  hh = hh < 10 ? ("0" + hh) : hh;
  return (hh + ':' + mm + ':' + ss);
},
    
  //将一个值插入一个数组，并限制长度  arr 要插入的数组 val要插入的值 compare逻辑函数 maxLen限制长度
  insertArray: function (arr, val, compare, maxLen) {
    const index = arr.findIndex(compare) //查找有没有
    if (index === 0) {  //假如第一个就是他 萨摩耶不干
      return
    }
    if (index > 0) {  // 有 先删
      arr.splice(index, 1)
    }
    arr.unshift(val)  //在开头加一个
    if (maxLen && arr.length > maxLen) {//假如超长 在末尾删一个
      arr.pop()
    }
    return arr;
  }
    };


