(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{393:function(t,n,s){"use strict";s.r(n);var a=s(19),o=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"동기와-비동기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기와-비동기"}},[t._v("#")]),t._v(" 동기와 비동기")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://poiemaweb.com/img/block_nonblock.png",alt:"img"}})]),t._v(" "),s("center",[t._v("동기와 비동기 방식이 어떤 것인지 간단하게 보여주는 그림이다.")]),t._v("\n(a)동기 방식에서 손님들은 앞사람이 주문한 커피가 나올때까지 줄을 서서 기다려야 한다.\n"),s("p",[t._v("그에 반해 (b)비동기 방식에서 손님들은 순서에 따라 커피를 주문 하되, 앞사람 커피가 나오기 전까지 줄을 서서 기다리는 것이 아니라 각자 할 것을 하고 있다가 진동벨이 울리면 그때 커피를 가지러 갈 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"동기식-처리-모델-synchronous-processing-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기식-처리-모델-synchronous-processing-model"}},[t._v("#")]),t._v(" 동기식 처리 모델(Synchronous processing model)")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("직렬적으로 태스크를 수행한다.")])]),t._v(" "),s("p",[t._v("즉, 태스크는 순차적으로 실행되며 어떤 작업이 수행 중이면 다음 작업은 "),s("strong",[t._v("대기")]),t._v("하게 된다. 예를 들어, 서버에서 데이터를 가져와서 화면에 표시하는 작업을 수행할 때, 서버에 데이터를 요청하고 데이터가 응답될 때까지 이후 태스크들은 "),s("strong",[t._v("블로킹")]),t._v("(blocking, 작업 중단)된다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://poiemaweb.com/img/synchronous.png",alt:"synchronous"}})]),t._v(" "),s("p",[t._v("아래는 동기식으로 동작하는 코드. 순차적으로 실행되어 콘솔에 찍히는 것을 확인할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"비동기식-처리-모델-asynchronous-processing-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기식-처리-모델-asynchronous-processing-model"}},[t._v("#")]),t._v(" 비동기식 처리 모델(Asynchronous processing model)")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v("병렬적으로 태스크를 수행한다.")])]),t._v(" "),s("p",[t._v("즉, 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다. 예를 들어, 서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행할 때, 서버에 데이터를 요청한 이후 "),s("strong",[t._v("서버로부터 데이터가 응답될 때까지 대기하지 않고")]),t._v("("),s("strong",[t._v("논블로킹")]),t._v(", Non-Blocking) "),s("strong",[t._v("즉시 다음 태스크를 수행")]),t._v("한다. 이후 "),s("strong",[t._v("서버로부터 데이터가 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속해서 수행")]),t._v("한다.")]),t._v(" "),s("p",[t._v("자바 스크립트에서 대부분의 DOM 이벤트 핸들러와 Timer 함수(setTimeout, setInterval), Ajax 요청은 비동기식 처리 모델로 동작한다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://poiemaweb.com/img/asynchronous.png",alt:"asynchronous"}})]),t._v(" "),s("p",[t._v("아래는 비동기식으로 동작하는 코드. func2에서 setTimeout로 인해 순차적으로 실행되지 않는 것을 알 수 있다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('위 예제를 실행하면 setTimeout 메소드에 두번째 인수 인터벌을 0초로 설정하여도 콘솔에 "func1 func2 func3"의 순서로 로그가 출력되지 않는다. 왜냐하면 setTimeout 메소드가 비동기 함수이기 때문이다.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://poiemaweb.com/img/settimeout.png",alt:"setTimeout"}})]),t._v(" "),s("p",[t._v('함수 func1이 호출되면 함수 func1은 Call Stack에 쌓인다. 그리고 함수 func1은 함수 func2를 호출하므로 함수 func2가 Call Stack에 쌓이고 setTimeout이 호출된다. setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 "tick" 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://poiemaweb.com/img/event-loop.gif",alt:"event-loop"}})]),t._v(" "),s("h2",{attrs:{id:"동기와-비동기-차이점-및-장단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기와-비동기-차이점-및-장단점"}},[t._v("#")]),t._v(" 동기와 비동기 차이점 및 장단점")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("동기식")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("요청과 결과가 동시에 일어남")]),t._v(" "),s("ul",[s("li",[t._v("요청한 결과가 한 자리에서 동시에 일어남 (사용자가 데이터를 서버에게 요청한다면 그 서버가 데이터 요청에 따른 응답을 사용자에게 다시 리턴해주기 전까지 사용자는 다른 활동을 할 수 없으며 기다려야만함)")]),t._v(" "),s("li",[t._v("A노드와 B노드 사이의 트랜잭션을 동시에 맞춘다는 의미")])])]),t._v(" "),s("li",[t._v("장점\n"),s("ul",[s("li",[t._v("설계가 간단하고 직관적")])])]),t._v(" "),s("li",[t._v("단점\n"),s("ul",[s("li",[t._v("결과를 볼 때까지 아무것도 못하고 대기해야 함")])])])])]),t._v(" "),s("li",[s("p",[t._v("비동기식")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("요청과 결과가 동시에 일어나지 않음")]),t._v(" "),s("ul",[s("li",[t._v("요청한 곳에서 결과가 나타나지 않음 (서버에게 데이터를 요청한 후 요청에 따른 응답을 계속 기다리지 않아도되며 다른 외부 활동을 수행하여도 되고 서버에게 다른 요청사항을 보내도 상관 없음)")]),t._v(" "),s("li",[t._v("노드 사이의 작업 처리 단위를 동시에 하지 않아도 됨")])])]),t._v(" "),s("li",[t._v("장점\n"),s("ul",[s("li",[t._v("결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업이 가능해 "),s("strong",[t._v("자원의 효율적인 사용")]),t._v("이 가능함")])])]),t._v(" "),s("li",[t._v("단점\n"),s("ul",[s("li",[t._v("설계가 동기에 비해 복잡함")])])])])])]),t._v(" "),s("h2",{attrs:{id:"블로킹과-논블로킹-blocking-nonblocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#블로킹과-논블로킹-blocking-nonblocking"}},[t._v("#")]),t._v(" 블로킹과 논블로킹(Blocking / NonBlocking)")]),t._v(" "),s("ul",[s("li",[t._v("블로킹(Blocking)\n"),s("ul",[s("li",[t._v("호출된 함수가 자신의 작업을 모두 끝낼때까지 제어권을 가지고 있어 호출한 함수가 대기하도록 만듦")])])]),t._v(" "),s("li",[t._v("논블로킹(NonBlocking)\n"),s("ul",[s("li",[t._v("호출된 함수가 바로 return 해서 호출한 함수에게 제어권을 주어 다른 일을 할 수 있게 함")]),t._v(" "),s("li",[s("strong",[t._v("호출되는 함수가 바로 return 하느냐 마느냐가 중점")])])])])]),t._v(" "),s("p",[t._v("호출된 함수가 바로 return해서 호출한 함수에게 제어권을 넘겨주고, 호출한 함수가 다른 일을 할 수 있는 기회를 줄 수 있으면 ***NonBlocking***이다.")]),t._v(" "),s("p",[t._v("그렇지 않고 호출된 함수가 자신의 작업을 모두 마칠 때까지 호출한 함수에게 제어권을 넘겨주지 않고 대기하게 만든다면 ***Blocking***이다.")]),t._v(" "),s("h2",{attrs:{id:"동기-블로킹-비동기-논블로킹-아니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동기-블로킹-비동기-논블로킹-아니다"}},[t._v("#")]),t._v(" 동기==블로킹, 비동기==논블로킹 ? 아니다 !")]),t._v(" "),s("p",[s("code",[t._v("동기/비동기")]),t._v("는 "),s("strong",[t._v("작업을 수행하는 주체")]),t._v("가 2개 이상이어야 합니다. 이 때 작업의 시간(시작, 종료 등)을 서로 맞춘다면 이를 동기라고 부르고, 서로 작업의 시간이 관계없다면 이를 비동기라고 부릅니다. 반면 "),s("code",[t._v("블로킹/논블로킹")]),t._v("은 "),s("strong",[t._v("작업의 대상")]),t._v("이 2개 이상이어야 합니다. 두 개념이 서로 바라보는 관점이 다르기 때문에 동기/블로킹, 동기/논블로킹, 비동기/블로킹, 비동기/논블로킹의 다양한 조합이 가능합니다.")]),t._v(" "),s("h2",{attrs:{id:"reference-additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[t._v("#")]),t._v(" Reference & Additional Resources")]),t._v(" "),s("blockquote",[s("p",[t._v("https://poiemaweb.com/js-async")]),t._v(" "),s("p",[t._v("http://homoefficio.github.io/2017/02/19/Blocking-NonBlocking-Synchronous-Asynchronous/")]),t._v(" "),s("p",[t._v("https://deveric.tistory.com/99")])])],1)}),[],!1,null,null,null);n.default=o.exports}}]);