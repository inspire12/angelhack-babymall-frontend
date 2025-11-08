'use client';

import Link from "next/link";

const diaries = [
  {
    id: 1,
    title: "첫 이유식 성공! 🥄",
    date: "2024.01.15",
    preview: "오늘 우리 아기가 처음으로 이유식을 먹었어요...",
    image: "🥄",
  },
  {
    id: 2,
    title: "첫 걸음마! 👶",
    date: "2024.01.10",
    preview: "드디어 첫 걸음마를 떼었어요! 정말 감동이었습니다...",
    image: "👶",
  },
  {
    id: 3,
    title: "목욕 시간 즐거워요 🛁",
    date: "2024.01.08",
    preview: "목욕을 정말 좋아하는 우리 아기, 웃음소리가...",
    image: "🛁",
  },
  {
    id: 4,
    title: "첫 웃음 😊",
    date: "2024.01.05",
    preview: "오늘 처음으로 진짜 웃음을 봤어요! 너무 귀여워요...",
    image: "😊",
  },
  {
    id: 5,
    title: "잠자는 모습이 천사 같아요 😴",
    date: "2024.01.03",
    preview: "잠든 모습이 정말 천사 같아서 사진을 찍었어요...",
    image: "😴",
  },
  {
    id: 6,
    title: "첫 목욕 🛁",
    date: "2024.01.01",
    preview: "생후 첫 목욕을 했어요! 처음엔 울었지만...",
    image: "🛁",
  },
];

export default function DiariesPage() {
  return (
    <div className="min-h-screen bg-[#fff2e0]">
      {/* Header */}
      <header className="bg-[#fffaf2] border-b border-[#ffe5b2] h-20 flex-shrink-0 flex items-center justify-between px-8">
        <div className="flex gap-4">
          <Link
            href="/"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#4d4d4d] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            챗봇
          </Link>
          <Link
            href="/mall"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#4d4d4d] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            쇼핑
          </Link>
          <button className="bg-[#ff9900] h-11 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            다이어리
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#fffaf2] p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[#333333] text-2xl font-bold">육아 다이어리</h1>
            <button className="bg-[#ff9900] h-[50px] px-6 rounded-[25px] text-white text-base font-semibold hover:opacity-90 transition-opacity">
              + 새 다이어리 작성
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-[30px] h-[60px] px-6 flex items-center mb-8">
            <input
              type="text"
              placeholder="🔍 다이어리를 검색해보세요..."
              className="flex-1 outline-none text-base text-[#999999] bg-transparent"
            />
          </div>

          {/* Diary Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {diaries.map((diary) => (
              <Link
                key={diary.id}
                href={`/diary?id=${diary.id}`}
                className="bg-white rounded-[20px] p-5 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="bg-[#fff4e0] rounded-[20px] h-[180px] flex items-center justify-center mb-4">
                  <span className="text-6xl">{diary.image}</span>
                </div>
                <h3 className="text-[#333333] text-lg font-bold mb-2">{diary.title}</h3>
                <p className="text-[#999999] text-sm mb-2">{diary.date}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{diary.preview}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
