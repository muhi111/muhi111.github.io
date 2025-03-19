export default function HomeQuickFacts() {
	return (
		<div className="bg-slate-50 rounded-lg p-8 mb-14">
			<h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
				<span className="text-2xl mr-3">💡</span>
				クイックファクト
			</h2>
			<ul className="space-y-4">
				<li className="flex items-center text-slate-700 text-lg">
					<span className="text-2xl mr-4">🎓</span>
					<span>東京工業大学 在学中</span>
				</li>
				<li className="flex items-center text-slate-700 text-lg">
					<span className="text-2xl mr-4">🖥️</span>
					<span>42 Tokyo 所属</span>
				</li>
				<li className="flex items-center text-slate-700 text-lg">
					<span className="text-2xl mr-4">💻</span>
					<span>情報通信工学を専攻</span>
				</li>
				<li className="flex items-center text-slate-700 text-lg">
					<span className="text-2xl mr-4">🌐</span>
					<span>Web開発に注力</span>
				</li>
				<li className="flex items-center text-slate-700 text-lg">
					<span className="text-2xl mr-4">🚀</span>
					<span>常に学び、成長を続けています</span>
				</li>
			</ul>
		</div>
	);
}
