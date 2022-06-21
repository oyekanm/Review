const reviews = [
  {
    id: 1,
    name: "Oyekanmi Boluwatife",
    job: "Web Designer",
    img: "img/zayb.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam nesciunt sunt maxime distinctio. Autem eos ea deserunt ipsam fugiat ipsum, laudantium quidem? Quis assumenda corrupti unde alias, laboriosam quo.",
  },
  {
    id: 2,
    name: "Zayb Boluwatife",
    job: " Intern",
    img: "img/omoerin.jpg",
    text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    id: 3,
    name: "Enitan Itunuoluwa",
    job: " Software Engineer",
    img: "img/bolu.jpg",
    text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.",
  },
];

// SELECT ITEMS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".suprise");
const review = document.querySelector(".review");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", (e) => {
  showPerson(currentItem);
  //   console.log(reviews[1]);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

review.addEventListener("dblclick", (e) => {
  // console.log(e);

  nextBtn.classList.remove("active");
  prevBtn.classList.remove("active");
  surpriseBtn.classList.remove("random");
});

// SHOW NEXT PERSON

nextBtn.addEventListener("click", (e) => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
  // console.log(e.target);
  if (e.target.matches(".next-btn")) {
    nextBtn.classList.add("active");
    prevBtn.classList.remove("active");
    surpriseBtn.classList.remove("random");
  }
});

// nextBtn.addEventListener("click", (e) => {
//   for (let i = 0; i < reviews.length; i++) {
//     img.src = reviews[i].img;
//     author.textContent = reviews[i].name;
//     job.textContent = reviews[i].job;
//     info.textContent = reviews[i].text;
//     // if (i === reviews.length - 1) {
//     //   reviews[0];
//     // }
//   }
// });

// SHOW PREVIOUS PERSON

prevBtn.addEventListener("click", (e) => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
  // prevBtn.style.color = "rgb(22, 115, 236)";
  prevBtn.classList.add("active");
  nextBtn.classList.remove("active");
  surpriseBtn.classList.remove("random");
});

// prevBtn.addEventListener("click", (e) => {
//   for (let i = 0; i < reviews.length; i--) {
//     img.src = reviews[i].img;
//     author.textContent = reviews[i].name;
//     job.textContent = reviews[i].job;
//     info.textContent = reviews[i].text;
//   }
// });

//

surpriseBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  //   console.log(currentItem);

  showPerson(currentItem);
  surpriseBtn.classList.add("random");
  nextBtn.classList.remove("active");
  prevBtn.classList.remove("active");
});
