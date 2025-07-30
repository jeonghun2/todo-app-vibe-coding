# Todo App Vibe Coding

Spring Boot와 React를 사용한 풀스택 Todo 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 Spring Boot 백엔드와 React 프론트엔드를 활용한 모던 웹 애플리케이션입니다. RESTful API를 통해 클라이언트와 서버가 통신하며, 사용자 친화적인 인터페이스로 할 일 관리 기능을 제공합니다.

## 주요 기능

- ✅ 할 일 추가
- ✅ 할 일 완료/미완료 토글
- ✅ 할 일 수정
- ✅ 할 일 삭제
- ✅ 할 일 목록 필터링 (전체/완료/미완료)
- ✅ 할 일 검색
- ✅ 드래그 앤 드롭으로 순서 변경

## 기술 스택

### Backend
- **Spring Boot 3.x** - 웹 애플리케이션 프레임워크
- **Spring Data JPA** - 데이터베이스 ORM
- **H2 Database** - 인메모리 데이터베이스 (개발용)
- **MySQL** - 프로덕션 데이터베이스
- **Spring Security** - 인증 및 권한 관리
- **JWT** - 토큰 기반 인증

### Frontend
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **React Router** - 클라이언트 사이드 라우팅
- **Axios** - HTTP 클라이언트
- **Tailwind CSS** - 스타일링
- **React Query** - 서버 상태 관리

## 프로젝트 구조

```
todo-app-vibe-coding/
├── backend/                 # Spring Boot 백엔드
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/               # React 프론트엔드
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 설치 및 실행

### 사전 요구사항
- Java 17 이상
- Node.js 18 이상
- npm 또는 yarn

### Backend 실행
```bash
cd backend
./mvnw spring-boot:run
```
백엔드 서버는 http://localhost:8080 에서 실행됩니다.

### Frontend 실행
```bash
cd frontend
npm install
npm run dev
```
프론트엔드는 http://localhost:5173 에서 실행됩니다.

## API 엔드포인트

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | /api/todos | 전체 할 일 목록 조회 |
| GET | /api/todos/{id} | 특정 할 일 조회 |
| POST | /api/todos | 새 할 일 생성 |
| PUT | /api/todos/{id} | 할 일 수정 |
| DELETE | /api/todos/{id} | 할 일 삭제 |
| PATCH | /api/todos/{id}/toggle | 완료 상태 토글 |

## 개발 가이드

### 브랜치 전략
- `main` - 프로덕션 브랜치
- `develop` - 개발 브랜치
- `feature/*` - 기능 개발 브랜치
- `hotfix/*` - 긴급 수정 브랜치

### 커밋 컨벤션
- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정

## 테스트

### Backend 테스트
```bash
cd backend
./mvnw test
```

### Frontend 테스트
```bash
cd frontend
npm run test
```

## 배포

### Docker를 사용한 배포
```bash
docker-compose up -d
```

## 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 연락처

프로젝트 관리자: [@jeonghun2](https://github.com/jeonghun2)

프로젝트 링크: [https://github.com/jeonghun2/todo-app-vibe-coding](https://github.com/jeonghun2/todo-app-vibe-coding)