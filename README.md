<img src="https://github.com/read-a-perfume/frontend/assets/71584114/f56a95ad-6095-45c1-a631-e20366554f66" width="800px" height="500px"/>

## 프로젝트 소개

- 리드 어 퍼퓸은  “화장품 정보 어플리케이션 화해”를 모티브 삼아 만든 향수 플랫폼입니다.   
- 사용자들에게 향수에 대한 자유로운 의견을 나눌 수 있는 공간을 제공합니다. 
- 사용자들은 인스타그램과 같이 글, 사진, 영상을 통해 향수에 대한 감상과 무드를 표현할 수 있으며, 팔로우 및 팔로잉 기능을 통해 타임라인에서 실시간 리뷰를 확인할 수 있습니다.

### 실행 방법
<a href="http://ec2-43-203-196-14.ap-northeast-2.compute.amazonaws.com/">배포링크</a> 
아이디 및 패스워드 : admin
```
npm install 설치
npm run dev 실행
```

### 스토리북
<img src="https://github.com/read-a-perfume/frontend/assets/77400131/7e03c3e1-2275-4857-a99c-de66e5f36899" width="800px" height="500px" alt="storybook">
<br/>
<a href="https://65b77008a475f07078b8424e-xaguxgxkvb.chromatic.com/">스토리북 배포 링크</a>

### 브랜치 관리 전략

브랜치 관리 전략
Git Flow를 사용하여 브랜치를 관리합니다.  
모든 브랜치는 Pull Request에 리뷰를 진행한 후 merge를 진행합니다.  
메인 브렌치인 main에는 아직 많은 내용이 merge되지 않았습니다. 현재 개발 진행사항을 확인하고 싶다면 develop을 확인해주세요.  

### 프로젝트 아키텍쳐 

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/5673445f-bd29-4a41-8607-1e12fc03f09d" width="500px" height="400px"/>

### 프로젝트 네비게이션 구조

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/f80fb853-3247-4856-839f-88c88a365ee4" width="500px" height="400px"/>

### 회원가입 인증 아키텍쳐  

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/be85aaff-37d7-4d19-9ec3-f39b51fb7f72" width="500px" height="400px" />


### 역할 

| 이름 | 기여도 |
|---|---|
| 고지훈 | - 회원가입 및 리뷰 폼 개발 및 유효성 검사. <br>- JWT 로그인 / 로그인 유지 기능 개발. <br>- 초기 개발 환경 구축 및 디자인 시스템 구축  <br>- 스토리북 통한 UI 테스트 코드를 작성 해 UI 검증 자동화 <br>- 메인 페이지 리팩토링. <br>- 코드 스플리팅을 통한 번들링 최적화 <br>- 이미지 최적화 <br>- 웹 폰트 최적화 <br>- 기타 전체 웹 페이지 최적화.  <br>- React-Query 중복 패칭 개선 <br>- 팀 코드 컨벤션 정립, 트러블 슈팅 문서화 |
| 나윤상 | - 쿼리키 및 스태일타임 관리를 통한 React-Query 중복 패칭 개선. <br>- 미인증상태와 인증상태일때 예상치못한 리다이렉트 버그 수정. <br>-화면에 보이지않는 이미지 레이지로딩으로 페이지 로드시간 개선. <br>- 스토리북 배포및 CICD적용, <br>- 공용 컴포넌트 버그 수정 및 코드 리팩토링. <br>- api데이터 타입 공용코드를 작성. <br>- 마이페이지,내정보관리,브랜드페이지,브랜드목록페이지 개발. <br>- 유저상태를 여러 상태관리api가 혼합해 관리한걸 react-query로 통합해 유지보수및 사이드이펙트 줄임. <br>- 공용이미지 webp형식으로 이미지 용량 줄임. <br>- 위키 문서화 및 규칙 정립. <br>- 이미지레이지로딩 및 번들링최적화, 코드스플리팅 결과를 측정해 정량화 및 문서화.<br>-  Context api로 모달 활성화 상태을 관리하는 것을 제안해 props drilling을 개선.<br>- 내정보관리페이지에서 이미지클라우드에서 default이미지 적용시 발생하는 cors에러 및 성능 병목을 비즈니르로직 수정으로 개선.,<br>- 로딩ui및 authguard 공용컴포넌트개발해 생산성 높임|
| [이름3](링크) | [기여도3] |




### 사용 기술 및 환경

React,Typescript,Vite,Material-ui,React-Query

## Commit Convention

| commit type | commit message                            |
| ----------- | ----------------------------------------- |
| feat        | 기능 개발                                 |
| fix         | 버그 수정                                 |
| style       | 불필요한 코드 제거 등                     |
| design      | 디자인 관련 코드                          |
| chore       | 빌드 수정, 패키지 매니저 등 기타 변경사항 |
| move        | 파일이나 폴더 위치 변경                   |
| remove      | 파일이나 폴더 제거                        |
| refactor    | 코드 리팩토링                             |
