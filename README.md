
# 
frontend_root = /Users/yeonghakseo/Documents/workspace/hackerthon/angelhack-babycaremall-frontend
backend_root = /Users/yeonghakseo/Documents/workspace/hackerthon/angelhack-babycaremall
# 기존 정적물 제거(선택)
rm -rf ${{backend_root}}/src/main/resources/static/app
# 새로 복사
mkdir -p {{backend_root}}/src/main/resources/static/app

cp -R {{frontend_root}}/out/* $backend_root/src/main/resources/static/app/

