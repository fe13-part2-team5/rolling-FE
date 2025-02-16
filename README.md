# Rolling

롤링페이퍼 커뮤니티 웹 애플리케이션 "롤링"의 프론트엔드 레포지토리입니다.  
이 프로젝트에서는 롤링페이퍼의 생성, 수정, 삭제뿐만 아니라 이모지 반응 기능을 추가해 풍부한 감정 표현이 가능합니다.  
모달, 토스트와 같은 UI 요소를 활용하고, 무한 스크롤을 적용해 사용자 경험을 개선했습니다. 또한, 메시지 글 입력에 외부 라이브러리를 도입해 더욱 편리한 입력 환경을 제공합니다. 

## 🎯 목표
📆 기간 : 2025.01.23 - 2025.02.11 (약 2주)

### 요구 사항 구현하기
- 프로젝트의 기능 명세를 정확히 이해하고, 필요한 기능을 충실히 구현하여 완성도 높은 결과물을 만드는 것을 목표로 했습니다.

### 협업 방법 익히기

- Git을 활용한 버전 관리, 코드 리뷰, 커뮤니케이션 방식 등을 익혀 원활한 협업 환경을 구축하고자 했습니다.

### 같이 성장하기

- 팀원들과 피드백을 주고받으며 기술적 역량을 향상시키고, 함께 문제를 해결하며 개발자로서 성장하는 경험을 쌓고자 했습니다.

## 🛠️ 기술 스택

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1739692361962?alt=media&token=a39dca22-fe47-4d0d-a050-6b89edeff726)](https://github.com/msdio/stackticon)

## 🚀 주요 구현 사항

### 헤더 컴포넌트

- 롤링페이퍼에 이모지로 반응을 생성할 수 있습니다.
- 롤링페이퍼 페이지를 카카오톡 메시지와 복사한 링크로 공유할 수 있습니다.

### 롤링페이퍼, 메시지 생성 페이지

- 이름, 사진, 대상과의 관계, 메시지 등 입력 내용마다 다른 입력창 및 선택창을 구현했습니다

### 롤링페이퍼 목록 페이지

- 롤링페이퍼를 최신순과 인기순으로 확인할 수 있습니다.

### 메시지 목록 페이지

- 무한 스크롤로 메시지를 불러왔습니다.

## 📁 폴더 구조

```
src
├───api          // API 호출 및 데이터 요청 관련 함수
├───assets       // 아이콘 등의 정적 파일
├───components   // UI 컴포넌트
├───context      // 전역 상태 관리
├───pages        // 페이지 컴포넌트
├───routes       // React Router 관련 설정 및 라우트 관리
├───styles       // 전역 스타일
└───utils        // 유틸리티 함수 
```

## 👥 팀원과 역할

| 이름 | GitHub | 역할 |
|------|----------|------|
| &nbsp;강석준&nbsp; | [@KSJ27](https://github.com/KSJ27) | 전역 스타일 및 테마, Icon, Modal, Toast, Text Editor 컴포넌트, 롤링페이퍼 수정 페이지 |
| 박수연 | [@heresue](https://github.com/heresue) | Badge, Text Field, Profile, Colorchip 컴포넌트, 롤링페이퍼 생성 페이지, 메시지 생성 페이지 |
| 이현호 | [@MySoupRice](https://github.com/MySoupRice) | Header, Header Service 컴포넌트, 메시지 목록 페이지 |
| 조민지 | [@MINJI121](https://github.com/MINJI121) | Card, Card List 컴포넌트, 롤링페이퍼 목록 페이지 |
| 황준호 | [@mecrojun](https://github.com/mecrojun) | Button 컴포넌트, 메인 페이지 |

## ✍️ 회고

