'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DiaryPage() {
  const router = useRouter();

  // This would typically come from route params or props
  const diary = {
    id: 1,
    title: "첫 이유식 성공! 🥄",
    date: "2024.01.15",
    image: "🥄",
    content: `오늘 우리 아기가 처음으로 이유식을 먹었어요. 정말 설레는 순간이었습니다.

아침에 이유식을 준비하면서 손이 떨렸어요. 처음이라서 걱정도 되고 기대도 되었거든요. 아기가 처음에는 낯설어했지만, 조금씩 맛을 보더니 이내 좋아하는 모습을 보였어요.

이유식은 당근과 고구마를 갈아서 만들었는데, 아기가 한 숟가락씩 먹는 모습이 너무 귀여웠어요. 처음에는 조금만 먹고 그만두었지만, 나중에는 더 먹고 싶어하는 것 같았어요.

이제 앞으로 다양한 이유식을 만들어서 아기에게 맛있는 경험을 선사해주고 싶어요. 육아의 즐거움을 느낄 수 있는 하루였습니다.`,
  };

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
          <Link
            href="/diaries"
            className="bg-[#ff9900] h-11 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            다이어리
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#fffaf2] p-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-6 text-[#666666] text-sm font-semibold hover:text-[#333333] transition-colors flex items-center gap-2"
          >
            ← 목록으로 돌아가기
          </button>

          {/* Diary Content */}
          <article className="bg-white rounded-[24px] p-8">
            {/* Diary Header */}
            <div className="mb-6">
              <h1 className="text-[#333333] text-3xl font-bold mb-4">{diary.title}</h1>
              <p className="text-[#999999] text-base">{diary.date}</p>
            </div>

            {/* Diary Image */}
            <div className="bg-[#fff4e0] rounded-[20px] h-[400px] flex items-center justify-center mb-8">
              <span className="text-9xl">{diary.image}</span>
            </div>

            {/* Diary Content */}
            <div className="prose max-w-none">
              <div className="text-[#333333] text-base leading-relaxed whitespace-pre-line">
                {diary.content}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-[#ffe5b2]">
              <button className="bg-[#ff9900] h-12 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                수정하기
              </button>
              <button className="bg-[#ffe5bf] h-12 px-6 rounded-[20px] text-[#4d4d4d] text-sm font-semibold hover:opacity-90 transition-opacity">
                삭제하기
              </button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

