require("./lib/module")

// SETTING KONTAK
global.owner = "6289654498303"
global.ownername = "☠︎︎༒︎~Alwayskayzen༒︎☠︎"
global.nomorbot = "6289654498303"
global.namaCreator = "☠︎︎༒︎~Alwayskayzen༒︎☠︎"
global.Dec = "Xlenza"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://files.catbox.moe/5z06fo.jpg'
global.channel = 'https://whatsapp.com/channel/0029VazvSgB3mFYDvreGgq16'

// STICKER
global.packname = "XlenzaV3"
global.author = "꧁•༆Alwayskayzen🔥࿇꧂"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[ # ] ༒☬Xlenza☬༒\` \n*_𝘊𝘰𝘮𝘮𝘢𝘯𝘥 for prem users or ☠︎︎༒︎~Alwayskayzen༒︎☠︎ members and you're not 😑_*`
global.onlyown = `\`[ # ] ༒☬Xlenza☬༒\` \n*𝘊𝘰𝘮𝘮𝘢𝘯𝘥 is only for my 𝘰𝘸𝘯𝘦𝘳 👀*`
global.onlygroup = `\`[ # ] ༒☬Xlenza☬༒\` \n*_𝘊𝘰𝘮𝘮𝘢𝘯𝘥 is only for groups 😑_*`
global.onlyadmin = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*_𝘊𝘰𝘮𝘮𝘢𝘯𝘥 is only for admin 🥱_*`
global.notext = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*_Where's the text? 🧐_*`
global.noadmin = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*_𝘉𝘰𝘵 is not admin need it first 🥺_*`
global.succes = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*_𝘋𝘰𝘯𝘦 executing command 😁_*`
global.invalid = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*𝘔𝘢𝘴𝘶𝘬𝘬𝘢𝘯 𝘯𝘰𝘮𝘰𝘳 𝘺𝘢𝘯𝘨 𝘷𝘢𝘭𝘪𝘥*`
global.bugrespon = `\`[ # ] ༒☬Xlenza 𝘽𝙐𝙂 𝙑3☬༒\` \n*_Successfully sending bugq to victim confirmation 🙂✅_*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})