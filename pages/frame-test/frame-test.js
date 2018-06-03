let getApp1 = getApp()
//建立公共commonjs文件，模块化 引入方式支持 import和require
// let  common = require('../../assets/js/common.js')
import common from '../../assets/js/common'
// pages/frame-test/frame-test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg:'我是frame-test页面'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad-options:',options)
        console.log('getApp1:',getApp1,getApp1.testglobalData)
        // console.log('getApp',getApp())

        //require方式 有default要加default
        // console.log('common',common.default.sayGoodbye)
        //import方式 有default无需加default
        console.log('common:',common)
        console.log('this.data.msg:',this.data.msg)
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        //字段可以获取到当前页面的路径
        console.log('Page.prototype.route:',this.route)
        // 函数用于获取当前页面栈的实例 Page的实例
        console.log('getCurrentPages():',getCurrentPages())

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function (res) {
        console.log('onPullDownRefresh:', res)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function (res) {
        console.log('onReachBottom', res)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123'
        }
    },
    /**
     * 页面滚动触发事件的处理函数
     */
    onPageScroll: function (res) {
        console.log('onPageScroll', res)
    },
    /**
     * 当前是 tab 页时，点击 tab 时触发
     */
    onTabItemTap: function (res) {
        console.log('onTabItemTap', res)
    },
    /**
     * 事件处理函数
     */
    viewTap: function() {
        console.log('view tap')
        console.log('Page.prototype.route',Page.prototype.route,this.route)
        // this.data.msg='我改变了frame-test页面msg的值' //直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的
        this.setData({'msg':'我改变了frame-test页面msg的值'},(e)=>{
            console.log('setDataCallBack')
          
        
        })
    },
    tapName(e1){
        console.log('tapName-event:',e1)
    }
})