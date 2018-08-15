var OAuth = require("oauth");
var apiKey = "iNNcOZcog9YrP1pxiOkjJlEoaLbUzReo54NMwcNRYopA6kyRkO"
var blog = "hacktiv8quotes.tumblr.com"

var oauth = new OAuth.OAuth(
      'https://www.tumblr.com/oauth/request_token'  ,
      'https://www.tumblr.com/oauth/access_token',
      'iNNcOZcog9YrP1pxiOkjJlEoaLbUzReo54NMwcNRYopA6kyRkO',
      'qtAw0WgfQZcOPbAVABmAk3PRAXJ90Dg69fs8u4fZ4ak4VWVAiY',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

class Controller {

    static retriveBlogPostAmount(req,res){
        oauth.get(
            `https://api.tumblr.com/v2/blog/${blog}/info?api_key=${apiKey}`,
            'anPOKMj9eCwb3JhV6W3r9fym1Kv4gHDnAtAvHpGo81pRzki6bA', //test user token
            'CO9h3U3BhdceDqR5rYlYNwWkJH8rr5t27Ql3XSovbWzQT7bSQF', //test user secret            
            function (e, data, result){
            if(e){
                res.send("you did something")
                // res.json(e)
            }else{
                // res.send("correct")
                res.json(JSON.parse(data))
            }
            }); 
        }
    
    
    static retrieveAllPost(req,res){
        oauth.get(`https://api.tumblr.com/v2/blog/${blog}/posts/text?api_key=${apiKey}`,
        'anPOKMj9eCwb3JhV6W3r9fym1Kv4gHDnAtAvHpGo81pRzki6bA',
        'CO9h3U3BhdceDqR5rYlYNwWkJH8rr5t27Ql3XSovbWzQT7bSQF',
        (err,data,result)=>{
            if(err){
                res.json(err)
            }else{
                res.json(JSON.parse(data))
            }
          }
        )
        // https://api.tumblr.com/v2/blog/citriccomics.tumblr.com/posts/text?api_key={key}
    }
    
    static postText(req,res){
        let terserah = req.body.text
        console.log(terserah)
        oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
        'anPOKMj9eCwb3JhV6W3r9fym1Kv4gHDnAtAvHpGo81pRzki6bA',
        'CO9h3U3BhdceDqR5rYlYNwWkJH8rr5t27Ql3XSovbWzQT7bSQF',
        {type : "text",
         body : terserah 
        },
        (err,data,result)=>{
            if(err){
                console.log(err)
                res.json(err)
                // res.send("you did something wront")
            }else{
                // res.send("you actually did it")
                res.json(JSON.parse(data))
            }
          }
        )
    }
    
    static postPicture(req,res){
        let caption = req.body.caption;
        let source = req.body.source;
        oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
        'anPOKMj9eCwb3JhV6W3r9fym1Kv4gHDnAtAvHpGo81pRzki6bA',
        'CO9h3U3BhdceDqR5rYlYNwWkJH8rr5t27Ql3XSovbWzQT7bSQF',
        {type : "photo",
         caption : caption,
         source : source
        },
        (err,data,result)=>{
            if(err){
                console.log(err)
                res.json(err)
                // res.send("you did something wront")
            }else{
                // res.send("you actually did it")
                res.json(JSON.parse(data))
            }
          }
        )
    }
    
    static postQuote(req,res){
        let quote = req.body.quote;
        oauth.post(`https://api.tumblr.com/v2/blog/${blog}/post`,
        'anPOKMj9eCwb3JhV6W3r9fym1Kv4gHDnAtAvHpGo81pRzki6bA',
        'CO9h3U3BhdceDqR5rYlYNwWkJH8rr5t27Ql3XSovbWzQT7bSQF',
        {type : "quote",
         quote: quote
        },
        (err,data,result)=>{
            if(err){
                console.log(err)
                res.json(err)
                // res.send("you did something wront")
            }else{
                // res.send("you actually did it")
                res.json(JSON.parse(data))
            }
        })
    }
}


module.exports = Controller