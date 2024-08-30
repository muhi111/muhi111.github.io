import "tailwindcss/tailwind.css";

function Home({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`flex items-center ${isSidebarOpen ? "justify-center" : "justify-center"} min-h-screen bg-gray-100 py-10`}
    >
      <div
        className={`w-full ${isSidebarOpen ? "max-w-5xl" : "max-w-6xl"} px-4`}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              <img
                src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&width=435&lines=Hi!+%F0%9F%91%8B++I'm+muhi111.+;I'm+a+student.;I'm+a+web+developer."
                alt="Typing SVG"
              />
            </h1>
            <div className="mb-6">
              <p className="text-xl mb-4 text-gray-700">
                A passionate student at Tokyo Institute of Technology, majoring
                in Information and Communications Engineering. Also, I'm a
                student at 42 Tokyo.
              </p>
              <p className="text-lg text-gray-600">
                I'm enthusiastic about web development and constantly learning
                new technologies to build innovative solutions.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Quick Facts
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>🎓 Studying at Tokyo Institute of Technology</li>
                <li>🖥️ Student at 42 Tokyo</li>
                <li>
                  💻 Focusing on Information and Communications Engineering
                </li>
                <li>🌐 Exploring the world of web development</li>
                <li>🚀 Always eager to learn and grow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
