#!/usr/bin/env bash
set -e

###################################
# 변수 설정
###################################

frontend_root="$(cd "$(dirname "$0")" && pwd)"

# ✅ spring 백엔드 경로 변수화
backend_root="/Users/yeonghakseo/Documents/workspace/hackerthon/angelhack-babycaremall"
spring_static_app="$backend_root/src/main/resources/static/app"

###################################
# 1) Next.js build (output: export 사용)
###################################

echo "📦 Running Next.js static export build..."
cd "$frontend_root"
npm run build   # ✅ next export 필요 없음!


###################################
# 2) 결과를 Spring으로 복사
###################################

echo "🧹 Clearing old static/app..."
rm -rf "$spring_static_app"
mkdir -p "$spring_static_app"

echo "🚚 Copying build output → Spring static/app ..."

cp -R "$frontend_root/out/index.html" "$spring_static_app/"
cp -R "$frontend_root/out/_next" "$spring_static_app/"
cp -R "$frontend_root/out/assets" "$spring_static_app/" 2>/dev/null || true

echo "✅ Done!"
echo "👉 Copied to $spring_static_app"