var tableData = [
  {
    event_name: "almas de ingeniería",
    date: "15-09-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-almas-de-ingenieria",
  },
  {
    event_name: "Introduction to Git/Github",
    date: "20-09-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-introduction-to-gitgithub/",
  },
  {
    event_name: "Data Structures & Algorithms",
    date: "27-09-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-data-structures-algorithms/",
  },
  {
    event_name: "Hacktoberfest Meetup",
    date: "29-09-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-hacktoberfest-meetup/",
  },
  {
    event_name: "Deep Dive into Google Cloud",
    date: "24-10-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-deep-dive-into-google-cloud/",
  },
  {
    event_name: "Get it Done with the Experts",
    date: "15-11-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-get-it-done-with-the-experts/",
  },
  {
    event_name: "Learning From Experiences",
    date: "19-11-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-learning-from-experiences/",
  },
  {
    event_name: "Number Theory and Mathematics",
    date: "5-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-number-theory-and-mathematics/",
  },
  {
    event_name: "DSC WOW",
    date: "10-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-dsc-wow-indias-biggest-collaboration/",
  },
  {
    event_name: "Fireside with flutter Expert",
    date: "22-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-fireside-with-flutter-expert/",
  },
  {
    event_name: "Android Study Jam",
    date: "27-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-android-study-jam/",
  },
  {
    event_name: "Web Development",
    date: "27-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-web-development/",
  },
  {
    event_name: "CSS 101 of Web Development",
    date: "30-12-2020",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-css-101-of-web-development/",
  },
  {
    event_name: "Become an Android Developer",
    date: "06-01-2021",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-become-an-android-developer/",
  },
  {
    event_name: "Arrays and Bit Manipulation",
    date: "09-01-2021",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-arrays-and-bit-manipulation/",
  },
  {
    event_name: "Android 101",
    date: "12-01-2021",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-android-101/",
  },
  {
    event_name: "Let's Android",
    date: "16-01-2021",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-lets-android/",
  },
  {
    event_name: "LET'S APP IT",
    date: "19-01-2021",
    venue: "Youtube",
    see_more:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-lets-app-it/",
  },
];

/*
	1 - Loop Through Array & Access each value
  2 - Create Table Rows & append to table
*/

var state = {
  querySet: tableData,

  page: 1,
  rows: 3,
  window: 3,
};

buildTable();

function pagination(querySet, page, rows) {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;

  var trimmedData = querySet.slice(trimStart, trimEnd);

  var pages = Math.round(querySet.length / rows);

  return {
    querySet: trimmedData,
    pages: pages,
  };
}

function pageButtons(pages) {
  var wrapper = document.getElementById("pagination-wrapper");

  wrapper.innerHTML = ``;
  console.log("Pages:", pages);

  var maxLeft = state.page - Math.floor(state.window / 2);
  var maxRight = state.page + Math.floor(state.window / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = state.window;
  }

  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1);

    if (maxLeft < 1) {
      maxLeft = 1;
    }
    maxRight = pages;
  }

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btns btn-sm btn-info">${page}</button>`;
  }

  if (state.page != 1) {
    wrapper.innerHTML =
      `<button value=${1} class="page btns btn-sm btn-info">&#171; </button>` +
      wrapper.innerHTML;
  }

  if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btns btn-sm btn-info"> &#187;</button>`;
  }

  $(".page").on("click", function () {
    $("#table-body").empty();

    state.page = Number($(this).val());

    buildTable();
  });
}

function buildTable() {
  tbody = document;
  var table = $("#table-body");

  var data = pagination(state.querySet, state.page, state.rows);
  var myList = data.querySet;

  for (var i = 1 in myList) {
    //Keep in mind we are using "Template Litterals to create rows"
    var row = `<tr>
                  <td>${myList[i].event_name}</td>
                  <td>${myList[i].date}</td>
                  <td>${myList[i].venue}</td>
                  <td><a href="${myList[i].see_more}">READ MORE</a></td>
                  `;
    table.append(row);
  }

  pageButtons(data.pages);
}
