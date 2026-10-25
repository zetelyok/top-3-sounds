// ===== Task 6: Counter =====
const counterValue = document.getElementById('counter-value');
let count = 0;

// One function updates the displayed result
function updateCounter() {
  counterValue.textContent = count;
}
document.getElementById('increase').addEventListener('click', () => {
  count++;
  updateCounter();
});
document.getElementById('decrease').addEventListener('click', () => {
  if (count > 0) count--;           // no negative values
  updateCounter();
});
document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// ===== Task 7: Live text preview =====
const previewInput = document.getElementById('preview-input');
const previewText = document.getElementById('preview-text');
const charCount = document.getElementById('char-count');
const PLACEHOLDER = 'Your text will appear here';

function updatePreview() {
  const value = previewInput.value;
  if (value === '') {
    previewText.textContent = PLACEHOLDER;
    previewText.classList.add('muted');
  } else {
    previewText.textContent = value;   // textContent, not innerHTML
    previewText.classList.remove('muted');
  }
  charCount.textContent = value.length;
}
previewInput.addEventListener('input', updatePreview);  // fires on typing and pasting
document.getElementById('clear-btn').addEventListener('click', () => {
  previewInput.value = '';
  updatePreview();
  previewInput.focus();
});

// ===== Task 8: Image select (my top 3 sounds) =====
const imageSelect = document.getElementById('image-select');
const placeImage = document.getElementById('place-image');
const placeCaption = document.getElementById('place-caption');

const places = {
  serdce: {
    src: 'images/serdce.jpg',
    alt: 'Cover of the track Сердце by passmurny: a broken heart, half white, half red, on a black background',
    caption: 'Сердце: passmurny'
  },
  vahteram: {
    src: 'images/vahteram.jpg',
    alt: 'Cover of the track Вахтерам by Бумбокс: three band members sitting on the floor with a boombox and toys',
    caption: 'Вахтерам: Бумбокс'
  },
  prosto: {
    src: 'images/prosto-slozhno.jpg',
    alt: 'Cover of the track Просто — сложно by TONI and МОТ: a dusty mirror with the word «просто» crossed out and «сложно» written above',
    caption: 'Просто — сложно: TONI, МОТ'
  }
};

function showPlace(key) {
  const place = places[key];
  placeImage.src = place.src;
  placeImage.alt = place.alt;
  placeCaption.textContent = place.caption;
}
imageSelect.addEventListener('change', () => showPlace(imageSelect.value));
showPlace(imageSelect.value);   // valid initial selection on load

// ===== Task 9: Keyboard events =====
const keyForm = document.getElementById('key-form');
const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');

keyForm.addEventListener('submit', (event) => event.preventDefault());  // safety net

// Listener is on the input, so it only runs while the input has focus
keyInput.addEventListener('keydown', (event) => {
  keyStatus.textContent = 'Key pressed: ' + (event.key === ' ' ? 'Space' : event.key);
  if (event.key === 'Enter') {
    event.preventDefault();                       // no form submission
    keyResult.textContent = keyInput.value;
  } else if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});

// ===== Task 10: Mouse and focus events =====
const card = document.getElementById('hover-card');
const instruction = document.getElementById('card-instruction');
const DEFAULT_TEXT = 'Move the mouse over the card or press Tab to focus it.';

function activateCard() {
  card.classList.add('highlight');
  instruction.textContent = 'The card is active!';
}
function deactivateCard() {
  card.classList.remove('highlight');
  instruction.textContent = DEFAULT_TEXT;
}
card.addEventListener('mouseenter', activateCard);
card.addEventListener('mouseleave', deactivateCard);
card.addEventListener('focus', activateCard);
card.addEventListener('blur', deactivateCard);
