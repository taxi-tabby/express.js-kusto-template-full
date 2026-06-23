# Express.js-Kusto

Express.js 기반 TypeScript 백엔드 프레임워크

## 시작하기

```bash
# 설치
git clone <repository-url>
cd express.js-kusto
npm install

# 환경 설정
cp .env.template .env

# 개발 서버 실행
npm run dev
```



## 문서

자세한 사용법은 [문서](./docs/00-documentation-index.md)를 참고하세요.



## 테스트

```bash
npm test                    # 전체
npm run test:unit           # 단위만 (빠름)
npm run test:integration    # 통합 (sqlite 부팅 ~5s)
npm run test:cli            # CLI 만
npm run test:coverage       # 커버리지 리포트
```


## 라이선스

MIT
