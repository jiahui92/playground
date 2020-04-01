window.createElement = (tagName, options) => {

  console.log(tagName);

  if (tagName === 'root') {
    console.log(options);
  }

  return { tagName, ...options };
}
