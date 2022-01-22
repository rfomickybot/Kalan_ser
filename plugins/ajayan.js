const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/djHYQv4/20220118-080338.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name Kalanser*

*Cʀᴇᴀᴛᴏʀ number : wa.me/916238532742?text=Hi%20KALAN%20bro.%20*


 *Kᴀʟᴀɴ Bᴏᴛ Gʀᴏᴜᴘ : https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk*
     
 *Yᴏᴜᴛʜᴏʙᴇ Lɪɴᴋ: https://youtube.com/channel/UCvWLxIw5MQvbD7It9A5-3Ow*

 *Kᴀʟᴀɴ Bᴏᴛ Oᴡɴᴇʀs : Kᴀʟᴀɴ :- http://wa.me/916238532742 »»» Aʙᴜ Sᴇʀ :-http://wa.me/917025994178*

 *Gɪᴛ Lɪɴᴋ Fᴏʀ Bᴏᴛ Mᴀᴋɪɴɢ : https://github.com/Ajx-Abu/Kalan_ser*

 *ᴋᴀʟᴀɴ-sᴇʀꫂ⁩..♡︎*
`}) 

}));
