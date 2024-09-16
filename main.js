'use strict';
{
  // ハンバーガーメニュー
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const menu = document.getElementById('menu')

  open.addEventListener('click',() => {
    open.classList.add('hide');
    menu.classList.add('show');
  });

  close.addEventListener('click',() =>{
    open.classList.remove('hide');
    menu.classList.remove('show');
  });
}
{
  // 名刺
  const front = document.getElementById('front');
  const cover = document.getElementById('cover');

  front.addEventListener('click',() => {
    front.classList.add('hide');
    cover.classList.add('show');
  });

  cover.addEventListener('click',() =>{
    front.classList.remove('hide');
    cover.classList.remove('show');
  });
}
{
  function callback(entries,obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      else{
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
      }
    });
  };

  const options = {
    threshold : 0.2,
  };

  const targets = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(callback,options);

  targets.forEach(target => {
    observer.observe(target);
  });
}
{
  // 上ボタン
  function scrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      }
      else{
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  };

  const header = document.querySelector('header');
  const toTop = document.getElementById("to_top");
  const topTarget = document.getElementById("top_target");

  toTop.addEventListener('click',e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  });

  const scrollObserver = new IntersectionObserver(scrollCallback);

  scrollObserver.observe(topTarget);
}
