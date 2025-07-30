# Todo App Vibe Coding

Spring Boot와 React를 사용한 풀스택 Todo 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 Spring Boot 백엔드와 React 프론트엔드를 활용한 모던 웹 애플리케이션입니다. RESTful API를 통해 클라이언트와 서버가 통신하며, 사용자 친화적인 인터페이스로 할 일 관리 기능을 제공합니다.

## 주요 기능

- ✅ 할 일 추가 (제목, 설명)
- ✅ 할 일 완료/미완료 토글
- ✅ 할 일 수정
- ✅ 할 일 삭제 (확인 대화상자 포함)
- ✅ 할 일 목록 필터링 (전체/진행 중/완료됨)
- ✅ 할 일 검색 (제목 기반)
- ✅ 반응형 UI 디자인

## 기술 스택

### Backend
- **Spring Boot 3.4.1** - 웹 애플리케이션 프레임워크
- **Spring Data JPA** - 데이터베이스 ORM
- **H2 Database** - 인메모리 데이터베이스
- **Gradle** - 빌드 도구
- **Java 17** - 개발 언어
- **Bean Validation** - 데이터 검증

### Frontend
- **React 19.1.1** - UI 라이브러리
- **TypeScript 4.9.5** - 타입 안정성
- **Create React App** - 빌드 도구
- **React Router 7.7.1** - 클라이언트 사이드 라우팅
- **Axios 1.11.0** - HTTP 클라이언트
- **Custom CSS** - 스타일링
- **Jest + React Testing Library** - 단위 테스트

## 프로젝트 구조

```
todo-app-vibe-coding/
├── backend/                 # Spring Boot 백엔드
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/todoapp/
│   │   │   │   ├── TodoAppApplication.java
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── exception/
│   │   │   │   ├── repository/
│   │   │   │   └── service/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── build.gradle
│   ├── gradlew
│   └── settings.gradle
├── frontend/               # React 프론트엔드
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   ├── TodoForm/
│   │   │   ├── TodoItem/
│   │   │   ├── TodoList/
│   │   │   └── TodoFilter/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
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
./gradlew bootRun
```
백엔드 서버는 http://localhost:8080 에서 실행됩니다.
- H2 데이터베이스 콘솔: http://localhost:8080/h2-console

### Frontend 실행
```bash
cd frontend
npm install
npm start
```
프론트엔드는 http://localhost:3000 에서 실행됩니다.

## API 엔드포인트

| Method | Endpoint | 설명 | 쿼리 파라미터 |
|--------|----------|------|-------------|
| GET | /api/todos | 전체 할 일 목록 조회 | `completed` (Boolean), `search` (String) |
| GET | /api/todos/{id} | 특정 할 일 조회 | - |
| POST | /api/todos | 새 할 일 생성 | - |
| PUT | /api/todos/{id} | 할 일 수정 | - |
| DELETE | /api/todos/{id} | 할 일 삭제 | - |
| PATCH | /api/todos/{id}/toggle | 완료 상태 토글 | - |

### 요청/응답 예시

**Todo 생성 (POST /api/todos)**
```json
// 요청
{
  "title": "할 일 제목",
  "description": "할 일 설명"
}

// 응답
{
  "id": 1,
  "title": "할 일 제목",
  "description": "할 일 설명",
  "completed": false,
  "createdAt": "2025-07-30T14:23:42",
  "updatedAt": "2025-07-30T14:23:42"
}
```

**필터링 조회 예시**
- 완료된 할 일: `GET /api/todos?completed=true`
- 미완료 할 일: `GET /api/todos?completed=false`
- 검색: `GET /api/todos?search=테스트`

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
./gradlew test
```
- JUnit 5 기반 단위 테스트

### Frontend 테스트
```bash
cd frontend
npm run test
```
- Jest + React Testing Library 기반 단위 테스트


## 배포

### 개발 환경 배포
현재 프로젝트는 개발 환경에서 다음과 같이 실행됩니다:

1. **백엔드**: http://localhost:8080
   - H2 인메모리 데이터베이스 사용
   - 애플리케이션 재시작 시 데이터 초기화됨
   
2. **프론트엔드**: http://localhost:3000
   - Create React App 개발 서버
   - Hot reload 지원

### 프로덕션 배포 고려사항
프로덕션 환경으로 배포 시 다음 사항들을 고려해야 합니다:

- **데이터베이스**: H2 → MySQL/PostgreSQL 변경
- **프론트엔드 빌드**: `npm run build`로 정적 파일 생성
- **환경 변수**: 데이터베이스 연결 정보, API URL 설정
- **보안**: CORS 설정, HTTPS 적용

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

## 프로젝트 스크린샷

### 애플리케이션 화면
- 할 일 추가, 수정, 삭제 기능
- 완료/미완료 상태 토글
- 필터링 및 검색 기능
- 반응형 디자인

## 주요 특징

- **클린 아키텍처**: Controller-Service-Repository 패턴으로 계층 분리
- **타입 안전성**: TypeScript 사용으로 컴파일 타임 오류 방지
- **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원
- **실시간 피드백**: 사용자 액션에 대한 즉각적인 UI 반응
- **데이터 검증**: 백엔드에서 Bean Validation을 통한 입력값 검증
- **에러 처리**: 전역 예외 처리기를 통한 일관된 에러 응답
- **테스트 커버리지**: Jest와 React Testing Library를 통한 단위 테스트