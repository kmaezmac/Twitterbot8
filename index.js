import express from "express";
import { TwitterApi } from "twitter-api-v2";
import process from "process";
import pg from 'pg';
import https from 'https';

// consumer keys - api key
const appKey = process.env.TWITTER_API_KEY;
// consumer keys - api key secret
const appSecret = process.env.TWITTER_API_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
});
client.readWrite;
const app = express();

const tiktok = async (tiktokAmount, tiktokLink, hatenaLink) => {
    var text = "【期間限定】今なら誰でも" + tiktokAmount + "円ゲットできるよ\n招待URL: " + tiktokLink + "\nルールを守らないとお金がもらえないので必ず↓を見て登録してね"
        var random = Math.floor(Math.random() * (30));
        const emojis = [
            "😀",
            "😆",
            "🤣",
            "😉",
            "🥰",
            "😍",
            "🤩",
            "😘",
            "😚",
            "😋",
            "😝",
            "🤑",
            "🫣",
            "🤫",
            "🤔",
            "🫡",
            "😏",
            "🥳",
            "😎",
            "😲",
            "😮",
            "😳",
            "🥺",
            "🥹",
            "😻",
            "🙊",
            "💖",
            "❤️‍🔥",
            "💯",
            "🐶",
            "🐺",
            "🐱",
            "🐭",
            "🐹",
            "🐰",
            "🐸",
            "🐯",
            "🐨",
            "🐻",
            "🐷",
            "🐽",
            "🐮",
            "🐗",
            "🐵",
            "🐒",
            "🐴",
            "🐑",
            "🐘",
            "🐼",
            "🐧",
            "🐦",
            "🐤",
            "🐥",
            "🐣",
            "🐔",
        ]
        var random = emojis[Math.floor(Math.random()* emojis.length)];
        console.log(random)
        var hashTag = "\n#TikTokLite #ポイ活 #副業 #稼げる #TikTok";
        var link = "\n" + hatenaLink;
        var tweet = text + random + hashTag + link;
        console.log(tweet)
        client.v2.tweet(tweet); 
}

app.get("/tiktok4500", (req, res) => {
    try {
        tiktok(process.env.TIKTOK_AMOUNT, process.env.TIKTOK_URL, process.env.HATENA_URL);
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

app.get("/tiktok5000", (req, res) => {
    try {
        tiktok(process.env.TIKTOK_AMOUNT2, process.env.TIKTOK_URL2, process.env.HATENA_URL2);
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

app.get("/", (req, res) => {
    try {
        console.log("ログ定期実行")
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);