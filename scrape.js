import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';


for(let i=1; i<=10; i++){
    let data = await cacheOrRequest(i);
    const $ = cheerio.load(data);
    let img = $('#comic img');
    console.log(img.attr('src'));
    console.log(img.attr('title'));
    console.log(img.attr('alt'));
}

function cacheSet(name, data){
    if(!fs.existsSync('cache')){
        fs.mkdirSync('cache');
    }

    let file = fs.openSync('cache/'+ name +'.txt','w');
    fs.writeFileSync(file, data);
    fs.closeSync(file);
}
function cacheGet(name){
    let file = fs.openSync('cache/'+ name +'.txt','r');
    let data = fs.readFileSync(file);
    fs.closeSync(file);
    return data;
}
function cacheExists(name){
    return fs.existsSync('cache/'+name);
}

async function cacheOrRequest(id) {
    if(!cacheExists(id)){
        axios.get('https://xkcd.com/'+ id +'/').then(response => {
            //console.log(response.data);
            cacheSet(id, response.data);
            return response.data;
            
        });
        await new Promise(r => setTimeout(r, 2000));
    } else {
        return cacheGet(id);
    }
}