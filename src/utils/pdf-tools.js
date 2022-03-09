import PdfPrinter from "PdfPrinter";
import striptags from 'striptags';

const fonts = {
    Roboto: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  };

  const printer = new PdfPrinter(fonts);
    
  export const blogPdfgenerator = async (blog)=>{




     const dicDefinition ={

        conntent : [

            {}
        ]
     }


  }