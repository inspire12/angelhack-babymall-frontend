import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff2e0]">
      {/* Header */}
      <header className="bg-[#fffaf2] border-b border-[#ffe5b2] h-20 flex items-center justify-between px-8">
        <div className="flex gap-4">
          <button className="bg-[#ff9900] h-11 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            챗봇
          </button>
          <Link
            href="/mall"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#4d4d4d] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            쇼핑
          </Link>
        </div>
      </header>

      {/* Chat Interface */}
      <main className="bg-[#fffaf2] min-h-[calc(100vh-80px)] p-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-[#333333] text-lg font-bold mb-4">육아 상담 챗봇</h1>

          {/* Chat Messages Area */}
          <div className="bg-[#fffcfa] rounded-[24px] p-6 min-h-[680px] mb-6 relative">
            {/* Welcome Message */}
            <p className="text-gray-500 text-sm mb-6">
              👋 안녕하세요! 육아에 관한 궁금한 점을 물어보세요.
            </p>

            {/* User Message */}
            <div className="mb-4 flex justify-start">
              <div className="bg-[#ff9900] rounded-[20px] px-5 py-3 max-w-[240px]">
                <p className="text-white text-[13px]">
                  6개월 아기가 잘 안 잠들어요
                </p>
              </div>
            </div>

            {/* Bot Response */}
            <div className="mb-4 flex justify-end">
              <div className="bg-[#fff0d1] rounded-[20px] px-5 py-3 max-w-[368px]">
                <p className="text-[#4d4d4d] text-[13px] mb-2">
                  6개월 아기의 수면 패턴이 변하는 시기입니다. 다음과 같은 방법을 시도해보세요:
                </p>
                <div className="text-gray-500 text-xs space-y-1">
                  <p>• 규칙적인 수면 일정 유지</p>
                  <p>• 잠자리 전 루틴 만들기</p>
                  <p>• 적절한 온도와 조명 조절</p>
                </div>
              </div>
            </div>

            {/* Recommended Questions Section */}
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
          </div>

          {/* Input Area */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 bg-white border-2 border-[#ffd999] rounded-[30px] h-[70px] px-6 flex items-center">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="flex-1 outline-none text-sm text-[#999999] bg-transparent"
              />
            </div>
            <button className="bg-[#ff9900] rounded-[30px] w-[50px] h-[50px] flex items-center justify-center text-white text-lg hover:opacity-90 transition-opacity">
              ➤
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
