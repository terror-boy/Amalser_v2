const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/xDJVlRg.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater sachusamu*
*owner number wa.me/919744474996*

*Bot making video : https://youtu.be/fd0KPblop-k*

*Yt_PASSWORD: _________(password on this video watch it full)*

*githublink : https://github.com/sachusamu-c/Rockser_v2*

*audio commads : https://github.com/sachusamu-c/Rockser_v2/tree/master/uploads*
`}) 

}));
