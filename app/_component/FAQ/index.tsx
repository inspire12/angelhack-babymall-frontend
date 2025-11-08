export function FAQ() {
    
    return (
        <div className="bg-[#fff7eb] rounded-[20px] p-6 mt-8">
            <h2 className="text-[#666666] text-sm font-semibold mb-4">자주 묻는 질문</h2>
            <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                💡 이유식 언제 시작하나요?
            </button>
            <button className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                🌙 잠 자기 전 루틴 추천
            </button>
            <button className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                👶 신생아 목욕 방법
            </button>
            <button className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                🍼 수유량은 얼마나 적절한가요?
            </button>
            </div>
        </div>
    )
}