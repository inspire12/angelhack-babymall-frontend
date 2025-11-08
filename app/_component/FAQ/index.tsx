'use client';

import { useChatStore } from '@/app/_state/chat';
import { useBooleanState } from 'react-simplikit';

export function FAQ() {
    const [open, _1, _2, toggleBottomSheet] = useBooleanState(false);
    const { sendMessage } = useChatStore()
    return (
        <div className="bg-[#fff7eb] rounded-[20px] p-4">
            <button 
                onClick={toggleBottomSheet}
                className="w-full flex items-center justify-between mb-1"
            >
                <h2 className="text-[#666666] text-sm font-semibold">자주 묻는 질문</h2>
                <span className="text-[#666666] mr-3 text-lg transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                </span>
            </button>
            <div 
                className={`grid grid-cols-2 gap-3 overflow-hidden transition-all duration-300 ease-in-out 
                    ${!open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <button onClick={() => sendMessage('이유식 언제 시작하나요?', 'user')} className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                    💡 이유식 언제 시작하나요?
                </button>
                <button onClick={() => sendMessage('잠 자기 전 루틴 추천', 'user')} className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                    🌙 잠 자기 전 루틴 추천
                </button>
                <button onClick={() => sendMessage('신생아 목욕 방법', 'user')} className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                    👶 신생아 목욕 방법
                </button>
                <button onClick={() => sendMessage('수유량은 얼마나 적절한가요?', 'user')} className="bg-[#fffcf7] border border-[#ffe0b2] rounded-xl h-12 flex items-center px-4 text-[#4d4d4d] text-xs hover:bg-[#fff7eb] transition-colors">
                    🍼 수유량은 얼마나 적절한가요?
                </button>
            </div>
        </div>
    )
}