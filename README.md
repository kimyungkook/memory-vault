# 🔐 Memory Vault - 기억속 저장

안전한 개인 기억 저장소 PWA (Progressive Web App)

## ✨ 주요 기능

- **PIN 잠금** - 4자리 PIN으로 앱 보호
- **다양한 기억 유형** - 텍스트, 이미지, 문서(PDF/DOCX), 음성 메모
- **폴더 관리** - 기억을 폴더별로 정리
- **AES-256-GCM 암호화** - 민감한 데이터를 안전하게 보호
- **Abacus AI 연동** - AI 자동 태깅 및 이미지 분석
- **데이터 백업/복원** - JSON 파일로 내보내기/가져오기
- **오프라인 지원** - Service Worker를 통한 오프라인 캐싱 (HTTP 서버 필요)
- **PWA 설치** - 홈 화면에 앱으로 설치 가능 (HTTP 서버 필요)

## 🚀 실행 방법

### ⚠️ 중요: file:// vs HTTP 서버

이 앱은 **로컬 파일(file://)로 직접 열어도 기본 기능은 동작**하지만, PWA 기능(오프라인 캐싱, 앱 설치)을 사용하려면 **HTTP 서버 환경**이 필요합니다.

| 기능 | file:// (더블클릭) | HTTP 서버 |
|------|:-:|:-:|
| 기억 저장/조회 | ✅ | ✅ |
| PIN 잠금 | ✅ | ✅ |
| 암호화 | ✅ | ✅ |
| 폴더 관리 | ✅ | ✅ |
| Service Worker (오프라인) | ❌ | ✅ |
| PWA 설치 | ❌ | ✅ |
| Abacus AI 연동 | ❌ (CORS) | ✅ |

### 방법 1: 로컬 서버 실행 (권장)

동봉된 서버 스크립트를 사용하세요:

**Windows:**
```bash
start-server.bat
# 더블클릭으로 실행
```

**Mac / Linux:**
```bash
chmod +x start-server.sh
./start-server.sh
```

**Python 직접 실행:**
```bash
python3 start-server.py
```

서버 시작 후 자동으로 브라우저에서 `http://localhost:8080`이 열립니다.

### 방법 2: npx serve 사용

```bash
npx serve .
```

### 방법 3: GitHub Pages 배포

1. GitHub 리포지토리에 `index.html` 업로드
2. Settings → Pages → Source에서 배포 브랜치 선택
3. `https://<username>.github.io/<repo>/` 에서 접속

### 방법 4: 파일 직접 열기 (제한적)

`index.html`을 더블클릭하여 실행할 수 있습니다.
- ✅ 기본 기능(기억 저장, PIN 잠금, 암호화)은 정상 동작
- ❌ PWA 기능, AI 연동은 사용 불가
- 콘솔에 경고 메시지가 표시되지만, 에러는 발생하지 않습니다

## 📁 파일 구조

```
memory-vault/
├── index.html          # 메인 앱 (싱글 파일 PWA)
├── start-server.py     # Python 3 로컬 서버
├── start-server.bat    # Windows용 서버 실행 스크립트
├── start-server.sh     # Mac/Linux용 서버 실행 스크립트
└── README.md           # 이 파일
```

## 🛠 기술 스택

- **Tailwind CSS** - 스타일링
- **Dexie.js** - IndexedDB 래퍼
- **Lucide Icons** - 아이콘
- **Web Crypto API** - PBKDF2 + AES-256-GCM 암호화
- **Web Audio API** - 음성 녹음 시각화
- **Web Speech API** - 음성 인식 (STT)
- **Service Worker** - 오프라인 캐싱
- **Abacus AI API** - LLM 자동 태깅, 이미지 분석

## 📌 참고사항

- 데이터는 브라우저의 **IndexedDB**에 저장됩니다
- 정기적으로 **설정 → 데이터 백업**을 권장합니다
- 음성 인식은 **Chrome** 브라우저에서 가장 잘 동작합니다
- AI 기능 사용 시 **Abacus AI API 키**가 필요합니다 (설정에서 입력)

## 📄 라이선스

MIT License
