(function() {
  var c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  var ctx = c.getContext('2d');
  var link = document.querySelector("link[rel*='icon']")
    || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  if (!link.parentNode) document.head.appendChild(link);

  function draw(ctx, s, t) {
    ctx.save(); ctx.beginPath(); ctx.arc(s/2,s/2,s/2,0,Math.PI*2); ctx.clip();
    var sh=Math.sin(t*0.3)*8;
    var g=ctx.createLinearGradient(0,0,0,s);
    g.addColorStop(0,'hsl('+(340+sh)+',82%,52%)');
    g.addColorStop(0.32,'hsl('+(18+sh)+',88%,54%)');
    g.addColorStop(0.55,'hsl('+(42+sh)+',92%,54%)');
    g.addColorStop(0.72,'hsl(155,55%,22%)');
    g.addColorStop(1,'hsl(155,45%,14%)');
    ctx.fillStyle=g; ctx.fillRect(0,0,s,s);
    var sx=s*0.67,sy=s*0.3+Math.sin(t*0.5)*s*0.018,sr=s*0.1;
    var gl=ctx.createRadialGradient(sx,sy,sr*0.3,sx,sy,sr*2.8);
    gl.addColorStop(0,'rgba(255,248,215,0.55)'); gl.addColorStop(1,'rgba(255,200,87,0)');
    ctx.fillStyle=gl; ctx.fillRect(0,0,s,s);
    ctx.fillStyle='#FFF8DC'; ctx.beginPath(); ctx.arc(sx,sy,sr,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#1a0e05'; ctx.lineWidth=Math.max(1,s*0.042); ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(s*0.17,s);
    ctx.bezierCurveTo(s*0.14,s*0.68,s*0.19,s*0.48,s*0.28,s*0.32); ctx.stroke();
    var bx=s*0.28,by=s*0.32,sw=Math.sin(t*1.2)*0.17;
    var lc=['#1a4a1a','#1e5a1e','#1f5220','#1a4a1a','#1d5e1e','#1a5020'];
    for(var i=0;i<6;i++){var ba=-Math.PI*0.88+(i/5)*Math.PI*1.12;
      var a=ba+sw*(i%2===0?1:-0.55),ln=s*(0.27+(i%2)*0.045);
      var tx=bx+Math.cos(a)*ln,ty=by+Math.sin(a)*ln;
      var cx=bx+Math.cos(a)*ln*0.55+Math.sin(t*1.5+i*0.8)*s*0.025;
      var cy=by+Math.sin(a)*ln*0.55-s*0.055;
      ctx.fillStyle=lc[i]; ctx.beginPath(); ctx.moveTo(bx,by);
      ctx.quadraticCurveTo(cx,cy,tx,ty);
      ctx.quadraticCurveTo(bx+Math.cos(a+0.38)*ln*0.35,by+Math.sin(a+0.38)*ln*0.35-s*0.015,bx,by);
      ctx.fill();}
    ctx.fillStyle='#3E2723';
    ctx.beginPath(); ctx.arc(bx-s*0.018,by+s*0.018,s*0.022,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(bx+s*0.02,by+s*0.022,s*0.02,0,Math.PI*2); ctx.fill();
    for(var w=0;w<3;w++){ctx.fillStyle='rgba(18,75,55,'+(0.28-w*0.07)+')';
      ctx.beginPath(); var bY=s*0.74+w*s*0.04; ctx.moveTo(0,bY);
      for(var x=0;x<=s;x+=2) ctx.lineTo(x,bY+Math.sin(x*0.22+t*2.5+w*1.5)*s*0.016);
      ctx.lineTo(s,s); ctx.lineTo(0,s); ctx.closePath(); ctx.fill();}
    ctx.restore();
  }

  var start = performance.now();
  function loop(now) {
    var t = (now - start) / 1000;
    ctx.clearRect(0, 0, 64, 64);
    draw(ctx, 64, t);
    link.href = c.toDataURL('image/png');
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
