/*
# Exclusively from Msjessica
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved kappithannemo
*/


const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'wss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true&delay=400`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🎀мα∂є ву MsJessica🎀'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'wss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true&delay=400`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🎀мα∂є ву MsJessica🎀'})

    }));
}

