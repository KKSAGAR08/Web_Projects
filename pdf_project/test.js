const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger();

const mergePdfs=async () => {
  await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('2.pdf'); // merge only page 2
 

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  
};
module.exports = {mergePdfs};