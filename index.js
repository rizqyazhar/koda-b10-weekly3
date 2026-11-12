const reportFlowOverviewText = [
  {
    number: "01",
    title: "Snap & Tag",
    description:
      "Take a photo or quick audio of the issue and provide the street location.",
  },
  {
    number: "02",
    title: "Report Review",
    description:
      "Our team verifies evidence and routes directly to the responsible bureau.",
  },
  {
    number: "03",
    title: "Field Fix",
    description:
      "Dispatched technicians do the repairs under strict public SLA windows.",
  },
  {
    number: "04",
    title: "Proof & Close",
    description:
      "Before/after photos published openly so everyone sees the resolution.",
  },
];

const communityReportData = [
  {
    srcImg: "/img/img/img-1.jpg",
    altImg: "img-1",
    variantTag: "inreview-tag",
    srcIconTag: "/img/icons/search-icon.svg",
    altIconTag: "search-icon",
    textTag: "In review",
    codeReport: "CMP-2026-8841",
    titleReport:
      "PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT",
    address: "Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)",
    relevantOfficer: "Perumda PAM JAYA (Clean Drinking Water)",
    problemCategory: "Water & Sewage",
    reportDate: "Oct 29",
    numberOfProof: 2,
    numberOfUpVote: 148,
  },
  {
    srcImg: "/img/img/img-2.jpg",
    altImg: "img-3",
    variantTag: "assigned-tag",
    srcIconTag: "/img/icons/asigned-icon.svg",
    altIconTag: "assigned-icon",
    textTag: "Assigned",
    codeReport: "CMP-2026-8819",
    titleReport:
      "Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage",
    address:
      "Jl. Gatot Subroto Kav. 38 (depan Menara Mulia, Jalur TransJakarta)",
    relevantOfficer: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)",
    problemCategory: "Roads & Transit",
    reportDate: "Oct 28",
    numberOfProof: 1,
    numberOfUpVote: 92,
  },
  {
    srcImg: "/img/img/img-3.jpg",
    altImg: "img-3",
    variantTag: "resolved-tag",
    srcIconTag: "/img/icons/check-icon.svg",
    altIconTag: "check-icon",
    textTag: "Resolved",
    codeReport: "CMP-2026-8794",
    titleReport:
      "Complete PJU streetlight outage spanning 300 meters along residential corridor",
    address: "Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03",
    relevantOfficer: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)",
    problemCategory: "Street Lighting",
    reportDate: "Oct 28",
    numberOfProof: 1,
    numberOfUpVote: 64,
  },
  {
    srcImg: "/img/img/img-4.jpg",
    altImg: "img-4",
    variantTag: "inreview-tag",
    srcIconTag: "/img/icons/search-icon.svg",
    altIconTag: "search-icon",
    textTag: "In review",
    codeReport: "CMP-2026-8720",
    titleReport:
      "Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang",
    address: "Kampung Kemang, RT 02 / RW 01 (bantara Kali Krukut)",
    relevantOfficer: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)",
    problemCategory: "Sanitation & Waste",
    reportDate: "Oct 29",
    numberOfProof: 1,
    numberOfUpVote: 78,
  },
  {
    srcImg: "/img/img/img-5.png",
    altImg: "img-5",
    variantTag: "assigned-tag",
    srcIconTag: "/img/icons/asigned-icon.svg",
    altIconTag: "asigned-icon",
    textTag: "Assigned",
    codeReport: "CMP-2026-8650",
    titleReport:
      "Hazardous decayed Trembesi tree limb at risk of collapse over walking path",
    address: "Taman Suropati (sisi timur, dekat patung ASEAN)",
    relevantOfficer: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
    problemCategory: "Public Parks & Trees",
    reportDate: "Oct 28",
    numberOfProof: 2,
    numberOfUpVote: 45,
  },
  {
    srcImg: "",
    altImg: "",
    variantTag: "submitted-tag",
    srcIconTag: "/img/icons/time-icon.svg",
    altIconTag: "time-icon",
    textTag: "Submitted",
    codeReport: "CMP-2026-8601",
    titleReport:
      "Heavy excavation equipment operating past 22:00 WIB in residential alley",
    address: "Jl. Senopati No. 18, RT 06 / RW 02",
    relevantOfficer: "Satpol PP Provinsi DKI Jakarta (Public Order)",
    problemCategory: "Noise & Disturbance",
    reportDate: "Oct 29",
    numberOfProof: 1,
    numberOfUpVote: 39,
  },
];

