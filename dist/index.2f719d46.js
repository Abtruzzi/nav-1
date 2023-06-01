const o=$(".siteList"),e=o.find("li.last"),l=localStorage.getItem("x"),s=JSON.parse(l);window.hashMap=s||[{logo:"X",url:"https://xiedaimala.com"},{logo:"G",url:"https://github.com/"}];const t=o=>o.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),a=()=>{o.find("li:not(.last)").remove(),hashMap.forEach((o,l)=>{let s=$(`<li>
            <div class="site">
                <div class="log">${o.logo[0]}</div>
                <div class="link">${t(o.url)}</div >
                <div class="close">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg></div>
            </div >
        </li > `).insertBefore(e);s.on("click",()=>{window.open(o.url,target="_self")}),s.on("click",".close",o=>{console.log("这里"),o.stopPropagation(),hashMap.splice(l,1),a()})})};a(),$(".addButton").on("click",()=>{let o=window.prompt("请问你要添加的网址是啥？","请输入");0!==o.indexOf("http")&&(o="https://"+o),console.log(o),hashMap.push({logo:t(o)[0].toUpperCase(),logoType:"text",url:o}),a()}),window.onbeforeunload=()=>{console.log("页面要关闭了");let o=JSON.stringify(hashMap);localStorage.setItem("x",o)},$(document).on("keypress",o=>{let{key:e}=o;for(let o=0;o<hashMap.length;o++)hashMap[o].logo.toLowerCase()===e&&window.open(hashMap[o].url,target="_self")});
//# sourceMappingURL=index.2f719d46.js.map
