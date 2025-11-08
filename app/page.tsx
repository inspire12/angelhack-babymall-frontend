'use client';
import Link from "next/link";
import UserMessage from "./_component/userMessage";
import { BotMessage } from "./_component/botMessage";
import { FAQ } from "./_component/FAQ";
import { Sessions } from "./_component/sessions";
import { useEffect, useState } from "react";
import { useChatStore } from "./_state/chat";

export default function Home() {
  const [isSessionsOpen, setIsSessionsOpen] = useState(true);
  const { messages, currentSessionId, fetchMessages } = useChatStore();
  useEffect(() => {
      fetchMessages();
  }, [currentSessionId]);
  console.log(messages)
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
      <main className="bg-[#fffaf2] flex-1 overflow-hidden flex flex-row min-h-0 gap-0 p-4">
        {/* Sidebar - Sessions */}
        <aside className={`flex flex-col transition-all duration-300 ease-in-out ${
          isSessionsOpen ? 'w-[300px]' : 'w-0'
        } overflow-hidden flex-shrink-0`}>
          <div className={`bg-[#fff7eb] rounded-[20px] p-4 h-full flex flex-col ${
            isSessionsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-300`}>
            <button
              onClick={() => setIsSessionsOpen(!isSessionsOpen)}
              className="w-full flex items-center justify-between mb-4"
            >
              <h2 className="text-[#666666] text-sm font-semibold">대화 목록</h2>
            </button>
            {isSessionsOpen && <Sessions />}
          </div>
        </aside>

        {/* Toggle Button */}
        <button
          onClick={() => setIsSessionsOpen(!isSessionsOpen)}
          className={`self-start mt-2 bg-[#ff9900] rounded-r-[20px] w-8 h-12 flex items-center justify-center text-white text-sm hover:opacity-90 transition-opacity flex-shrink-0 ${
            isSessionsOpen ? '' : 'rounded-l-[20px]'
          }`}
        >
          {isSessionsOpen ? '◀' : '▶'}
        </button>

        {/* Main Chat Area */}
        <div className="flex-1 min-w-0 flex flex-col flex-1 min-h-0 px-3 pt-4 pb-4">
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
              {
                messages?.map(message => {
                  console.log(message);
                  return message.role === 'USER' ? <UserMessage message={message.content} /> : <BotMessage message={message.content} />
                })
              }
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
