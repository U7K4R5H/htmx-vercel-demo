export default function handler(req, res) {
  const courses = [
      {
          id: 1,
          title: "IGCSE First Language English",
          description: "Master essay writing and comprehension skills",
          duration: "12 weeks",
          price: "£40/hour",
          level: "Intermediate"
      },
      {
          id: 2,
          title: "IB English Literature",
          description: "In-depth analysis of prescribed texts",
          duration: "16 weeks",
          price: "£45/hour",
          level: "Advanced"
      }
  ];

  // HTMX compatible response
  if (req.headers['hx-request']) {
      return res.send(`
          ${courses.map(course => `
              <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 class="text-xl font-bold mb-2">${course.title}</h3>
                  <p class="text-gray-600 mb-4">${course.description}</p>
                  <div class="flex justify-between text-sm text-gray-500">
                      <span>${course.duration}</span>
                      <span>${course.price}</span>
                  </div>
              </div>
          `).join('')}
      `);
  }

  // Standard JSON response
  res.json(courses);
}