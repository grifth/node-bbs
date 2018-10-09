  var express = require('express')
  var bodyParser = require('body-parser')
  var cp = require('child_process')
  var app = express()

  app.use('/public/',express.static('./public/'))

  app.engine('html',require('express-art-template'))

  app.use(bodyParser.urlencoded({extended:false}))

  app.use(bodyParser.json())
  var comments = [
    {
      name: '张三',
      message: '今天天气不错！',
      dateTime: '2018-10-3 17:18:44'
    },
  ]
  app.get('/',function(req,res){
    res.render('index.html',{
      comments:comments
    })
  })
  app.get('/post',function(req,res){
    res.render('post.html')
  })

  app.post('/post',function(req,res){
    var comment = req.body
    var time = new Date().toLocaleString()
    comment.dateTime = time
    comments.unshift(comment)
    res.redirect('/')
  })
  app.listen(3000,function(){
      console.log('running3000', '')    
  })
  cp.exec('start http://127.0.0.1:3000/');  // 自动打开默认浏览器
