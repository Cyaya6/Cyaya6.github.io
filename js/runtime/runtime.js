var now=new Date;function createtime(){var e=new Date("04/05/2023 00:00:00");now.setTime(now.getTime()+250);var n=(now-e)/1e3/60/60/24,t=Math.floor(n),a=(now-e)/1e3/60/60-24*t,r=Math.floor(a);1==String(r).length&&(r="0"+r);var i=(now-e)/1e3/60-1440*t-60*r,o=Math.floor(i);1==String(o).length&&(o="0"+o);var s=(now-e)/1e3-86400*t-3600*r-60*o,g=Math.round(s);1==String(g).length&&(g="0"+g);let l="";l=r<18&&r>=9?`<img class='boardsign' src='/img/siteicon/16.png' title='相信美好的事情即将发生！🥰'><span class='textTip'> <br> 本站居然运行了 ${t} 天</span><span id='runtime'> ${r} 小时 ${o} 分 ${g} 秒 😁</span>`:`<img class='boardsign' src='/img/siteicon/16.png' title='嗷嗷，嘿嘿~'><span class='textTip'> <br> 本站安全运行了 ${t} 天</span><span id='runtime'> ${r} 小时 ${o} 分 ${g} 秒 😁</span>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=l)}setInterval((()=>{createtime()}),250);