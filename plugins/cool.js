/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'owner', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Kᴀʟᴀɴ Bᴏᴛ Oᴡɴᴇʀs Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tʜɪs Oᴡɴᴇʀs Kᴀʟᴀɴ Sᴇʀ Nᴀɴʙᴜɴ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *Kᴀʟᴀɴ Bᴏᴛ Bʏ Kᴀʟᴀɴ sᴇʀ *\n 🔮 http://wa.me/+916238532742.\n\n🎭 *Kᴀʟᴀɴ Bᴏᴛ Bʏ Aʙᴜ sᴇʀ sᴇʀ *\n 🔮 http://wa.me/+917025994178.\n\n🎭 *Kᴀʟᴀɴ Bᴏᴛ Bʏ Lᴜᴄᴋʏ Sᴇʀ*\n🔮 http://wa.me/+916238748280\n\n🎭 *Kᴀʟᴀɴ Bᴏᴛ Bʏ Kᴀʟɴ*\n🔮 http://wa.me/+916238532742\n\n🎭 *Kᴀʟᴀɴ Bᴏᴛ Bʏ Aᴘᴘᴜ Sᴇʀ*\n🔮 http://wa.me/+918590432917\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Kᴀʟᴀɴ Sᴇʀ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/Ajx-Abu/Kalan_ser\n\n ", rowId:"rowid2"},
        {title: 'Kᴀʟᴀɴ Bᴏᴛ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ Kᴀʟᴀɴ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk\n\n ", rowId:" rowid5"},
        {title: 'Kᴀʟɴ Sᴇʀ Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "Kᴀʟᴀɴ Bᴏᴛ Mᴀᴋɪɴɢ Vɪᴅᴇᴏ Tʜɪs Cʜᴀɴᴀʟ\n\n\n*Kᴀʟᴀɴ Sᴇʀ Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://youtu.be/OYhA_ZNQ4GQ* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "Kᴀʟᴀɴ sᴇʀ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚Kᴀʟᴀɴ Bᴏᴛ💚',
        description: "💖✻Kᴀʟᴀɴ Sᴇʀ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
