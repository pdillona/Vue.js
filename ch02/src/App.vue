<script>
export default {
  name: "App",
  methods: {
    handler1: function () {
      alert("button1!");
    },
    handler2: function (num) {
      alert("button2!   " + num);
    },
    handler3: function () {
      alert("button3!");
    },
    countUp: function () {
      this.count++;
    },
    changeCity: function (e) {
      alert(e.target.value);
    },
    formUser1(e) {
      const uid = e.target.elements.uid.value;
      const name = e.target.elements.name.value;
      const age = e.target.elements.age.value;

      console.log("uid : " + uid);
      console.log("name : " + name);
      console.log("age : " + age);
    },
    formUser2() {
      console.log("uid:" + this.myUser.uid);
      console.log("name:" + this.myUser.name);
      console.log("age:" + this.myUser.age);
    },
  },
  data() {
    return {
      tit1: "Hello Vue!",
      tit2: "Welcome Vue!",
      tit3: "",
      result1: true,
      result2: false,
      score: 89,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      persons: [
        { uid: "a101", name: "김유신", age: 23 },
        { uid: "a102", name: "김춘추", age: 24 },
        { uid: "a103", name: "강감찬", age: 63 },
        { uid: "a104", name: "장보고", age: 44 },
        { uid: "a105", name: "이순신", age: 75 },
      ],
      value1: "tit1",
      value2: "tit2",
      count: 0,
      isActive: false,
      img1: "/img/flower1.jpg",
      img2: "/img/flower2.jpg",
      link1: "https://naver.com",
      link2: "https://daum.net",
      myStyle: { width: "100px", height: "100px", background: "orange" },
      myName: "홍길동",
      myText: "",
      myCheck: false,
      myCities: [],
      myUser: { uid: "", name: "", age: 0 },
    };
  },
};
</script>

<template>
  <h3>ch02. Vue Directive</h3>
  <!-- 스타일이 없음에도 중간에 생성됨 / style.css에 이 내용이 정의되있어 그럼 이후 공부를 위해 내용 삭제함 -->

  <h4>1) v-text</h4>

  <p v-text="tit1"></p>
  <p>{{ tit2 }}</p>

  <h4>1) v-show</h4>

  <p v-show="result1">show result1</p>
  <p v-show="result2">show result2</p>

  <h4>1) v-if</h4>

  <p v-if="result1">if reulst1</p>
  <p v-if="result2">if reulst2</p>
  <p v-else>else reulst2</p>

  <p v-if="score >= 90">A</p>
  <p v-else-if="score >= 80">B</p>
  <p v-else-if="score >= 70">C</p>
  <p v-else-if="score >= 60">D</p>
  <p v-else>F</p>

  <p v-if="tit3">{{ tit3 }}</p>
  <p v-else>tit3 empty</p>

  <h4>1) v-for</h4>

  <ul>
    <li v-for="i in 3">i : {{ i }}</li>
  </ul>

  <ul>
    <li v-for="city in cities">city : {{ city }}</li>
  </ul>

  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>나이</th>
    </tr>
    <tr v-for="person in persons">
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>

  <h4>1) v-on</h4>

  <button v-on:click="handler1">button1</button>
  <button v-on:click="($event) => handler2(10)">button2</button>
  <button @click="handler3">button3</button>

  <p>count: {{ count }}</p>
  <button v-on:click="countUp" value="증가">증가</button>
  <br />

  <select v-on:change="changeCity">
    <option>서울</option>
    <option>대전</option>
    <option>대구</option>
    <option>부산</option>
    <option>광주</option>
  </select>

  <!-- action이 없어 현재주소로 보냄 이벤트 뒤에 prevent를 붙여 prevent Default를 해줄 수 있다.-->
  <form v-on:submit.prevent="formUser1" method="post">
    아이디: <input type="text" name="uid" /> <br />
    이름: <input type="text" name="name" /> <br />
    나이: <input type="text" name="age" /> <br />
    <input type="submit" value="전송" />
  </form>

  <h4>6) v-bind</h4>

  <img v-bind:src="img1" alt="flower1" />
  <img :src="img2" alt="flower2" />

  <a :href="link1">네이버</a>
  <a :href="link2">다음</a>

  <div :style="myStyle"></div>

  <!-- 양방향 바인딩 = Model 입력에 따라 출력 결과가 같이 바뀜-->
  <h4>7) v-model</h4>
  <p>이름:{{ myName }}</p>
  <input type="text" placeholder="이름 입력" v-model="myName" />

  <p>{{ myText }}</p>
  <p>문자갯수: {{ myText.length }}</p>
  <textarea v-model="myText" cols="30" rows="10"></textarea>

  <p>
    <label>
      <input type="checkbox" v-model="myCheck" />
      체크박스
    </label>
    체크상태: {{ myCheck }}
  </p>
  <p>
    {{ myCities }}<br />
    <label>
      <input type="checkbox" v-model="myCities" value="서울" />
      서울
    </label>
    <label>
      <input type="checkbox" v-model="myCities" value="대전" />
      대전
    </label>
    <label>
      <input type="checkbox" v-model="myCities" value="대구" />
      대구
    </label>
    <label>
      <input type="checkbox" v-model="myCities" value="부산" />
      부산
    </label>
    <label>
      <input type="checkbox" v-model="myCities" value="광주" />
      광주
    </label>
  </p>

  <form @:submit.prevent="formUser2" method="post">
    아이디: <input type="text" v-model="myUser.uid" /> <br />
    이름: <input type="text" v-model="myUser.name" /> <br />
    나이: <input type="text" v-model="myUser.age" /> <br />
    <input type="submit" value="전송" />
  </form>
</template>

<style scoped></style>
