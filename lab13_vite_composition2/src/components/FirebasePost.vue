<template>
    <div>
        <h1>用Firebase儲存資料</h1>
        <button @click="sendByFetch">儲存課程(use fetch)</button>
    </div>
</template>

<script>
// 換成自己的URL
const URL1 = "https://vue3-cli-eaebc-default-rtdb.firebaseio.com/courses.json"
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
        }
    }
}
</script>
<style lang="scss" scoped></style>