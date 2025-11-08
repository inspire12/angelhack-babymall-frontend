import { create } from 'zustand';

// 타입 정의
export type MessageRole = 'user' | 'bot';

export interface Message {
  id: string;
  content: string;
  createdAt: string;
  sessionId: string;
}

export interface Session {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  lastMessage?: string;
}

interface ChatState {
  // 상태
  sessions: Session[];
  currentSessionId: string | null;
  messages: Message[];
  isLoading: boolean;
  isSending: boolean;
  hasMore: boolean;
  page: number;
  pageSize: number;

  // Actions
  fetchSessions: () => Promise<void>;
  selectSession: (sessionId: string) => Promise<void>;
  fetchMessages: (page?: number) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  addMessage: (message: Message) => void;
  resetMessages: () => void;
  createNewSession: () => Promise<string>;
}

// API 호출 함수들 (실제 API 엔드포인트에 맞게 수정 필요)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

const fetchSessionsAPI = async (): Promise<Session[]> => {
  const response = await fetch(`${API_BASE_URL}/sessions`);
  if (!response.ok) {
    throw new Error('Failed to fetch sessions');
  }
  return response.json();
};

const fetchMessagesAPI = async (
  sessionId: string,
  lastMessageid: string,
  page: number,
  pageSize: number
): Promise<{ messages: Message[]; hasMore: boolean }> => {
  const response = await fetch(
    `${API_BASE_URL}/sessions/${sessionId}/messages?page=${page}&pageSize=${pageSize}&sort=desc&lastMessageid=${lastMessageid}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
};

const sendMessageAPI = async (
  sessionId: string,
  content: string
): Promise<Message> => {
  const response = await fetch(`${API_BASE_URL}/sessions/${sessionId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
  if (!response.ok) {
    throw new Error('Failed to send message');
  }
  return response.json();
};

const createSessionAPI = async (): Promise<Session> => {
  const response = await fetch(`${API_BASE_URL}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create session');
  }
  return response.json();
};

export const useChatStore = create<ChatState>((set, get) => ({
  // 초기 상태
  sessions: [],
  currentSessionId: null,
  messages: [],
  isLoading: false,
  isSending: false,
  hasMore: true,
  page: 1,
  pageSize: 20,

  // Session 목록 가져오기
  fetchSessions: async () => {
    try {
      set({ isLoading: true });
      const sessions = await fetchSessionsAPI();
      set({ sessions, isLoading: false });
    } catch (error) {
      console.error('Error fetching sessions:', error);
      set({ isLoading: false });
    }
  },

  // Session 선택 및 메시지 로드
  selectSession: async (sessionId: string) => {
    const { currentSessionId } = get();
    
    // 이미 같은 세션이 선택되어 있으면 스킵
    if (currentSessionId === sessionId) {
      return;
    }

    set({
      currentSessionId: sessionId,
      messages: [],
      page: 1,
      hasMore: true,
    });

    // 메시지 가져오기
    await get().fetchMessages(1);
  },

  // 메시지 페이징으로 가져오기 (최신순)
  fetchMessages: async (pageNum?: number) => {
    const { currentSessionId, page, pageSize, messages, hasMore } = get();

    if (!currentSessionId) {
      return;
    }

    // 더 이상 가져올 메시지가 없으면 스킵
    if (!hasMore && pageNum === undefined) {
      return;
    }

    const targetPage = pageNum || page;

    try {
      set({ isLoading: true });
      const { messages: newMessages, hasMore: more } = await fetchMessagesAPI(
        currentSessionId,
        messages[messages.length - 1]?.id,
        targetPage,
        pageSize
      );

      // 최신순이므로 기존 메시지 앞에 추가 (또는 교체)
      if (targetPage === 1) {
        // 첫 페이지는 교체
        set({
          messages: newMessages,
          page: 1,
          hasMore: more,
          isLoading: false,
        });
      } else {
        // 다음 페이지는 기존 메시지 뒤에 추가 (오래된 메시지)
        set({
          messages: [...messages, ...newMessages],
          page: targetPage,
          hasMore: more,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      set({ isLoading: false });
    }
  },

  // 메시지 전송
  sendMessage: async (content: string) => {
    const { currentSessionId, createNewSession } = get();
    let sessionId = currentSessionId;

    // 세션이 없으면 새로 생성
    if (!sessionId) {
      sessionId = await createNewSession();
    }

    // 사용자 메시지 즉시 추가 (optimistic update)
    const userMessage: Message = {
      id: `temp-${Date.now()}`,
      content,
      createdAt: new Date().toISOString(),
      sessionId,
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isSending: true,
    }));

    try {
      // 서버에 메시지 전송
      const sentMessage = await sendMessageAPI(sessionId, content);
      
      // 임시 메시지를 실제 메시지로 교체
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === userMessage.id ? sentMessage : msg
        ),
        isSending: false,
      }));

      // 봇 응답이 있다면 추가로 받아올 수 있음 (실제 API 응답에 따라)
      // 예: 응답에 botMessage가 포함되어 있다면
      // const botMessage = await response.botMessage;
      // if (botMessage) {
      //   get().addMessage(botMessage);
      // }
    } catch (error) {
      console.error('Error sending message:', error);
      // 에러 발생 시 임시 메시지 제거
      set((state) => ({
        messages: state.messages.filter((msg) => msg.id !== userMessage.id),
        isSending: false,
      }));
    }
  },

  // 메시지 직접 추가 (봇 응답 등)
  addMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  // 메시지 초기화
  resetMessages: () => {
    set({
      messages: [],
      page: 1,
      hasMore: true,
    });
  },

  // 새 세션 생성
  createNewSession: async () => {
    try {
      const newSession = await createSessionAPI();
      set((state) => ({
        sessions: [newSession, ...state.sessions],
        currentSessionId: newSession.id,
        messages: [],
        page: 1,
        hasMore: true,
      }));
      return newSession.id;
    } catch (error) {
      console.error('Error creating session:', error);
      throw error;
    }
  },
}));

