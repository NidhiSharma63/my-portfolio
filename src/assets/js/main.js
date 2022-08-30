
let options = {
  root: null,
  threshold: 0,
  rootMargin:'100px 100px 0px 0px'
}

export const translateAnim = ({selector,classes}) =>{
  const selectorWrapper = document.querySelector(`.${selector}`);
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      selectorWrapper.classList.remove(`${classes}`);
      observer.disconnect();
    })
  }, options);
  observer.observe(selectorWrapper);
}

export const translateAnimAll = ({selector,classes}) =>{
  const selectorWrappers = document.querySelectorAll(`.${selector}`);
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    selectorWrappers.forEach(selectorWrapper => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
          selectorWrapper.classList.remove(`${classes}`);
          observer.disconnect();
      })
    })
  }, options);

  selectorWrappers.forEach(selectorWrapper => {
    observer.observe(selectorWrapper);
  })
}



