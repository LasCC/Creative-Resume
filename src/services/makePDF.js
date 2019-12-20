import jspdf from "jspdf";

const makePDF = () => {
  console.log("PDF request");
  const pdf = new jspdf("p", "pt", "a4");
  pdf.setProperties({
    title: "Resume",
    subject: "Curriculum vitæ",
    author: "Creative Resume"
  });
  pdf.addHTML(document.getElementById("makePdf"), () => {
    let ps_filename = "Curriculum vitæ - Creative Resume";
    pdf.save(ps_filename + ".pdf");
  });
};

export default makePDF;
