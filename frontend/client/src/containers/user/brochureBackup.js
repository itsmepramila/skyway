import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';
import { Document, Page, pdfjs } from 'react-pdf';
const baseUrl = process.env.REACT_APP_BASE_URL 
// Configure pdfjs worker URL (you can adjust this path as needed)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Brochure = () => {
  const [pdfData, setPdfData] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // GET PDF data
  const getPdfData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-brochure-file`);
      if (res) {
          setPdfData(res.data.data);
          console.log("RES: " + JSON.stringify(pdfData))
      } else {
        alert('Failed to fetch PDF data');
      }
    } catch (error) {
      console.error('Error fetching PDF data:', error);
    }
  };

  useEffect(() => {
    getPdfData();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Box>
        <Document
          file={{
            data: pdfData.brochurePdfFile.data, // Pass the PDF data from your API response
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={600} // Adjust the width as needed
            />
          ))}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Box>
    </>
  );
};

export default Brochure;
