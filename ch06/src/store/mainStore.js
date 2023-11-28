import {defineStore} from "pinia";

// pinia 전역스토어 생성 후 내보내기
export  const useMainStore = defineStore("main",{
    /*
    *   state
    *       - store에서 관리하는 상태 선언 속성
    *       - 해당 store에서 관리하는 상태값 집합
    * 
    * */
    
    state: () => {

        return{
            title: "Hello pinia",
            count: 0,
            cities: ["서울","대전","대구","부산","광주"],
            persons:[
                {uid:"a101", name:"김유신", age:23},
                {uid:"a102", name:"강감찬", age:45},
                {uid:"a103", name:"이순신", age:71},
                {uid:"a104", name:"장보고", age:44},
                {uid:"a105", name:"이이", age:63},
                {uid:"a106", name:"김춘추", age:24},
            ]
        }
    },
    
    /*
    *   actions
    *       - store의 state를 변경 할 때 사용하는 속성
    *       - 비동기 처리로 직접 state 제어
    * */
    actions: {

        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }

    },
    
    /*
    *   getters
    *       - state를 반환하는 속성
    * */
    getters: {
        doubleCount:(state) =>{
            return state.count * 2;
        }
    },
});
