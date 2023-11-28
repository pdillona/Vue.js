<style scoped></style>
<!-- 스코프는 범위를 지정해 준다. -->
<template>
  <h4>computed 옵션</h4>
  <div>
    <input type="number" v-model="price" />원
    <input type="number" v-model="count" />개수
    <p>금액:{{ totPrice }}</p>
  </div>

  <div>
    <p>
      20자 2내로 작성 하세요. '바보', '멍청이' 와 600 이상의 숫자의 작성은
      금지되어 있습니다.
    </p>
    <textarea cols="30" rows="10" v-model="text" @input="checkText"></textarea>
    <p>글자 수: {{ textCount }}</p>
    <p v-bind:style="{ color: myColor }">남은 글자 수: {{ remainText }}</p>
    <span v-bind:style="{ color: myColor }">{{ warnigTxt }}</span>
  </div>
</template>

<script>
export default {
  name: "OptionComponent3",
  //함수정의, 컴포넌트의 상태값이 변하면 '실시간으로' 자동으로 계산해 함수를 정의. (template에서 호출)출력 하는 옵션, methodes와는 다름 메소드로는 해당 계산식 처리 불가
  computed: {
    totPrice: function () {
      return this.price * this.count;
    },
    textCount: function () {
      return this.text.length;
    },
    remainText: function () {
      return 20 - this.text.length;
    },
    computeColor: function () {
      this.myColor = "green";

      if (this.remainText < 15) {
        this.myColor = "yellow";
      }

      if (this.remainText < 1) {
        this.myColor = "red";
        this.remainText = this.remainText.slice(0, 20); // 20자 이상의 텍스트를 자름
      }
      return myColor;
    },

    warnig: function () {
      this.warnigTxt = "";
      if (this.remainText < 1) {
        this.warnigTxt = "20자 이상 작성 하셨습니다.";
        this.warnigTxt.color = "red";
      }
      return warnigTxt;
    },
  },
  methods: {
    checkText() {
      // 금지된 단어 체크 메서드를 적용하기 위해 v-model로 양방향 바인딩 필요, @input으로 이벤트 등록 필요
      for (const word of this.blockedWords) {
        if (this.text.includes(word)) {
          this.text = this.text.replace(word, ""); // 금지된 단어를 제거
        }
        if (this.text.length > 20) {
          this.text = this.text.slice(0, 20); // 20자 이상의 텍스트를 자름
        }
        if (this.text >= 600) {
          this.text = 599; // 600 이상의 값을 599로 수정
        }
      }

      /*      // 최대 글자 수 체크
      if (this.text.length > this.maxCharacterCount) {
        this.text = this.text.slice(0, this.maxCharacterCount); // 최대 글자 수 제한
      } */
    },
  },
  data() {
    return {
      price: 1000,
      count: 1,
      text: "",
      myColor: "",
      warnigTxt: "",
      blockedWords: ["바보", "멍청이", "꺼져"], // 금지된 단어 목록
      maxCharacterCount: 6000, // 최대 글자 수
    };
  },
};
</script>