const generateModalNav = () => {
  $("body").append(`
  <div id="modal-nav" class="absolute z-50 inset-0 w-full min-h-dvh bg-black/30 flex flex-row-reverse">
      <div class="w-1/2 h-full flex flex-col bg-[rgba(255,253,248,1)]">
        <div class="flex flex-row-reverse p-5">
           <button id="close-modal-nav" class="cursor-pointer">
             <svg class="menu-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
        </div>
        <div class="flex flex-col">
          <a href="/live-feed.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Live Feed</a>
          <a href="/track.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Track</a>
          <a href="/help.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">How it works</a>
        </div>
        <div class="mt-10 w-full flex items-center justify-center gap-3">
          <a href="/login.html" class="button button-secondary">
            <img src="/img/icons/login-icon.svg" alt="/login-icon" />
            Sign In
          </a>
          <button class="button button-primary">
            <img src="/img/icons/plus-icon.svg" alt="/plus-icon" />
            Report
          </button>
        </div>
      </div>
    </div>
  `);
  return;
};

const generateModalNavLoggedIn = () => {
  $("body").append(`
  <div id="modal-nav" class="absolute z-50 inset-0 w-full min-h-dvh bg-black/30 flex flex-row-reverse">
      <div class="w-1/2 h-full flex flex-col bg-[rgba(255,253,248,1)]">
        <div class="flex flex-row-reverse p-5">
           <button id="close-modal-nav" class="cursor-pointer">
             <svg class="menu-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
        </div>
        <div class="flex flex-col">
          <a href="/live-feed.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Live Feed</a>
          <a href="/track.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Track</a>
          <a href="/help.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">How it works</a>
        </div>
        <div class="mt-10 w-full flex flex-col items-center justify-center gap-3">
          <div>
            <div class="user-info-toggle">
              <div class="user-photo">FS</div>
              <div class="user-info">
                <span>Fahrul Septiana</span>
                <span>citizen</span>
              </div>
              <div class="chevron-down-icon"></div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-5">
            <a href="/notification.html" class="notif-icon-box">
              <div class="notif-icon"></div>
              <div class="green-circle"></div>
            </a>
            <button class="button button-primary">
              <img src="/img/icons/plus-icon.svg" alt="/plus-icon" />
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
};

$("#open-modal-nav-logged-in").click(function () {
  $("body").css("overflow", "hidden");
  generateModalNavLoggedIn($(this));
});

$(document).on("click", "#close-modal-nav", function () {
  $("body").css("overflow", "visible");
  $("#modal-nav").remove();
});

$("#open-modal-nav").click(function () {
  $("body").css("overflow", "hidden");
  generateModalNav($(this));
});

$(document).on("click", "#close-modal-nav", function () {
  $("body").css("overflow", "visible");
  $("#modal-nav").remove();
});

// start modal hover

const generateModalProfile = () => {
  $(".user-info-toggle").append(`
      <div id="modal-profile" class="modal-profile-toggle">
          <a href="/profile.html">
            <span>Fahrul Septiana</span>
            <span>fahrul@wargareport.id</span>
          </a>
          <a href="/my-reports.html">
            <div class="profile-icon"></div>
            <span>My Filed Reports</span>
          </a>
          <a>
            <div class="logout-icon"></div>
            <span>Sign Out</span>
          </a>
      </div>
  `);
  return;
};

$(".user-info-toggle").click(function () {
  const modal = $("#modal-profile");
  if (modal[0]) {
    modal.remove();
  } else {
    generateModalProfile();
  }
});

// end modal hover

// start report flow overview

const generateReportFlowOverviewCard = (data) => {
  const { number, title, description } = data;

  $(".report-flow-review").append(
    `<div class="small-card">
          <div class="circ-box">${number}</div>
          <div>
            <p class="title">${title}</p>
            <p class="description">
              ${description}
            </p>
          </div>
        </div>`,
  );
};

reportFlowOverviewText.map((data) => {
  generateReportFlowOverviewCard(data);
});

// end report flow overview

// start recent recent community report card

const generateRecentCommunityReportCard = (data) => {
  const {
    srcImg,
    altImg,
    variantTag,
    srcIconTag,
    altIconTag,
    textTag,
    codeReport,
    titleReport,
    address,
    numberOfUpVote,
  } = data;

  $(".recent-community-report-card-box").append(
    `<div class="medium-card">
            <div class="img-box">
              <img src=${srcImg} alt=${altImg} />
            </div>
            <div class="medium-card-text-box">
              <div class="note-report">
                <span class="tag ${variantTag}">
                  <img src=${srcIconTag} alt=${altIconTag} />
                  ${textTag}
                </span>
                <span class="note-text">${codeReport}</span>
              </div>
              <p class="title-report title">
                ${titleReport}
              </p>
              <div class="map-report-box">
                <img src="/img/icons/location-icon.svg" alt="location-icon" />
                <p class="map-report description">
                  ${address}
                </p>
              </div>
              <div class="space-between-btn-box">
                <button class="button btn-like">
                  <span
                    ><img src="/img/icons/like-icon.svg" alt="like-icon"
                  /></span>
                  ${numberOfUpVote}
                </button>
                <a class="btn-nav">
                  Inspect
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>`,
  );
};

communityReportData.map((data) => {
  generateRecentCommunityReportCard(data);
});

// end recent recent community report card

// start accordion

const generateAccordionContent = (target) => {
  target.append(`<div class="accordion-content">
              <ol>
                <li>
                  You spot an issue (pothole, water leak, dark street) and snap
                  a photo.
                </li>
                <li>
                  WargaReport verifies the evidence and dispatches it directly
                  to the responsible municipal agency (PAM JAYA, Bina Marga,
                  Dishub, DLH, Satpol PP, Citata).
                </li>
                <li>
                  A public countdown starts. Neighbors can upvote the report to
                  increase priority.
                </li>
                <li>
                  Field crews resolve the physical issue and post verification
                  proof before closing.
                </li>
              </ol>
            </div>`);
};

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((item) => {
  item
    .querySelector(".accordion-header")
    .addEventListener("click", function () {
      this.classList.toggle("accordion-header-open");
      this.querySelector(".chevron-down-icon").classList.toggle(
        "icon-accordion-open",
      );
      const accContent = item.querySelector(".accordion-content");
      if (accContent.classList.contains("closed-acc")) {
        accContent.classList.add("open-acc");
        accContent.classList.remove("closed-acc");
      } else {
        accContent.classList.remove("open-acc");
        accContent.classList.add("closed-acc");
      }
    });
});

// end accordion

// start feed content card

const generateFeedContentCard = (data) => {
  const {
    srcImg,
    altImg,
    variantTag,
    srcIconTag,
    altIconTag,
    textTag,
    codeReport,
    titleReport,
    address,
    relevantOfficer,
    problemCategory,
    reportDate,
    numberOfProof,
    numberOfUpVote,
  } = data;

  $("#feed-contents").append(
    `<div class="long-card">
                ${
                  srcImg &&
                  `<div class="img-long-card-box">
                  <img src=${srcImg} alt=${altImg} />
                </div>`
                }
                <div class="long-card-texts">
                  <div class="note-report">
                    <span class="tag ${variantTag}">
                      <img src=${srcIconTag} alt=${altIconTag} />
                      ${textTag}
                    </span>
                    <span class="note-text">${codeReport}</span>
                    <span class="middle-dot">&#xb7;</span>
                    <span class="department-name"
                      >${relevantOfficer}</span
                    >
                  </div>
                  <p class="title">
                    ${titleReport}
                  </p>
                  <div class="map-report-box">
                    <div class="location-icon"></div>
                    <p class="map-report description">
                      ${address}
                    </p>
                    <span class="middle-dot">&#xb7;</span>
                    <span class="map-report">${problemCategory}</span>
                  </div>
                </div>
                <div class="long-card-actions">
                  <button class="button btn-like">
                    <span
                      ><img src="/img/icons/like-icon.svg" alt="like-icon"
                    /></span>
                    ${numberOfUpVote}
                  </button>
                  <span class="proof-number">
                    <img src="/img/icons/report-icon.svg" alt="report-icon" />
                    ${numberOfProof} proof
                  </span>
                  <span class="report-date">${reportDate}</span>
                  <a class="btn-nav">
                    Track
                    <span class="proof-number">
                      <img
                        src="/img/icons/arrow-right-icon-green.svg"
                        alt="arrow-right-icon-green" />
                    </span>
                  </a>
                </div>
              </div>`,
  );
};

// communityReportData.map((data) => {
//   generateFeedContentCard(data);
// });

// end feed content card
