(function(){
  /* mobile menu */
  var hdr=document.querySelector('.hdr'),bg=document.querySelector('.burger');
  bg.addEventListener('click',function(){var o=hdr.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){hdr.classList.remove('open')})});

  /* live countdown — ganti tanggal target di atribut data-target pada index.html */
  var cd=document.querySelector('.cd');
  if(cd){
    var target=new Date(cd.dataset.target).getTime();
    var el={d:document.getElementById('cd-d'),h:document.getElementById('cd-h'),m:document.getElementById('cd-m'),s:document.getElementById('cd-s')};
    var p=function(n){return String(n).padStart(2,'0')};
    function tick(){
      var t=Math.max(0,target-Date.now()),s=Math.floor(t/1000);
      el.d.textContent=p(Math.floor(s/86400));el.h.textContent=p(Math.floor(s%86400/3600));
      el.m.textContent=p(Math.floor(s%3600/60));el.s.textContent=p(s%60);
    }
    tick();setInterval(tick,1000);
  }

  /* circular rotating text (tanpa kotak latar) */
  var ff="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
  var ctx=document.createElement('canvas').getContext('2d');
  function len(t,fs,ls,fw){ctx.font=fw+' '+fs+'px '+ff;return ctx.measureText(t).width+(t.length-1)*ls}
  document.querySelectorAll('.atext').forEach(function(el,idx){
    var text=el.dataset.text.trim(),cs=parseFloat(el.dataset.size),ls=1,fw=500,NS='http://www.w3.org/2000/svg';
    var svg=document.createElementNS(NS,'svg');
    svg.setAttribute('width',cs*2);svg.setAttribute('height',cs*2);svg.setAttribute('viewBox','0 0 400 400');
    var g=document.createElementNS(NS,'g');g.setAttribute('class','spin');
    var path=document.createElementNS(NS,'path');path.id='cp'+idx;path.setAttribute('fill','none');
    path.setAttribute('d','M200,200 m-'+cs+',0 a'+cs+','+cs+' 0 1,0 '+cs*2+',0 a'+cs+','+cs+' 0 1,0 -'+cs*2+',0');
    var tx=document.createElementNS(NS,'text'),tp=document.createElementNS(NS,'textPath');
    tp.setAttribute('href','#cp'+idx);tx.appendChild(tp);g.appendChild(path);g.appendChild(tx);svg.appendChild(g);el.appendChild(svg);
    var L=2*Math.PI*cs;
    for(var fs=40;fs>8;fs--){
      var pl=len(text,fs,ls,fw),max=Math.floor(L/pl);
      if(max>=1){
        var n=Math.round((L-pl*max)/max/len(' ',fs,ls,fw));
        tp.textContent=(text+new Array(n+1).join(' ')).repeat(max).trim();
        tx.setAttribute('font-size',fs);tx.setAttribute('font-family',ff);tx.setAttribute('font-weight',fw);
        tx.setAttribute('letter-spacing',ls+'px');tx.style.whiteSpace='pre';break;
      }
    }
  });

  /* gallery lightbox */
  document.querySelectorAll('[data-lb]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var o=document.createElement('div');o.className='lbx';
      o.innerHTML='<img src="'+a.getAttribute('href')+'" alt="">';
      o.addEventListener('click',function(){o.remove()});
      document.addEventListener('keydown',function k(ev){if(ev.key==='Escape'){o.remove();document.removeEventListener('keydown',k)}});
      document.body.appendChild(o);
    });
  });
})();
