let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('una estudiante y un poco sobre ella ')
  .pauseFor(200)
  .deleteChars(10)
  .start();
