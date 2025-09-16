const config = {
	// 网页元数据
	metaData: {
		title: '十安の小窝🎉',
		description: '欢迎来到十安の小窝！',
		keywords: '个人主页,个人网站',
		icon: '/favicon.ico'   // 网页图标，支持外链
	},

	avatar: "/img/tx.jpg", // 头像
	welcometitle: "Hi, I'm Shian", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   // pc端
			"type": "pic",   // "pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.png",     // 也可填写网络地址或壁纸api
			},
		},
		"mobile": {   // 移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"
			}
		}
	},

	// 极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	// 社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://www.github.com/liamblog" },
		{ icon: "mdi-email", link: "mailto:dave04@foxmail.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	// 打字机
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	// 音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  // 服务提供商 --网易云音乐
		type: 'playlist',   // 歌单类型
		id: '2028178887'  // 歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	// 壁纸数据 -----可以将壁纸文件上传到图床获取网络直链
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "/img/wallpaper/dynamic/世界很温柔《龙族》上杉绘梨衣/A2EF5E85-pre.webm",
				"url": "/img/wallpaper/dynamic/世界很温柔《龙族》上杉绘梨衣/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	// 项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/pEEZToj.jpg", title: "漫旅绘话", subtitle: "写不了一点", text: "所以你打不开🤣🤣🤣。哈哈，这博客怕是得了“写作拖延症”，连打开都成了“薛定谔的猫”——你不点进去，永远不知道它到底是空的还是满的。或许它正在偷偷酝酿一篇惊天动地的文章，只是还没找到灵感，或者干脆在摸鱼。总之，博客的门关得紧紧的，仿佛在说：“今天不营业，改天再来吧！” 😂", url: "https://www.mlhh.cn", show: false },
		{ go: "🗂️ 前往", img: "/img/pEEZ0sO.jpg", title: "密钥管理系统", subtitle: "一个简简单单の管理系统", text: "真的就是一个简简单单的密钥系统，你不信？那你打开看看！", url: "https://my.xo0x.cn", show: false },
		{ go: "📝 前往", img: "/img/pEEZIeg.jpg", title: "FinalShell 激活", subtitle: "偶尔开发の小玩具", text: "一个小玩具而已啦，何必那么认真.", url: "https://js.mlhh.cn", show: false },
		{ go: "👍 前往", img: "/img/pEEZyod.jpg", title: "发布页", subtitle: "平平无奇の页面", text: "一个单页面，不信？自己打开看！", url: "https://fb.mlhh.cn", show: false },
		{ go: "🗃 前往", img: "/img/pEEmOqU.png", title: "本站数据报", subtitle: "让你的数据会说话，让你的网站更出彩。", text: "来自51.LA网站统计支持，网站流量、用户行为、转化效果，一屏尽览，让你运筹帷幄之中，决胜千里之外！", url: "https://v6.51.la/report/overview?comId=3092041", show: false },
	],

	// 核心：备案信息+版权链接（语法无问题，无需修改）
	statement: ["备案号：豫icp备2024077903号-3", "Copyright © 2025 Shian"],
}

export default config
