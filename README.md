# docker_express

Now this application works. The problem was in file **server.js**. There was this line 
<pre>
const HOST = '127.0.0.1';
</pre>
And it should be like this:
<pre>
const HOST = '0.0.0.0';
</pre>
If you make the image (docker build . -t docker_express ) and then start the container (docker run -p 49160:8080 -d docker_express), then you can check with your browser these pages
<ul>
<li>http://localhost:49160</li>
<li>http://localhost:49160/Jim</li>
</ul>