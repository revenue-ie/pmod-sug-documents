// Array to hold meeting data, add new meeting to end of array
const data = [
  {
    meetingDate: "January 19th 2023",
    link: "assets/slides/PMOD 19 January SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "February 16th 2023",
    link: "assets/slides/PMOD 16 February SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "March 16th 2023",
    link: "assets/slides/PMOD 16 March SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "April 20th 2023",
    link: "assets/slides/PMOD 20 April SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "May 18th 2023",
    link: "assets/slides/PMOD 18 May SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "June 15th 2023",
    link: "assets/slides/PMOD 15 June SUG 2023.pdf",
    type: "PDF",
  },
  {
    meetingDate: "July 20th 2023",
    link: "assets/slides/PMOD 20 July SUG 2023.pdf",
    type: "PDF",
  },
  
];

const cardHead = document.getElementById("card-head")

data.map(d => {
  cardHead.insertAdjacentHTML(
    "beforeend",
    `<div
    class="card"
    style="font-size: 1.2rem; margin-bottom: 1rem"
  >
    <div class="col-xs-6 col-xxs-5">${d.meetingDate}</div>
    <div
      class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xxs-5"
    >
      <a
        href="${d.link}"
        target="_blank"
        >Download</a
      >
    </div>
    <div
      class="col-lg-3 col-md-3 col-sm-3 col-xs-1 col-xxs-2"
      style="padding: 0rem !important"
    >
      ${d.type}
    </div>
  </div>`,
  );
})