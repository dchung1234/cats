import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const samplePDF = '/pdf/Hossain_Ehsaan.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} object-fit/>
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
