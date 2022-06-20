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
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam nesciunt sunt maxime distinctio. Autem eos ea deserunt ipsam fugiat ipsum, laudantium quidem? Quis assumenda corrupti unde alias, laboriosam quo.",
  },
  {
    id: 3,
    name: "Enitan Itunuoluwa",
    job: " Software Engineer",
    img: "img/bolu.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam nesciunt sunt maxime distinctio. Autem eos ea deserunt ipsam fugiat ipsum, laudantium quidem? Quis assumenda corrupti unde alias, laboriosam quo.",
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

// SHOW NEXT PERSON

nextBtn.addEventListener("click", (e) => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
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
});
