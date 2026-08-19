document.querySelectorAll('.link').forEach((el) => {
  el.addEventListener('pointerdown', () => el.style.transform = 'scale(.985)');
  el.addEventListener('pointerup', () => el.style.transform = '');
  el.addEventListener('pointerleave', () => el.style.transform = '');
});
