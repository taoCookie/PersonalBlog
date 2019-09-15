<template>
    <div class="article-wrapper">
        <div class="title">最新文章</div>
        <ul>
            <li v-for="(article, index) in articles" :key="index">
                <h3><span class="type">{{article.type}}</span> <span class="title1">{{article.title}}</span></h3>
                <div class="main">
                    <img :src="article.img" alt="">
                    <p>{{article.content}}</p>
                </div>
                <div class="low">
                    <span class="time">{{article.time}}</span>
                    <span>浏览:({{article.num}})</span>
                    <span class="read">阅读原文>></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            articles:[{
                type: '博客日记',
                title: '7年，一个80后女站长与阿里云携手创业的真实故事',
                content: '我是一名80后女站长，从09年毕业到现在我一直从事的是互联网的工作。作。阿作。阿作。阿里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在阿里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在',
                time: '2019-08-03',
                num: 108,
                img: 'https://www.yangqq.com/d/file/blogs/2018-08-17/3ee0644472fa8556562ab3d8716b5316.jpg',
                id: 'blog_1'
            },{
                type: '博客日记',
                title: '7年，一个80后女站长与阿里云携手创业的真实故事',
                content: '我是一名80后女站长，从09年毕业到现在我一直从事的是互联网的工作。阿里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在...',
                time: '2019-08-03',
                num: 108,
                img: 'https://www.yangqq.com/d/file/blogs/2018-08-17/3ee0644472fa8556562ab3d8716b5316.jpg',
                id: 'blog_1'
            },{
                type: '博客日记',
                title: '7年，一个80后女站长与阿里云携手创业的真实故事',
                content: '我是一名80后女站长，从09年毕业到现在我一直从事的是互联网的工作。阿里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在...',
                time: '2019-08-03',
                num: 108,
                img: 'https://www.yangqq.com/d/file/blogs/2018-08-17/3ee0644472fa8556562ab3d8716b5316.jpg',
                id: 'blog_1'
            },{
                type: '博客日记',
                title: '7年，一个80后女站长与阿里云携手创业的真实故事',
                content: '我是一名80后女站长，从09年毕业到现在我一直从事的是互联网的工作。阿里云成立的年份是2009年，一个是正在成长中的阿里云，一个是刚毕业到处找工作的我。我的专业是软件开发，但在...',
                time: '2019-08-03',
                num: 108,
                img: 'https://www.yangqq.com/d/file/blogs/2018-08-17/3ee0644472fa8556562ab3d8716b5316.jpg',
                id: 'blog_1'
            }]
        }
    }
}
</script>
<style scoped>
.title{
    font-size: 18px;
    color: #fff;
    background-color: #349075;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    margin: 0;
    width: calc(100% - 20px);
}
.main{
    margin-top: -2px;
}
.article-wrapper ul{
    overflow: hidden;
    padding: 10px;
    margin: 0;
}
.article-wrapper ul li{
    border-bottom: 1px solid #ccc;
    margin: 0;
    margin-top: 20px;
    cursor: pointer;
}
.type{
    display: inline-block;
    height: 20px;
    background-color: #299982;
    padding: 5px 6px;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    border-radius: 2px;
    line-height: 20px;
    margin-right: 20px;
}
.title1{
    color: #555;
    font-size: 14px;
    font-weight: 600;
}
.main{
    margin-top: 12px;
}
.main img{
    overflow: hidden;
    width: 30%;
    height: 100px;
    display: block;
    float: left;
    margin-right: 20px;
}
.main img:hover{
    transform: scale(1.04,1.04);
    box-shadow: 1px -1px 10px rgba(0,0,0,.7)
}
.main p{
    color: #888;
    line-height: 24px;
    font-size: 14px;
     overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    text-overflow: ellipsis;
    height: 72px;
}
.low{
    width: 100%;
    overflow: hidden;
    clear: both;
    margin: 20px 0 0 0;
    display: inline-block;
    color: #838383;
    font-size: 12px;
}
.low .time{
    margin: 0 10px 0 0;
    padding-left: 20px;
}
.low span{
    padding: 4px 0;
}
.low .read{
    float: right;
    font-size: 16px;
    color:#096;
}
</style>