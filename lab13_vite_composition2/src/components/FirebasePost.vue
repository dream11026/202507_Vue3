<template>
    <h1 v-if="isLoading === true">Loading...</h1>
    <div v-else>
        <h1>用Firebase儲存資料</h1>
        <button @click="sendByFetch">儲存課程(use fetch)</button>
        <button @click="sendByAxios">儲存課程(use axios)</button>
        <button @click="getByFetch">取得課程列表(use fetch)</button>
        <button @click="getByAxios">取得課程列表(use axios)</button>
        <ul>
            <li v-for="course in courses" :key="course.id">
                <p>{{ course.id }},{{ course.name }},{{ course.duration }}</p>
            </li>
        </ul>
    </div>
    <h1 v-if="!isLoading && error">{{ error }}</h1>
</template>

<script>
// 換成自己的URL
const URL1 = "https://vue3-cli-eaebc-default-rtdb.firebaseio.com/202507/vue3/courses.json"
const errURL = "a"

import axios from 'axios'

export default {
    mounted() {
        //this.getByFetch()
        this.getByAxios()
    },
    data() {
        return {
            course: { id: "POOP", name: "Python OOP物件導向實戰", duration: 35 },
            courses: [],
            isLoading: false,
            error: null
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
        },
        getByFetch() {
            this.courses = []
            this.isLoading = true
            fetch(errURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                console.log("response=", response)
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                console.log("data=", data)
                for (const id in data) {
                    console.log(id)
                    this.courses.push(data[id])
                }
                this.isLoading = false
            }).catch(e => {
                this.isLoading = false
                console.log("error=", e)
                this.error = "failed to fetch data, please try again or check env..."
            })
        },
        getByAxios() {
            this.courses = []
            this.isLoading = true
            axios.get(URL1).then(result => {
                console.log("axios get result=", result)
                if (result.data) {
                    for (const id in result.data) {
                        console.log('id=', id)
                        this.courses.push(result.data[id])
                    }
                }
                this.isLoading = false
                this.error = null
            })
        }
    }
}
</script>
<style lang="scss" scoped></style>