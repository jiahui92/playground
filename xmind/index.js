if (window.Workbook) {
  const {Workbook, Topic, Dumper} = window;
  const workbook = new Workbook();
  const topic = new Topic({sheet: workbook.createSheet('sheet-1')});
  topic
    .on()
    .add({title: 'main topic 1'})
    .add({title: 'main topic 2'});

  console.log(workbook.toJSON());
  const dumper = new Dumper({workbook});

  const files = dumper.dumping();
  console.log(files);

  for (const file of files) {
    console.log(file.filename, '\n', file.value);
  }
}