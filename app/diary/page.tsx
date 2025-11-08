'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../_component/Header";

interface DiaryDetail {
  id: number;
  title: string;
  date: string;
  image: string;
  preview: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export default function DiaryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const diaryId = searchParams.get('id');
  
  const [diary, setDiary] = useState<DiaryDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!diaryId) {
      setError('다이어리 ID가 필요합니다');
      setIsLoading(false);
      return;
    }

    const fetchDiary = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/baby/diaries/${diaryId}`);
        
        if (!response.ok) {
          throw new Error('다이어리를 불러올 수 없습니다');
        }
        
        const data = await response.json();
        setDiary(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching diary:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiary();
  }, [diaryId]);

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

  if (error || !diary) {
    return (
      <div className="min-h-screen bg-[#fff2e0] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">😞</div>
          <p className="text-[#666666] mb-4">다이어리를 불러올 수 없습니다</p>
          <p className="text-[#999999] text-sm">{error}</p>
          <button
            onClick={() => router.back()}
            className="mt-4 bg-[#ff9900] h-12 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            돌아가기
          </button>
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
              <span className="text-9xl hidden">📖</span>
            </div>

            {/* Diary Content */}
            <div className="prose max-w-none">
              <div className="text-[#333333] text-base leading-relaxed whitespace-pre-line">
                {diary.preview}
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

