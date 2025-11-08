'use client';

import Link from "next/link";
import Header from "../_component/Header";
import { useEffect, useState } from "react";

interface Diary {
  id: number;
  title: string;
  date: string;
  preview: string;
  image: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export default function DiariesPage() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/baby/diaries`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch diaries');
        }
        
        const data = await response.json();
        setDiaries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching diaries:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiaries();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fff2e0] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📖</div>
          <p className="text-[#666666]">다이어리를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#fff2e0] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">😞</div>
          <p className="text-[#666666] mb-4">다이어리를 불러올 수 없습니다</p>
          <p className="text-[#999999] text-sm">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#fff2e0]">
      {/* Header */}
        <Header activeTab="diaries" />

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
          {diaries.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📖</div>
              <p className="text-[#666666] text-lg">아직 작성된 다이어리가 없습니다</p>
              <p className="text-[#999999] text-sm mt-2">첫 번째 다이어리를 작성해보세요!</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {diaries.map((diary: Diary) => (
                <Link
                  key={diary.id}
                  href={`/diary?id=${diary.id}`}
                  className="bg-white rounded-[20px] p-5 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="bg-[#fff4e0] rounded-[20px] h-[180px] flex items-center justify-center mb-4">
                    <img 
                      src={diary.image} 
                      alt={diary.title}
                      className="w-full h-full object-cover rounded-[20px]"
                      onError={(e) => {
                        // 이미지 로드 실패 시 기본 이모지 표시
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-6xl hidden">📖</span>
                  </div>
                  <h3 className="text-[#333333] text-lg font-bold mb-2">{diary.title}</h3>
                  <p className="text-[#999999] text-sm mb-2">{diary.date}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">{diary.preview}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
