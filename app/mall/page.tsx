import Link from "next/link";

const products = [
  {
    id: 1,
    emoji: "📦",
    name: "프리미엄 기저귀 대용량 패키지",
    rating: 4.9,
    reviews: 324,
    price: 42900,
  },
  {
    id: 2,
    emoji: "🍼",
    name: "유리 젖병 세트 (4개입)",
    rating: 4.8,
    reviews: 189,
    price: 38500,
  },
  {
    id: 3,
    emoji: "🥄",
    name: "이유식 식기 세트 (6종)",
    rating: 4.7,
    reviews: 256,
    price: 45000,
  },
  {
    id: 4,
    emoji: "🧸",
    name: "신생아 모빌 & 딸랑이 세트",
    rating: 4.8,
    reviews: 412,
    price: 32000,
  },
  {
    id: 5,
    emoji: "👶",
    name: "베이비 옷 세트 (3벌)",
    rating: 4.6,
    reviews: 278,
    price: 58000,
  },
  {
    id: 6,
    emoji: "🛁",
    name: "신생아 목욕 세트",
    rating: 4.9,
    reviews: 367,
    price: 35000,
  },
];

const expertProducts = [
  {
    id: 1,
    emoji: "🌟",
    name: "신생아 필수 키트 세트",
    description: "기저귀, 물티슈, 크림 등 신생아 필수용품을 한번에!",
    price: 89900,
  },
  {
    id: 2,
    emoji: "💝",
    name: "수유용품 스타터 패키지",
    description: "젖병, 유축기, 수유쿠션 등 초보 엄마를 위한 완벽 세트",
    price: 125000,
  },
  {
    id: 3,
    emoji: "🎁",
    name: "이유식 준비 완전 정복 세트",
    description: "이유식기, 체, 믹서 등 이유식 시작에 필요한 모든 것",
    price: 98000,
  },
];

export default function MallPage() {
  return (
    <div className="min-h-screen bg-[#fff2e0]">
      {/* Header */}
      <header className="bg-[#fffaf2] border-b border-[#ffe5b2] h-20 flex items-center justify-between px-8">
        <div className="flex gap-4">
          <Link
            href="/"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#666666] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            홈
          </Link>
          <Link
            href="/"
            className="bg-[#ffe5bf] h-11 px-6 rounded-[20px] text-[#666666] text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            챗봇
          </Link>
          <button className="bg-[#ff9900] h-11 px-6 rounded-[20px] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            쇼핑
          </button>
        </div>
        <button className="bg-[#ff9900] rounded-[25px] w-[50px] h-[50px] flex items-center justify-center text-white text-xl hover:opacity-90 transition-opacity">
          🛒
        </button>
      </header>

      <div className="flex gap-6 p-6">
        {/* Filter Sidebar */}
        <aside className="bg-[#fff7eb] rounded-[20px] p-6 w-[300px] h-fit sticky top-6">
          <h2 className="text-[#4d4d4d] text-xl font-bold mb-6">필터</h2>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-[#666666] text-base font-semibold mb-4">카테고리</h3>
            <div className="space-y-3">
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-11 flex items-center px-4 text-[#4d4d4d] text-sm hover:bg-[#fff7eb] transition-colors">
                💧 기저귀 & 위생용품
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-11 flex items-center px-4 text-[#4d4d4d] text-sm hover:bg-[#fff7eb] transition-colors">
                🍼 수유용품
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-11 flex items-center px-4 text-[#4d4d4d] text-sm hover:bg-[#fff7eb] transition-colors">
                🥄 이유식 & 식기
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-11 flex items-center px-4 text-[#4d4d4d] text-sm hover:bg-[#fff7eb] transition-colors">
                🧸 장난감 & 교구
              </button>
            </div>
          </div>

          {/* Age Filters */}
          <div className="mb-8">
            <h3 className="text-[#666666] text-base font-semibold mb-4">연령대</h3>
            <div className="space-y-3">
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-10 flex items-center px-4 text-[#4d4d4d] text-[13px] hover:bg-[#fff7eb] transition-colors">
                👶 0-6개월
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-10 flex items-center px-4 text-[#4d4d4d] text-[13px] hover:bg-[#fff7eb] transition-colors">
                👦 6-12개월
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-10 flex items-center px-4 text-[#4d4d4d] text-[13px] hover:bg-[#fff7eb] transition-colors">
                🧒 12-24개월
              </button>
            </div>
          </div>

          {/* Price Filters */}
          <div>
            <h3 className="text-[#666666] text-base font-semibold mb-4">가격대</h3>
            <div className="space-y-3">
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-10 flex items-center px-4 text-[#4d4d4d] text-[13px] hover:bg-[#fff7eb] transition-colors">
                ₩10,000 - ₩30,000
              </button>
              <button className="w-full bg-[#fff2e0] border border-[#ffe0b2] rounded-xl h-10 flex items-center px-4 text-[#4d4d4d] text-[13px] hover:bg-[#fff7eb] transition-colors">
                ₩30,000 - ₩50,000
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Search Bar */}
          <div className="bg-[#fffcf7] border border-[#ffd9a6] rounded-[25px] h-[70px] px-6 flex items-center mb-6">
            <input
              type="text"
              placeholder="🔍 육아용품을 검색해보세요..."
              className="flex-1 outline-none text-base text-[#999999] bg-transparent"
            />
          </div>

          {/* Recommended Products */}
          <section className="mb-8">
            <h2 className="text-[#4d4d4d] text-[22px] font-bold mb-6">추천 상품</h2>
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-[#ffe5bf] rounded-[20px] p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#fff5e0] rounded-[16px] h-[280px] flex items-center justify-center mb-4">
                    <span className="text-8xl">{product.emoji}</span>
                  </div>
                  <h3 className="text-[#333333] text-base font-semibold mb-2">{product.name}</h3>
                  <p className="text-[#999999] text-[13px] mb-2">
                    ⭐ {product.rating} ({product.reviews})
                  </p>
                  <p className="text-[darkorange] text-xl font-bold mb-4">
                    ₩{product.price.toLocaleString()}
                  </p>
                  <button className="w-full bg-[#ff9900] h-[50px] rounded-xl text-white text-[15px] font-semibold hover:opacity-90 transition-opacity">
                    장바구니 추가
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Recommended Section */}
          <section className="bg-[#fff5e5] rounded-[24px] p-8">
            <h2 className="text-[#4d4d4d] text-2xl font-bold mb-2">
              👩‍⚕️ 육아 전문가 추천 상품
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              신생아부터 유아기까지 필요한 필수 아이템을 전문가가 선별했습니다
            </p>
            <div className="grid grid-cols-3 gap-6">
              {expertProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-2 border-[#ffe5bf] rounded-[20px] p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#fff7e5] rounded-[16px] h-[240px] flex items-center justify-center mb-4">
                    <span className="text-6xl">{product.emoji}</span>
                  </div>
                  <h3 className="text-[#333333] text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[13px] mb-4">{product.description}</p>
                  <p className="text-[darkorange] text-[22px] font-bold mb-4">
                    ₩{product.price.toLocaleString()}
                  </p>
                  <button className="w-full bg-[#ff9900] h-[50px] rounded-xl text-white text-[15px] font-semibold hover:opacity-90 transition-opacity">
                    지금 구매하기
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}