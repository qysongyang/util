<template>
    <div class="pagewrapper">
        <div v-for = "item in list" class="img" @click="goBuy(item.mark)">
            <p align="center"><img v-lazy='baseUrl + baseDir + item.path' width="100%" /></P>
        </div>
    </div>
</template>
<style>
    .pagewrapper{
        width: 100%;
        border: 0;
        margin: 0 auto;
    }
    .img {
        width: 99%;
    }
</style>
<script>
    const baseUrl = "http://weiting.10010sh.cn/";
    const baseDir = "iptv/images/";
    export default{
        data(){
            return{
                baseUrl: baseUrl,
                baseDir: baseDir,
                list:[
                    {
                        mark: '1',
                        path: '01.png'
                    },
                    {
                        mark: '2',
                        path: 'go_buy.png'
                    },
                    {
                        mark: '3',
                        path: '03.png'
                    },
                    {
                        mark: '4',
                        path: '04.gif'
                    },
                    {
                        mark: '5',
                        path: '05.gif'
                    },
                    {
                        mark: '6',
                        path: '06.png'
                    },
                    {
                        mark: '7',
                        path: '06.gif'
                    },
                    {
                        mark: '8',
                        path: '07.png'
                    },
                    {
                        mark: '9',
                        path: '07.gif'
                    },
                    {
                        mark: '10',
                        path: '08.png'
                    },
                    {
                        mark: '11',
                        path: '09.png'
                    },
                    {
                        mark: '12',
                        path: '10.png'
                    },
                    {
                        mark: '13',
                        path: '11.png'
                    },
                    {
                        mark: '14',
                        path: '12.png'
                    },
                    {
                        mark: '15',
                        path: '16.png'
                    },
                    {
                        mark: '16',
                        path: '17.png'
                    }
                ]
            }
        },
        methods: {
            goBuy: function (key) {
                if(['2', '16'].indexOf(key) != -1){
                    window.location.href = 'http://wock.ishcloud.com/o2o/iptvproduct/wap/index_wap.jsp';
                }
            }
        }
    }
</script>
