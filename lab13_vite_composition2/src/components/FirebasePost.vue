<template>
    <div>
        <h1>用Firebase儲存資料</h1>
        <button @click="sendByFetch">儲存課程(use fetch)</button>
        <button @click="sendByAxios">儲存課程(use axios)</button>
    </div>
</template>

<script>
// 換成自己的URL
const URL1 = "https://vue3-cli-eaebc-default-rtdb.firebaseio.com/202507/vue3/courses.json"

import axios from 'axios'

export default {
    data() {
        return {
            course: { id: "POOP", name: "Python OOP物件導向實戰", duration: 35 },
            courses: []
        }
    },
    methods: {
        sendByFetch() {
            fetch(URL1, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.course)
            }).then(response => {
                console.log("response=", response)
                if (response.ok) {
                    return response.json()
                }
            }).then(data =>
                console.log("get result=", data)
            )
        },
        sendByAxios() {
            axios.post(URL1, this.course)
                .then(result => {
                    console.log("axios response=", result)
                })
        }
    }
}
</script>
<style lang="scss" scoped></style>