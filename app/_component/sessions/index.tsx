'use client';

import { useChatStore } from '../../_state/chat/store';
import { useEffect } from 'react';

export function Sessions() {
  const { sessions, currentSessionId, fetchSessions, selectSession, createNewSession } = useChatStore();

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const handleSessionClick = (sessionId: string) => {
    selectSession(sessionId);
  };

  const handleNewSession = async () => {
    try {
      await createNewSession();
    } catch (error) {
      console.error('Failed to create new session:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return '어제';
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* New Session Button */}
      <button
        onClick={handleNewSession}
        className="bg-[#ff9900] h-8 px-4 rounded-[16px] text-white text-xs font-semibold hover:opacity-90 transition-opacity mb-4 w-full"
      >
        + 새 대화
      </button>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {sessions.length === 0 ? (
          <div className="text-center text-gray-500 text-sm py-8">
            대화가 없습니다.<br />
            새 대화를 시작해보세요!
          </div>
        ) : (
          sessions.map((session) => (
            <button
              key={session.sessionId}
              onClick={() => handleSessionClick(session.sessionId)}
              className={`w-full text-left p-3 rounded-[12px] transition-colors ${
                currentSessionId === session.sessionId
                  ? 'bg-[#ff9900] text-white'
                  : 'bg-[#fffcf7] border border-[#ffe0b2] text-[#4d4d4d] hover:bg-[#fff7eb]'
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className={`text-sm font-semibold truncate flex-1 ${
                  currentSessionId === session.sessionId ? 'text-white' : 'text-[#333333]'
                }`}>
                  {session.title || '새 대화'}
                </h3>
                <span className={`text-xs ml-2 flex-shrink-0 ${
                  currentSessionId === session.sessionId ? 'text-white/80' : 'text-[#999999]'
                }`}>
                  {formatDate(session.createdAt)}
                </span>
              </div>
              {session.lastMessage && (
                <p className={`text-xs truncate ${
                  currentSessionId === session.sessionId ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {session.lastMessage}
                </p>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

