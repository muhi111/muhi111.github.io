export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
			<div className="max-w-5xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
					<div className="p-10">
						{/* Hero Section */}
						<div className="mb-14">
							<div className="relative h-14 mb-10">
								<img
									src="/portfolio/typing.svg"
									alt="Hi I'm muhi111. I'm a student. I'm a web developer."
									className="h-full w-auto"
								/>
							</div>

							<p className="text-xl text-gray-800 mb-6 leading-relaxed">
								A passionate student at Tokyo Institute of Technology, majoring
								in Information and Communications Engineering. Also, I'm a
								student at 42 Tokyo.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								I'm enthusiastic about web development and constantly learning
								new technologies to build innovative solutions.
							</p>
						</div>

						{/* Quick Facts Section */}
						<div className="bg-gray-50 rounded-lg p-8">
							<h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
								<span className="material-icons-outlined mr-3">lightbulb</span>
								Quick Facts
							</h2>
							<ul className="space-y-4">
								<li className="flex items-center text-gray-700 text-lg">
									<span className="text-2xl mr-4">🎓</span>
									<span>Studying at Tokyo Institute of Technology</span>
								</li>
								<li className="flex items-center text-gray-700 text-lg">
									<span className="text-2xl mr-4">🖥️</span>
									<span>Student at 42 Tokyo</span>
								</li>
								<li className="flex items-center text-gray-700 text-lg">
									<span className="text-2xl mr-4">💻</span>
									<span>
										Focusing on Information and Communications Engineering
									</span>
								</li>
								<li className="flex items-center text-gray-700 text-lg">
									<span className="text-2xl mr-4">🌐</span>
									<span>Exploring the world of web development</span>
								</li>
								<li className="flex items-center text-gray-700 text-lg">
									<span className="text-2xl mr-4">🚀</span>
									<span>Always eager to learn and grow</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
