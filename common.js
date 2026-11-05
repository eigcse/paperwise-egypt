// ===== Settings you can change =====
// Where full past-paper PDFs live. Files are expected at:
//   PDF_BASE + "2024-May-June/0580_s24_qp_42.pdf"
var PDF_BASE = "https://pastpapers.co/cie/IGCSE/Mathematics-0580/";
// Where your classified (topic) booklets live, e.g. a "classified" folder in this repo.
//   CLASSIFIED_BASE + "0580_algebra_p4_qp.pdf"
var CLASSIFIED_BASE = "classified/";
// ===================================

var ZIGZAG_UP = '<svg class="zz" aria-hidden="true"><defs><pattern id="zzu" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10 L10 0 L20 10 Z" fill="#D4A63A"/></pattern></defs><rect width="100%" height="10" fill="url(#zzu)"/></svg>';
var ZIGZAG_DOWN = '<svg class="zz" aria-hidden="true"><defs><pattern id="zzd" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 0 L10 10 L20 0 Z" fill="#F3E7CC"/></pattern></defs><rect width="100%" height="10" fill="url(#zzd)"/></svg>';
var LOGO = '<svg width="40" height="34" viewBox="0 0 40 34" aria-hidden="true"><path d="M20 3 L37 31 H3 Z" fill="#D4A63A"/><path d="M20 3 L37 31 H20 Z" fill="#0B2E4A" opacity="0.25"/></svg>';

(function () {
  var page = document.body.getAttribute("data-page");
  var links = [
    ["index.html", "Subjects", "home"],
    ["papers.html", "Past papers", "papers"],
    ["classified.html", "Classified", "classified"],
    ["practice.html", "Practice mode", "practice"],
    ["quiz.html", "Quiz", "quiz"]
  ];
  var nav = links.map(function (l) {
    return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : "") + ">" + l[1] + "</a>";
  }).join("");
  var head = document.getElementById("site-head");
  if (head) {
    head.className = "site-head";
    head.innerHTML =
      '<div class="wrap"><a class="logo" href="index.html">' + LOGO +
      '<span><b>Paperwise <span>Egypt</span></b><small lang="ar" dir="rtl">امتحانات IGCSE السابقة</small></span></a>' +
      '<nav class="nav" aria-label="Main">' + nav + "</nav></div>" + ZIGZAG_UP;
  }
  var foot = document.getElementById("site-foot");
  if (foot) {
    foot.className = "foot";
    foot.innerHTML = ZIGZAG_DOWN +
      '<div class="wrap"><div class="cols">' +
      '<div><b style="font-size:22px;color:#fff;font-weight:900">Paperwise <span style="color:#D4A63A">Egypt</span></b>' +
      '<p style="margin:8px 0 0">Free IGCSE revision for students in Cairo, Giza, Alexandria and across Egypt.</p></div>' +
      '<nav aria-label="Revise"><strong>Revise</strong><a href="papers.html">Past papers</a><a href="classified.html">Classified by topic</a><a href="practice.html">Practice mode</a><a href="quiz.html">1-hour quiz</a></nav>' +
      '<nav aria-label="Help"><strong>Help</strong><a href="mailto:hello@example.com">Contact us</a><a href="mailto:hello@example.com?subject=Broken%20link">Report a broken link</a></nav>' +
      '</div><p class="legal">Past papers, mark schemes and examiner reports belong to their exam boards. PDF links open files hosted by a third-party archive. Paperwise Egypt is an independent study tool, not affiliated with Cambridge University Press &amp; Assessment, Pearson Edexcel or the Egyptian Ministry of Education.</p></div>';
  }
})();

function pad(n) { return String(n).padStart(2, "0"); }
