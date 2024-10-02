const imgSrc = './test_eng.png';

document.write(`<img width='100%' src='${imgSrc}' />`)

Tesseract.recognize(
  imgSrc,
  'chi_sim', // eng | chi_tra
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
  document.documentElement.innerHTML += `<div>${text}</div>`
})


// const { createWorker } = Tesseract;
// (async () => {
//   const worker = createWorker();
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const { data: { text } } = await worker.recognize(image, {
//     rectangles: [
//       { top: 0, left: 0, width: 100, height: 100 },
//     ],
//   });

//   document.documentElement.innerHTML += `<div>${text}</div>`
// })();
