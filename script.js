const wrapper = document.querySelector('.wrapper');
const envelope = document.querySelector('.envelope');
const envelope_lid_one = document.querySelector('.envelope__lid-one');
const envelope_lid_two = document.querySelector('.envelope__lid-two');
const letter = document.querySelector('.letter');
const texts = document.querySelectorAll('.letter h1, .letter h2, .letter p, .letter__footer');

wrapper.addEventListener('click', function () {
    console.log('Envelope clicked');
    envelope_lid_one.classList.add('envelope__lid-one--hover-effect');
    envelope_lid_two.classList.add('envelope__lid-two--hover-effect');
    letter.classList.add('letter--hover-effect');
    wrapper.classList.add('no-hover');
    startClickAnimation();
}, { once: true });

function startClickAnimation() {
    console.log('Click animation started');
    envelope.classList.add('envelope--animate-fade-out');
    letter.style.height = letter.scrollHeight + 'px';
    letter.classList.add('letter--animate-scale-up');
    texts.forEach(text => {
        text.classList.add('letter--animate-fadeInUp');
    });
}
