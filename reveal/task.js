function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('reveal_active');
      }
      else change.target.classList.remove('reveal_active');
    });
  }
  let options = { threshold: [1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.reveal');
  for (let elm of elements) {
    observer.observe(elm);
  }