export default function HomeQuickFacts() {
	return (
		<>
			<h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2 md:mb-6 flex items-center">
				About me
			</h2>
			<div className="bg-slate-50 rounded-lg p-2 md:p-8 mb-4 md:mb-14">
				<ul className="space-y-0">
					<li className="flex items-center text-slate-700 text-base md:text-lg py-1 md:py-2 px-2 md:px-4 hover:bg-slate-50 rounded-lg transition-colors duration-200">
						<span className="text-xl md:text-2xl mr-2 md:mr-4">🎓</span>
						<span>東京工業大学 工学院 在学中</span>
					</li>
					<li className="flex items-center text-slate-700 text-base md:text-lg py-1 md:py-2 px-2 md:px-4 hover:bg-slate-50 rounded-lg transition-colors duration-200">
						<span className="text-xl md:text-2xl mr-2 md:mr-4">🌱</span>
						<span>42 Tokyo 所属</span>
					</li>
					<li className="flex items-center text-slate-700 text-base md:text-lg py-1 md:py-2 px-2 md:px-4 hover:bg-slate-50 rounded-lg transition-colors duration-200">
						<span className="text-xl md:text-2xl mr-2 md:mr-4">🌐</span>
						<span>情報通信工学を専攻</span>
					</li>
					<li className="flex items-center text-slate-700 text-base md:text-lg py-1 md:py-2 px-2 md:px-4 hover:bg-slate-50 rounded-lg transition-colors duration-200">
						<span className="text-xl md:text-2xl mr-2 md:mr-4">🖥️</span>
						<span>Web開発やシステムプログラミングが好き</span>
					</li>
				</ul>
			</div>
		</>
	);
}
