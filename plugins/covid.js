/*
# Exclusively from SL-Android project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Asanga_Udara
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');

//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
          if (match[1] === "sl" || match[1] === "srilanka" || match[1] === "Sri lanka" || match[1] === "Srilnka" || match[1] === "srelanka") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri Lanka").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n😷 *සම්පූර්ණ වාර්තාවීම් :* ${resp.cases}\n🏥 *අදදින වාර්තාවීම් :* ${resp.todayCases}\n⚰️ *මුළු මරණ සංඛ්‍යාව :* ${resp.deaths}\n☠️ *අද දින මරණ :* ${resp.todayDeaths}\n💊 *සුවය ලැබූ මුළු ගණන :* ${resp.recovered}\n😷 *සක්‍රිය වාර්තාවීම් :* ${resp.active}\n🆘 *තහවුරු නොවූ :* ${resp.critical}\n🧪 *පරීක්ෂා කර ඇති මුළු ගණන :* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
        }));

}

else if (config.WORKTYPE == 'public') {

       Asena.addCommand({pattern: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
          if (match[1] === "sl" || match[1] === "srilanka" || match[1] === "Sri lanka" || match[1] === "Srilnka" || match[1] === "srelanka") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri Lanka").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n\n😷 *සම්පූර්ණ වාර්තාවීම් :* ${resp.cases}\n🏥 *අදදින වාර්තාවීම් :* ${resp.todayCases}\n⚰️ *මුළු මරණ සංඛ්‍යාව :* ${resp.deaths}\n☠️ *අද දින මරණ :* ${resp.todayDeaths}\n💊 *සුවය ලැබූ මුළු ගණන :* ${resp.recovered}\n😷 *සක්‍රිය වාර්තාවීම් :* ${resp.active}\n🆘 *තහවුරු නොවූ :* ${resp.critical}\n🧪 *පරීක්ෂා කර ඇති මුළු ගණන :* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
        }));

}
