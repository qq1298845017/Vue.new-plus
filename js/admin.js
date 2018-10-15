var vm = new Vue({
	el:"#app",
	data:{
		index:0,
		biaoqian:"",
		title:"",
		author:"",
		content:"",	
		zhuangtai:true,
		trs:[
			{	
				"content":"新闻内容",
				"biaoqian":"军事",
				"title":"军事上的新闻",
				"author":"作者1",
				"time":"1234",
				"update":"更新时间",
				"zhuangtai":true
			},
			{
				"content":"新闻内容",
				"biaoqian":"国内",
				"title":"国内的新闻",
				"author":"作者1",
				"time":"1234",
				"update":"更新时间",
				"zhuangtai":true
			},
			{
				"content":"新闻内容",
				"biaoqian":"国际",
				"title":"国际上的新闻",
				"author":"作者1",
				"time":"1234",
				"update":"更新时间",
				"zhuangtai":true
			}
			
		]
	},
	computed:{
		getTime:function(){
//			var shijiancuo=Date.parse(new Date())
			var date=new Date()
			Y = date.getFullYear()+'-'
			M =(date.getMonth()+1<10 ?'0'+(data.getMonth()+1) : date.getMonth()+1) +'-'
			D =date.getDay()
			H =date.getHours()
			var  now =Y +M+D+H
		 return  now
		}
	},
	methods:{
		del:function(e){
			if(confirm("确认删除？"))
			 this.trs.splice(e, 1);
			   localStorage.setItem('trs', JSON.stringify(this.trs))
		},
		add:function(){
			this.trs.unshift({
				"biaoqian":this.biaoqian,
				"title":this.title,
				"author":this.author,
				"time":this.getTime,
				"update":this.getTime,
				"zhuangtai":this.zhuangtai			
			})
			$("#tianjiaxinwen").modal('hide')
			this.title=""
			this.biaoqian=""
			this.author=""
			this.zhuangtai=""
			this.content=""
			  localStorage.setItem('trs', JSON.stringify(this.trs))
			  console.log(localStorage.setItem('trs', JSON.stringify(this.trs)))
		},
		edit:function(index){
			this.index= index;
			this.title =this.trs[index].title
			this.author =this.trs[index].author
			this.zhuangtai =this.trs[index].zhuangtai
			this.content =this.trs[index].content
			this.update =this.trs[index].update
			this.biaoqian =this.trs[index].biaoqian
		},
		save:function(){			
			this.trs[this.index].title=this.title
			this.trs[this.index].author=this.author
			this.trs[this.index].zhuangtai=this.zhuangtai
			this.trs[this.index].content=this.content
			this.trs[this.index].update=this.update
			this.trs[this.index].biaoqian=this.biaoqian
			localStorage.setItem('trs', JSON.stringify(this.trs))
			$("#bianjixinwen").modal('hide')
			this.title=""
			this.biaoqian=""
			this.author=""
			this.zhuangtai=""
			this.content=""
		},
		sss:function(index){
			this.trs[index].zhuangtai=!this.trs[index].zhuangtai
			localStorage.setItem('trs', JSON.stringify(this.trs))
		}
	},
	created: function () {
        //如果本地存储里面没有值，就用默认的 notes 数组里面的值
        if (localStorage.getItem('trs') !== null) {
            //把本地存储里面的值赋值给notes
            this.trs = JSON.parse(localStorage.getItem('trs'))
        }
   }	
})