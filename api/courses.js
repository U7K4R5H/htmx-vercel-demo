export default function handler(req, res) {
  const courses = [
      {
          id: 1,
          title: "HTMX Fundamentals",
          description: "Learn to build dynamic apps without JavaScript.",
          duration: "4 hours",
          level: "Beginner"
      },
      {
          id: 2,
          title: "Tailwind CSS Crash Course",
          description: "Master utility-first CSS in record time.",
          duration: "3 hours",
          level: "Intermediate"
      },
      {
          id: 3,
          title: "Server-Side Rendering",
          description: "Combine HTMX with Django/Node.js for full-stack apps.",
          duration: "5 hours",
          level: "Advanced"
      }
  ];

  if (req.headers["hx-request"]) {
      res.send(`
          ${courses.map(course => `
              <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div class="p-6">
                      <h3 class="text-xl font-bold mb-2">${course.title}</h3>
                      <p class="text-gray-600 mb-4">${course.description}</p>
                      <div class="flex justify-between text-sm text-gray-500">
                          <span>${course.duration}</span>
                          <span>${course.level}</span>
                      </div>
                  </div>
              </div>
          `).join('')}
      `);
  } else {
      res.json(courses);
  }
}