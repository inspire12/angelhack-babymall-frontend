'use client';
import Link from "next/link";
import UserMessage from "./_component/userMessage";
import { BotMessage } from "./_component/botMessage";
import { FAQ } from "./_component/FAQ";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

  }, []);
  return (
    <div className="h-screen max-h-screen bg-[#fff2e0] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-[#fffaf2] border-b border-[#ffe5b2] h-20 flex-shrink-0 flex items-center justify-between px-8">
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
          <Link
            href="/diaries"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#4d4d4d] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            다이어리
          </Link>
        </div>
      </header>

      {/* Chat Interface */}
      <main className="bg-[#fffaf2] flex-1 overflow-hidden flex flex-col min-h-0">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 min-h-0 px-8 pt-8 pb-4">
          {/* Title */}
          <h1 className="text-[#333333] text-lg font-bold mb-2 flex-shrink-0">육아 상담 챗봇</h1>

          {/* Chat Messages Area */}
          <div className="bg-[#fffcfa] rounded-[24px] px-6 pt-2 pb-2 mb-1 flex-1 min-h-0 flex flex-col overflow-hidden" style={{ flex: '1 1 0%' }}>
            <div className="overflow-y-auto overflow-x-hidden flex-1 pr-2 space-y-4" style={{ minHeight: 0 }}>
              {/* Welcome Message */}
              <p className="text-gray-500 text-sm mb-6">
                👋 안녕하세요! 육아에 관한 궁금한 점을 물어보세요.
              </p>

              {/* User Message */}
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />

              {/* Bot Response */}
              <BotMessage message="
              6개월 아기의 수면 패턴이 변하는 시기입니다. 다음과 같은 방법을 시도해보세요:
              
                    <p>• 규칙적인 수면 일정 유지</p>
                    <p>• 잠자리 전 루틴 만들기</p>
                    <p>• 적절한 온도와 조명 조절</p>
              " />        
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              <UserMessage message="6개월 아기가 잘 안 잠들어요" />
              </div>
            </div>
          {/* Input Area */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <div className="">
              <FAQ />
            </div>
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
        </div>
      </main>
    </div>
  );
}
