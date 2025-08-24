// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // CTA Button Click Event
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      // Scroll to courses section
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Example of dynamically adding featured courses
  const courses = [
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and more to build modern websites."
    },
    {
      title: "Python Programming",
      description: "Start from the basics and become a proficient Python developer."
    },
    {
      title: "Data Science",
      description: "Master data analysis, visualization and machine learning skills."
    }
  ];

  const courseList = document.querySelector(".course-list");

  if (courseList) {
    courseList.innerHTML = ""; // Clear existing courses

    courses.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";

      const title = document.createElement("h3");
      title.textContent = course.title;

      const desc = document.createElement("p");
      desc.textContent = course.description;

      courseCard.appendChild(title);
      courseCard.appendChild(desc);
      courseList.appendChild(courseCard);
    });
  }
});

const courses = [
  {
    title: "Web Development Bootcamp",
    category: "development",
    level: "beginner",
    description: "Learn HTML, CSS, JS and build real projects.",
    thumbnail: "https://via.placeholder.com/280x160?text=Web+Dev"
  },
  {
    title: "Advanced CSS & Sass",
    category: "design",
    level: "advanced",
    description: "Master flexbox, grid, animations, and Sass.",
    thumbnail: "https://via.placeholder.com/280x160?text=CSS+Sass"
  },
  {
    title: "Intro to Data Science",
    category: "data",
    level: "beginner",
    description: "Learn the basics of data analysis and visualization.",
    thumbnail: "https://via.placeholder.com/280x160?text=Data+Science"
  },
  {
    title: "UI/UX Design Principles",
    category: "design",
    level: "intermediate",
    description: "Understand user-centered design and prototyping.",
    thumbnail: "https://via.placeholder.com/280x160?text=UI+UX"
  },
  {
    title: "JavaScript Deep Dive",
    category: "development",
    level: "advanced",
    description: "Asynchronous programming, closures, ES6+ and more.",
    thumbnail: "https://via.placeholder.com/280x160?text=JavaScript"
  }
];

const courseGrid = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");

function renderCourses(courseList) {
  courseGrid.innerHTML = "";

  if (courseList.length === 0) {
    courseGrid.innerHTML = "<p>No courses found.</p>";
    return;
  }

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <img src="${course.thumbnail}" alt="${course.title}">
      <div class="course-card-content">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      </div>
      <button class="enroll-btn">Enroll</button>
    `;

    card.querySelector(".enroll-btn").addEventListener("click", () => {
      alert(`You enrolled in "${course.title}"`);
    });

    courseGrid.appendChild(card);
  });
}

function filterCourses() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const level = levelFilter.value;

  const filtered = courses.filter(course => {
    return (
      (course.title.toLowerCase().includes(keyword) ||
       course.description.toLowerCase().includes(keyword)) &&
      (category === "" || course.category === category) &&
      (level === "" || course.level === level)
    );
  });

  renderCourses(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);
levelFilter.addEventListener("change", filterCourses);

// Initial render
renderCourses(courses);



document.addEventListener("DOMContentLoaded", () => {
  const lessonList = document.getElementById("lessonList");
  const videoPlayer = document.getElementById("videoPlayer");

  lessonList.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "LI") {
      const videoUrl = e.target.getAttribute("data-video");
      videoPlayer.src = videoUrl;

      // Remove active class from all
      Array.from(lessonList.children).forEach(li => li.classList.remove("active"));

      // Add active to current
      e.target.classList.add("active");
    }
  });

  // Set the first lesson as active on load
  const firstLesson = lessonList.querySelector("li");
  if (firstLesson) firstLesson.classList.add("active");
});


// Sample enrolled courses data with progress (in percentage)
const enrolledCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    progress: 45 // %
  },
  {
    id: 2,
    title: "Python Programming",
    progress: 80
  },
  {
    id: 3,
    title: "Data Science Basics",
    progress: 100
  }
];

const coursesContainer = document.getElementById("coursesContainer");

function renderCourses() {
  coursesContainer.innerHTML = "";

  enrolledCourses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <div class="course-header">
        <div class="course-title">${course.title}</div>
        <div>${course.progress}% completed</div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${course.progress}%;"></div>
      </div>

      <div class="buttons">
        <button class="resume-btn">${course.progress === 100 ? "Review" : "Resume"}</button>
        <button class="restart restart-btn">Restart</button>
      </div>
    `;

    // Resume button behavior
    card.querySelector(".resume-btn").addEventListener("click", () => {
      alert(`Resuming course: ${course.title} at ${course.progress}%`);
      // Here, redirect or open course lesson where left off
    });

    // Restart button behavior
    card.querySelector(".restart-btn").addEventListener("click", () => {
      if (confirm(`Are you sure you want to restart "${course.title}"? Your progress will be lost.`)) {
        course.progress = 0;
        renderCourses();
      }
    });

    coursesContainer.appendChild(card);
  });
}

renderCourses();


