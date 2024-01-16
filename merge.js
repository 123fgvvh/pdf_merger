const PDFMerger = require('pdf-merger-js');

const mergepdfs = async (p1, p2) => {
  // Create a new instance of PDFMerger for each request
  const merger = new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`);

  return d;
};

module.exports = { mergepdfs };
