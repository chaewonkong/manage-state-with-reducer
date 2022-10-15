# Reducer for a Complicated React State Management

```
본 repository는 reducer, useReducer를 이용한 상태관리를 설명하기 위해 작성한 예시입니다.
```

리듀서를 이용하면 리덕스와 같은 상태관리 라이브러리를 사용하지 않는 상황에서 복잡한 상태관리를 보다 쉽게 할 수 있습니다.

본 프로젝트를 clone해서 코드를 살펴보면, 실제 동작하는 구조 내에서 reduce의 사용법을 익힐 수 있습니다.

## 사용법

1. 본 repository를 clone합니다. (`git clone https://github.com/chaewonkong/manage-state-with-reducer.git`)
2. 설치를 진행합니다. (`yarn`)
3. 실행합니다. (`yarn dev`)
4. `localhost:3000`을 브라우저에서 들어가 인풋 필드에 값들을 입력하고 버튼을 클릭해 봅니다.

## 코드 설명

편의를 위해 `/pages/index.tsx` 내부에 reducer, action과 관련된 모든 코드를 담았습니다.
index.tsx를 확인하면 작동 원리를 파악할 수 있습니다.

## 동작 화면

![reducer를 활용한 상태 변경 예시](https://user-images.githubusercontent.com/33085082/195989394-bda62695-d3ca-4d66-ba75-73edf2813545.png)
