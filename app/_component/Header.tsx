import Link from "next/link";

interface HeaderProps {
  activeTab?: 'chat' | 'diaries' | 'mall';
}

export default function Header({ activeTab = 'chat' }: HeaderProps) {
  return (
    <header className="bg-[#fffaf2] border-b border-[#ffe5b2] h-20 flex-shrink-0 flex items-center justify-between px-8">
      <div className="flex gap-4">
        <Link
          href="/"
          className={`h-11 px-6 rounded-[20px] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center ${
            activeTab === 'chat' 
              ? 'bg-[#ff9900] text-white' 
              : 'bg-[#ffe5bf] text-[#4d4d4d]'
          }`}
        >
          챗봇
        </Link>
        <Link
          href="/diaries"
          className={`h-11 px-6 rounded-[20px] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center ${
            activeTab === 'diaries' 
              ? 'bg-[#ff9900] text-white' 
              : 'bg-[#ffe5bf] text-[#4d4d4d]'
          }`}
        >
          다이어리
        </Link>
        <Link
          href="/mall"
          className={`h-11 px-6 rounded-[20px] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center ${
            activeTab === 'mall' 
              ? 'bg-[#ff9900] text-white' 
              : 'bg-[#ffe5bf] text-[#4d4d4d]'
          }`}
        >
          쇼핑
        </Link>
      </div>
    </header>
  );
}