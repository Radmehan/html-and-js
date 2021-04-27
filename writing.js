let greeting="Thanks";
let whom="person";
let bad="regret";
let what="playlists";
let dO="bookmarks";
let why="watching";
let say="Love you";

let myHtml=`<p>
This video showed by many ${whom} but it is a matter of ${bad} that only few ${whom} excess ${what}..<br/>I wish everybody should excess ${what} 
and ${dO}..${greeting} for ${why}..</p><br/><h2>${say} vaia from Bangladesh</h2>..
`;

html=document.querySelector("#container");
html.innerHTML=myHtml;