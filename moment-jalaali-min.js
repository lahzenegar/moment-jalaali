!function(){"use strict";var a={}.hasOwnProperty;!function(a,b){"function"==typeof define&&define.amd?define(["moment"],b):"object"==typeof exports?module.exports=b(require("moment")):a.moment=b(a.moment)}(this,function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P;if(null==b)throw new Error("Cannot find moment");return l=/(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,u=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,G=/\d\d?/,H=/\d{1,3}/,J=/\d{3}/,F=/\d{1,4}/,I=/[+\-]?\d{1,6}/,K=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,P={jm:"jmonth",jy:"jyear"},j={},C="DDD w M D".split(" "),E="M D w".split(" "),k={jM:function(){return this.jMonth()+1},jMMM:function(a){return this.lang().jMonthsShort(this,a)},jMMMM:function(a){return this.lang().jMonths(this,a)},jD:function(){return this.jDate()},jDDD:function(){return this.jDayOfYear()},jw:function(){return this.jWeek()},jYY:function(){return t(this.jYear()%100,2)},jYYYY:function(){return t(this.jYear(),4)},jYYYYY:function(){return t(this.jYear(),5)},jgg:function(){return t(this.jWeekYear()%100,2)},jgggg:function(){return this.jWeekYear()},jggggg:function(){return t(this.jWeekYear(),5)}},D=function(a,b){return function(c){return t(a.call(this,c),b)}},B=function(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}},function(){for(var a;C.length;)a=C.pop(),k["j"+a+"o"]=B(k["j"+a],a);for(;E.length;)a=E.pop(),k["j"+a+a]=D(k["j"+a],2)}(),k.jDDDD=D(k.jDDD,3),t=function(a,b){var c;for(c=a+"";c.length<b;)c="0"+c;return c},A=function(a){return a?P[a]||a.toLowerCase().replace(/(.)s$/,"$1"):a},M=function(a,b,c){var d;d=this._isUTC?"UTC":"",this._d["set"+d+"FullYear"](a),this._d["set"+d+"Month"](b),this._d["set"+d+"Date"](c)},i=function(b,c){var d,e;for(d in c)a.call(c,d)&&(e=c[d],b[d]=e);return b},o=function(a){return"[object Array]"===Object.prototype.toString.call(a)},d=function(a,b){var c,d,e,f,g;for(e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),c=0,d=g=0;e>g;d=g+=1)~~a[d]!==~~b[d]&&(c+=1);return c+f},i(b.langData().__proto__,{_jMonths:["Farvardin","Ordibehesht","Khordaad","Tir","Amordaad","Shahrivar","Mehr","Aabaan","Aazar","Dey","Bahman","Esfand"],jMonths:function(a){return this._jMonths[a.jMonth()]},_jMonthsShort:["Far","Ord","Kho","Tir","Amo","Sha","Meh","Aab","Aaz","Dey","Bah","Esf"],jMonthsShort:function(a){return this._jMonthsShort[a.jMonth()]},jMonthsParse:function(a){var b,c,d,e;for(this._jMonthsParse||(this._jMonthsParse=[]),b=e=0;12>e;b=++e)if(this._jMonthsParse[b]||(c=q([2e3,(2+b)%12,25]),d="^"+this.jMonths(c,"")+"|^"+this.jMonthsShort(c,""),this._jMonthsParse[b]=new RegExp(d.replace(".",""),"i")),this._jMonthsParse[b].test(a))return b}}),x=function(a){var b,c,d,e,f;for(b=a.match(l),c=e=0,f=b.length;f>e;c=++e)d=b[c],k[d]&&(b[c]=k[d]);return function(c){var e,f,g;for(e="",f=0,g=b.length;g>f;f++)d=b[f],e+=d instanceof Function?"["+d.call(c,a)+"]":d;return e}},r=function(a,b,c){var d,e,f;return f=c-b,e=c-a.day(),e>f&&(e-=7),f-7>e&&(e+=7),d=q(a).add("d",e),{week:Math.ceil(d.jDayOfYear()/7),year:d.jYear()}},L=function(a){var b,c,d,e,f,g,h,i;for(g=a._i,d="",c="",b=a._f.match(l),h=0,i=b.length;i>h;h++)e=b[h],f=(n(e,a).exec(g)||[])[0],f&&(g=g.slice(g.indexOf(f)+f.length)),k[e]instanceof Function||(c+=e,f&&(d+=f));a._i=d,a._f=c},n=function(a,c){switch(a){case"jDDDD":return J;case"jYYYY":return F;case"jYYYYY":return I;case"jDDD":return H;case"jMMM":case"jMMMM":return K;case"jMM":case"jDD":case"jYY":case"jM":case"jD":return G;case"DDDD":return J;case"YYYY":return F;case"YYYYY":return I;case"S":case"SS":case"SSS":case"DDD":return H;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return K;case"a":case"A":return b.langData(c._l)._meridiemParse;case"X":return parseTokenTimestampMs;case"Z":case"ZZ":return parseTokenTimezone;case"T":return parseTokenT;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return G;default:return new RegExp(a.replace("\\",""))}},c=function(a,c,d){var e,f;switch(f=d._a,a){case"jM":case"jMM":f[1]=null==c?0:~~c-1;break;case"jMMM":case"jMMMM":e=b.langData(d._l).jMonthsParse(c),null!=e?f[1]=e:d._isValid=!1;break;case"jD":case"jDD":case"jDDD":case"jDDDD":null!=c&&(f[2]=~~c);break;case"jYY":f[0]=~~c+(~~c>47?1300:1400);break;case"jYYYY":case"jYYYYY":f[0]=~~c}null==c&&(d._isValid=!1)},g=function(a){var b,c,d,e,f,g;return g=a._a,f=g[0],e=g[1],d=g[2],null==f&&null==e&&null==d?[0,0,1]:(f||(f=0),e||(e=0),d||(d=1),d>=1&&d<=q.jDaysInMonth(f,e)||(a._isValid=!1),b=N(f,e,d),c=O(b.gy,b.gm,b.gd),a._jDiff=0,~~c.jy!==f&&(a._jDiff+=1),~~c.jm!==e&&(a._jDiff+=1),~~c.jd!==d&&(a._jDiff+=1),[b.gy,b.gm,b.gd])},w=function(a){var b,d,e,f,h,i;for(f=a._f.match(l),d=a._i,a._a=[],h=0,i=f.length;i>h;h++)e=f[h],b=(n(e,a).exec(d)||[])[0],b&&(d=d.slice(d.indexOf(b)+b.length)),k[e]&&c(e,b,a);return d&&(a._il=d),g(a)},v=function(a,b){var c,e,f,g,h,j,k,l,m;for(g=99,m=a._f,k=0,l=m.length;l>k;k++)f=m[k],h=i({},a),h._f=f,j=y(a._i,f,a._l,b),e=d(j._a,j.toArray()),e+=j._jDiff,j._il&&(e+=j._il.length),g>e&&(g=e,c=j);return c},y=function(a,c,d,e){var f,g,h;if(f={_i:a,_f:c,_l:d},c){if(o(c))return v(f,e);g=w(f),L(f),c="YYYY-MM-DD-"+f._f,a=t(g[0],4)+"-"+t(g[1]+1,2)+"-"+t(g[2],2)+"-"+f._i}return h=e?b.utc.call(this,a,c,d):b.call(this,a,c,d),f._isValid===!1&&(h._isValid=!1),h._jDiff=f._jDiff||0,h.__proto__=q.fn,h},q=function(a,b,c){return y(a,b,c,!1)},i(q,b),q.fn={},q.fn.__proto__=b.fn,q.utc=function(a,b,c){return y(a,b,c,!0)},q.fn.format=function(a){var c,d,e=this;if(a){for(c=5,d=function(a){return e.lang().longDateFormat(a)||a};c>0&&u.test(a);)c-=1,a=a.replace(u,d);j[a]||(j[a]=x(a)),a=j[a](this)}return b.fn.format.call(this,a)},q.fn.jYear=function(a){var c,d,e,f,g,h,i,j,k;return"number"==typeof a?(j=O(this.year(),this.month(),this.date()),h=j.jy,g=j.jm,f=j.jd,i=Math.min(f,q.jDaysInMonth(a,g)),k=N(a,g,i),e=k.gy,d=k.gm,c=k.gd,M.call(this,e,d,c),b.updateOffset(this),this):O(this.year(),this.month(),this.date()).jy},q.fn.jYears=q.fn.jYear,q.fn.jMonth=function(a){var c,d,e,f,g,h,i,j,k;return null!=a?"string"==typeof a&&(a=this.lang().jMonthsParse(a),"number"!=typeof a)?this:(j=O(this.year(),this.month(),this.date()),h=j.jy,g=j.jm,f=j.jd,i=Math.min(f,q.jDaysInMonth(h,a)),k=N(h,a,i),e=k.gy,d=k.gm,c=k.gd,M.call(this,e,d,c),b.updateOffset(this),this):O(this.year(),this.month(),this.date()).jm},q.fn.jMonths=q.fn.jMonth,q.fn.jDate=function(a){var c,d,e,f,g,h,i,j;return"number"==typeof a?(i=O(this.year(),this.month(),this.date()),h=i.jy,g=i.jm,f=i.jd,j=N(h,g,a),e=j.gy,d=j.gm,c=j.gd,M.call(this,e,d,c),b.updateOffset(this),this):O(this.year(),this.month(),this.date()).jd},q.fn.jDates=q.fn.jDate,q.fn.jDayOfYear=function(a){var b;return b=Math.round((q(this).startOf("day")-q(this).startOf("jYear"))/864e5)+1,null==a?b:this.add("d",a-b)},q.fn.jWeek=function(a){var b;return b=r(this,this.lang()._week.dow,this.lang()._week.doy).week,null==a?b:this.add("d",7*(a-b))},q.fn.jWeeks=q.fn.jWeek,q.fn.jWeekYear=function(a){var b;return b=r(this,this.lang()._week.dow,this.lang()._week.doy).year,null==a?b:this.add("y",a-b)},q.fn.add=function(a,c){var d;return"string"==typeof a&&(d=[c,a],a=d[0],c=d[1]),c=A(c),"jyear"===c?this.jYear(this.jYear()+a):"jmonth"===c?this.jMonth(this.jMonth()+a):b.fn.add.call(this,c,a),this},q.fn.startOf=function(a){return a=A(a),"jyear"===a||"jmonth"===a?("jyear"===a&&this.jMonth(0),this.jDate(1),this.hours(0),this.minutes(0),this.seconds(0),this.milliseconds(0),this):b.fn.startOf.call(this,a)},q.fn.clone=function(){return q(this)},q.jDaysInMonth=function(a,b){return 6>b?31:11>b?30:q.jIsLeapYear(a)?30:29},q.jIsLeapYear=function(a){return 0===s(a).leap},O=function(a,b,c){var d;return d=f(m(a,b+1,c)),d.jm-=1,d},N=function(a,b,c){var d;return d=e(p(a,b+1,c)),d.gm-=1,d},q.jConvert={toJalaali:O,toGregorian:N},h=function(a,b){return~~(a/b)},z=function(a,b){return a-~~(a/b)*b},s=function(a){var b,c,d,e,f,g,i,j,k,l,m,n,o,p;if(c=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],b=c.length,d=a+621,k=-14,f=c[0],f>a||a>=c[b-1])throw new Error("Invalid Jalaali year "+a);for(p=c.slice(1,b),n=0,o=p.length;o>n&&(e=p[n],g=e-f,!(e>a));n++)k=k+8*h(g,33)+h(z(g,33),4),f=e;return m=a-f,k=k+8*h(m,33)+h(z(m,33)+3,4),4===z(g,33)&&4===g-m&&(k+=1),j=h(d,4)-h(3*(h(d,100)+1),4)-150,l=20+k-j,6>g-m&&(m=m-g+33*h(g+4,33)),i=z(z(m+1,33)-1,4),-1===i&&(i=4),{leap:i,gy:d,march:l}},p=function(a,b,c){var d,e,f,g;return g=s(a),e=g.leap,d=g.gy,f=g.march,m(d,3,f)+31*(b-1)-h(b,7)*(b-7)+c-1},f=function(a){var b,c,d,f,g,i,j,k,l;if(b=e(a).gy,g=b-621,l=s(g),j=l.leap,k=l.march,d=m(b,3,k),i=a-d,i>=0){if(185>=i)return f=1+h(i,31),c=z(i,31)+1,{jy:g,jm:f,jd:c};i-=186}else g-=1,i+=179,1===j&&(i+=1);return f=7+h(i,30),c=z(i,30)+1,{jy:g,jm:f,jd:c}},m=function(a,b,c){var d;return d=h(1461*(a+h(b-8,6)+100100),4)+h(153*z(b+9,12)+2,5)+c-34840408,d=d-h(3*h(a+100100+h(b-8,6),100),4)+752},e=function(a){var b,c,d,e,f;return f=4*a+139361631,f=f+4*h(3*h(4*a+183187720,146097),4)-3908,e=5*h(z(f,1461),4)+308,b=h(z(e,153),5)+1,c=z(h(e,153),12)+1,d=h(f,1461)-100100+h(8-c,6),{gy:d,gm:c,gd:b}},q})}.call(this);