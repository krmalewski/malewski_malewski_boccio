console.log('JS connected');

window.onload = () => {
  const panels = document.querySelectorAll('.panel');

  // code attributed to http://jaketrent.com/post/addremove-classes-raw-javascript/
  function addClass(el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }

  function toggleOpen() {
    console.log('open')
    addClass(this, 'open');
  }

  function toggleClose() {
    console.log('close');
    removeClass(this, 'open');
    removeClass(this, 'open-active')
  }

  function toggleActiveOn() {
    if (this.classList.contains("open")) {
      addClass(this,'open-active')
    } else {
      removeClass(this, 'open-active')
    }
    // if (e.propertyName.includes('flex')) {
    //   addClass(this, 'open-active');
    // }
  }

  function toggleActiveOff(e) {
    console.log(e)
    // removeClass(this, 'open-active');
  }

  panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
  panels.forEach(panel => panel.addEventListener('mouseleave', toggleClose));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActiveOn));
  // panels.forEach(panel => panel.addEventListener('mouseleave', toggleActiveOff))
}
