/* ===== MOCK DATA ===== */
const IMG = (name) => `images/${name}`;

const posts = [
    {id:1,title:'今天的应援现场太燃了！星邱真的很棒！🔥',cover:IMG('post-1.svg'),author:'星邱小迷妹',avatar:IMG('avatar-1.svg'),category:'daily',time:'2小时前',likes:328,comments:56,reads:2100},
    {id:2,title:'应援歌曲《星光》MV拍摄花絮大公开',cover:IMG('post-2.svg'),author:'官方运营',avatar:IMG('avatar-admin.svg'),category:'official',time:'5小时前',likes:892,comments:203,reads:8500,admin:true},
    {id:3,title:'分享一组超美的星邱应援壁纸，拿去用！',cover:IMG('post-3.svg'),author:'设计大佬',avatar:IMG('avatar-2.svg'),category:'resources',time:'1天前',likes:567,comments:89,reads:4200},
    {id:4,title:'应援歌曲推荐：那些让人心动的旋律',cover:IMG('post-4.svg'),author:'音乐小达人',avatar:IMG('avatar-3.svg'),category:'music',time:'1天前',likes:234,comments:45,reads:1800},
    {id:5,title:'线下应援活动回顾：我们做到了！',cover:IMG('post-5.svg'),author:'活动组小A',avatar:IMG('avatar-4.svg'),category:'daily',time:'2天前',likes:456,comments:78,reads:3600},
    {id:6,title:'官方公告：应援站全新改版上线',cover:IMG('post-6.svg'),author:'官方运营',avatar:IMG('avatar-admin.svg'),category:'official',time:'3天前',likes:678,comments:156,reads:12000,admin:true},
    {id:7,title:'粉丝原创：星邱专属应援手幅设计稿',cover:IMG('post-7.svg'),author:'手幅工坊',avatar:IMG('avatar-5.svg'),category:'resources',time:'3天前',likes:189,comments:34,reads:1500},
    {id:8,title:'应援歌单合集：24小时循环不重样',cover:IMG('post-8.svg'),author:'音乐小达人',avatar:IMG('avatar-3.svg'),category:'music',time:'4天前',likes:345,comments:67,reads:2800},
    {id:9,title:'新人报道！从今天开始为星邱应援',cover:IMG('post-9.svg'),author:'新粉小星星',avatar:IMG('avatar-6.svg'),category:'daily',time:'4天前',likes:123,comments:89,reads:900},
];

const materials = [
    {id:1,name:'星邱应援主题海报 Vol.1',type:'海报素材',cover:IMG('material-1.svg'),uploader:'官方运营',downloads:1280,favorites:456,isOfficial:true},
    {id:2,name:'梦幻星空壁纸套组',type:'壁纸素材',cover:IMG('material-2.svg'),uploader:'设计大佬',downloads:890,favorites:234},
    {id:3,name:'应援文案模板合集',type:'文案素材',cover:IMG('material-3.svg'),uploader:'文案小能手',downloads:567,favorites:189},
    {id:4,name:'应援海报 PSD 源文件',type:'设计源文件',cover:IMG('material-4.svg'),uploader:'官方运营',downloads:345,favorites:123,isOfficial:true},
    {id:5,name:'星邱Q版表情包',type:'海报素材',cover:IMG('material-5.svg'),uploader:'画手小可爱',downloads:2100,favorites:789},
    {id:6,name:'演唱会现场壁纸',type:'壁纸素材',cover:IMG('material-6.svg'),uploader:'摄影大佬',downloads:678,favorites:345},
    {id:7,name:'官方应援手幅模板',type:'设计源文件',cover:IMG('material-7.svg'),uploader:'官方运营',downloads:456,favorites:234,isOfficial:true},
    {id:8,name:'应援口号文案集锦',type:'文案素材',cover:IMG('material-8.svg'),uploader:'文案小能手',downloads:234,favorites:89},
];

const playlists = [
    {id:1,name:'星邱应援专属 BGM',desc:'星邱应援现场专属合集',cover:IMG('playlist-1.svg'),songs:12,plays:8900,creator:'官方运营',isOfficial:true},
    {id:2,name:'粉丝共创应援歌单',desc:'粉丝推荐歌曲合集',cover:IMG('playlist-2.svg'),songs:24,plays:5600,creator:'音乐小达人'},
    {id:3,name:'星邱经典歌曲精选',desc:'那些百听不厌的旋律',cover:IMG('playlist-3.svg'),songs:18,plays:12000,creator:'官方运营',isOfficial:true},
    {id:4,name:'新歌速递推荐',desc:'最新应援歌曲合集',cover:IMG('playlist-4.svg'),songs:8,plays:3400,creator:'新歌推荐官'},
    {id:5,name:'应援现场 Live 合集',desc:'演唱会现场录音精选',cover:IMG('playlist-5.svg'),songs:15,plays:7800,creator:'官方运营',isOfficial:true},
    {id:6,name:'粉丝翻唱精选',desc:'粉丝翻唱好歌合集',cover:IMG('playlist-6.svg'),songs:20,plays:4500,creator:'翻唱达人'},
    {id:7,name:'深夜应援电台',desc:'适合深夜听的应援曲',cover:IMG('playlist-7.svg'),songs:10,plays:6200,creator:'电台主持'},
    {id:8,name:'活力应援运动歌单',desc:'运动时听的应援歌曲',cover:IMG('playlist-8.svg'),songs:16,plays:3800,creator:'运动达人'},
];

const songs = [
    {id:1,name:'星光',artist:'星邱',duration:'3:45',cover:IMG('playlist-1.svg')},
    {id:2,name:'追光者',artist:'星邱粉丝团',duration:'4:12',cover:IMG('playlist-2.svg')},
    {id:3,name:'应援之歌',artist:'星邱粉丝团',duration:'3:28',cover:IMG('playlist-3.svg')},
    {id:4,name:'星空下的约定',artist:'星邱',duration:'4:05',cover:IMG('playlist-4.svg')},
    {id:5,name:'为你而歌',artist:'星邱粉丝团',duration:'3:56',cover:IMG('playlist-5.svg')},
    {id:6,name:'闪耀时刻',artist:'星邱',duration:'3:33',cover:IMG('playlist-6.svg')},
];

const messages = [
    {id:1,type:'system',icon:'fas fa-bell',title:'系统通知：应援站全新改版上线',content:'亲爱的粉丝们，星邱应援站已完成全面升级，新增音乐模块...',time:'10分钟前',unread:true},
    {id:2,type:'comment',icon:'fas fa-comment',title:'星邱小迷妹 回复了你的帖子',content:'太棒了！我也在现场，真的很感动！',time:'30分钟前',unread:true},
    {id:3,type:'like',icon:'fas fa-heart',title:'设计大佬 赞了你的帖子',content:'分享一组超美的星邱应援壁纸',time:'1小时前',unread:true},
    {id:4,type:'mention',icon:'fas fa-at',title:'音乐小达人 在帖子中@了你',content:'快来听听这个新的应援歌单！',time:'2小时前',unread:false},
    {id:5,type:'comment',icon:'fas fa-comment',title:'新粉小星星 评论了你的帖子',content:'新人报道！从今天开始一起为星邱应援！',time:'3小时前',unread:false},
    {id:6,type:'like',icon:'fas fa-heart',title:'活动组小A 赞了你的评论',content:'线下应援活动真的太有意义了',time:'5小时前',unread:false},
    {id:7,type:'system',icon:'fas fa-bell',title:'系统通知：本周应援活动提醒',content:'线上应援歌曲投票正在进行中，快来投票吧！',time:'1天前',unread:false},
];

const dynamics = [
    {title:'应援歌曲《星光》播放量突破 100 万',content:'感谢每一位粉丝的支持！让我们继续为星邱打call！',time:'2小时前',icon:'fas fa-trophy'},
    {title:'全新应援海报已上线物料中心',content:'官方设计团队精心制作，欢迎前往物料中心下载使用',time:'6小时前',icon:'fas fa-image'},
    {title:'线上应援投票活动正式开启',content:'为你最喜爱的应援歌曲投票，有机会获得签名周边',time:'1天前',icon:'fas fa-vote-yea'},
    {title:'应援站用户突破 10 万',content:'感谢所有粉丝的加入，社区氛围越来越好了！',time:'2天前',icon:'fas fa-users'},
    {title:'线下演唱会应援物资准备指南',content:'详细攻略发布，帮助大家更好地参与线下应援',time:'3天前',icon:'fas fa-map-marker-alt'},
];

/* ===== RENDER FUNCTIONS ===== */
const categoryLabel = {daily:'日常应援',music:'音乐相关',resources:'资源物料',official:'官方公告'};

function renderHotPosts() {
    document.getElementById('hotPosts').innerHTML = posts.slice(0,6).map(p => `
        <div class="post-card" onclick="showPostDetail(${p.id})">
            <div class="post-card-img">
                <img src="${p.cover}" alt="${p.title}" loading="lazy">
                <span class="card-tag">${categoryLabel[p.category]}</span>
            </div>
            <div class="post-card-body">
                <h3>${p.title}</h3>
                <div class="post-card-meta">
                    <div class="author">
                        <div class="author-avatar"><img src="${p.avatar}" alt="${p.author}"></div>
                        <span>${p.author}</span>
                        ${p.admin?'<span class="admin-badge">官方</span>':''}
                    </div>
                    <span>${p.time}</span>
                </div>
                <div class="post-card-stats">
                    <span><i class="far fa-heart"></i> ${p.likes}</span>
                    <span><i class="far fa-comment"></i> ${p.comments}</span>
                    <span><i class="far fa-eye"></i> ${p.reads}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFeaturedMaterials() {
    document.getElementById('featuredMaterials').innerHTML = materials.slice(0,4).map(m => `
        <div class="material-card">
            <div class="material-card-img">
                <img src="${m.cover}" alt="${m.name}" loading="lazy">
                <div class="overlay">
                    <button class="overlay-btn" title="预览"><i class="fas fa-eye"></i></button>
                    <button class="overlay-btn" title="下载" onclick="event.stopPropagation(); showLoginPrompt()"><i class="fas fa-download"></i></button>
                    <button class="overlay-btn" title="收藏" onclick="event.stopPropagation(); showLoginPrompt()"><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="material-card-body">
                <h3>${m.name}</h3>
                <div class="material-card-info">
                    <span class="type-tag">${m.type}</span>
                    <div class="material-stats">
                        <span><i class="fas fa-download"></i> ${m.downloads}</span>
                        <span><i class="fas fa-heart"></i> ${m.favorites}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderOfficialDynamics() {
    document.getElementById('officialDynamics').innerHTML = dynamics.map(d => `
        <div class="dynamics-item">
            <div class="dynamics-icon"><i class="${d.icon}"></i></div>
            <div class="dynamics-content">
                <h4>${d.title}</h4>
                <p>${d.content}</p>
            </div>
            <span class="dynamics-time">${d.time}</span>
        </div>
    `).join('');
}

function renderPostList() {
    document.getElementById('postList').innerHTML = posts.map(p => `
        <div class="post-list-item" onclick="showPostDetail(${p.id})">
            <div class="post-list-thumb"><img src="${p.cover}" alt="${p.title}" loading="lazy"></div>
            <div class="post-list-content">
                <h3>${p.title}</h3>
                <p>这是一篇关于${categoryLabel[p.category]}的帖子内容预览，记录了粉丝们的精彩应援瞬间...</p>
                <div class="post-list-bottom">
                    <div class="post-list-author">
                        <div class="author-avatar"><img src="${p.avatar}" alt="${p.author}"></div>
                        <span>${p.author}</span>
                        ${p.admin?'<span class="admin-badge">官方</span>':''}
                        <span>· ${p.time}</span>
                    </div>
                    <div class="post-list-stats">
                        <span><i class="far fa-heart"></i> ${p.likes}</span>
                        <span><i class="far fa-comment"></i> ${p.comments}</span>
                        <span><i class="far fa-eye"></i> ${p.reads}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPlaylistGrid() {
    document.getElementById('playlistGrid').innerHTML = playlists.map(pl => `
        <div class="playlist-card" onclick="showToast('正在打开歌单...', 'info')">
            <div class="playlist-cover">
                <img src="${pl.cover}" alt="${pl.name}" loading="lazy">
                <div class="play-overlay"><i class="fas fa-play"></i></div>
            </div>
            <h3>${pl.name}</h3>
            <div class="playlist-desc">${pl.desc}</div>
            <div class="playlist-info">
                ${pl.isOfficial?'<span class="official-tag">官方</span>':''}
                <span><i class="fas fa-music"></i> ${pl.songs}首</span>
                <span><i class="fas fa-play"></i> ${pl.plays}</span>
            </div>
        </div>
    `).join('');
}

function renderSongList() {
    document.getElementById('songList').innerHTML = songs.map((s,i) => `
        <div class="song-item ${i===0?'playing':''}" onclick="playSong(${i})">
            <span class="song-index">${i===0?'<i class="fas fa-volume-up" style="color:var(--primary)"></i>':(i+1)}</span>
            <div class="song-cover"><img src="${s.cover}" alt="${s.name}"></div>
            <div class="song-info">
                <div class="song-name">${s.name}</div>
                <div class="song-artist">${s.artist}</div>
            </div>
            <span class="song-duration">${s.duration}</span>
            <div class="song-actions">
                <button title="播放" onclick="event.stopPropagation(); playSong(${i})"><i class="fas fa-play"></i></button>
                <button title="收藏" onclick="event.stopPropagation(); showLoginPrompt()"><i class="far fa-heart"></i></button>
            </div>
        </div>
    `).join('');
}

function renderMaterialsGrid() {
    document.getElementById('materialsGrid').innerHTML = materials.map(m => `
        <div class="material-card">
            <div class="material-card-img">
                <img src="${m.cover}" alt="${m.name}" loading="lazy">
                <div class="overlay">
                    <button class="overlay-btn" title="预览"><i class="fas fa-eye"></i></button>
                    <button class="overlay-btn" title="下载" onclick="event.stopPropagation(); showLoginPrompt()"><i class="fas fa-download"></i></button>
                    <button class="overlay-btn" title="收藏" onclick="event.stopPropagation(); showLoginPrompt()"><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="material-card-body">
                <h3>${m.name}</h3>
                <div class="material-card-info">
                    <span class="type-tag">${m.type}</span>
                    <div class="material-stats">
                        <span><i class="fas fa-download"></i> ${m.downloads}</span>
                        <span><i class="fas fa-heart"></i> ${m.favorites}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMessages() {
    document.getElementById('messageList').innerHTML = messages.map(m => `
        <div class="message-item ${m.unread?'unread':''}">
            <div class="message-icon ${m.type}"><i class="${m.icon}"></i></div>
            <div class="message-body">
                <h4>${m.title}</h4>
                <p>${m.content}</p>
            </div>
            <span class="message-time">${m.time}</span>
            <button class="message-delete" title="删除"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

/* ===== POST DETAIL ===== */
function showPostDetail(id) {
    const p = posts.find(x=>x.id===id) || posts[0];
    document.getElementById('postDetail').innerHTML = `
        <a class="back-btn-inline" onclick="navigateTo('community')" style="display:inline-flex;margin-bottom:20px;color:var(--primary);font-size:14px">
            <i class="fas fa-arrow-left"></i>&nbsp;返回社区
        </a>
        <div class="post-detail-header">
            <h1>${p.title}</h1>
            <div class="post-detail-meta">
                <div class="post-detail-author">
                    <div class="author-avatar"><img src="${p.avatar}" alt="${p.author}"></div>
                    <div>
                        <div style="font-weight:600">${p.author} ${p.admin?'<span class="admin-badge">官方</span>':''}</div>
                        <div style="font-size:12px;color:var(--text-muted)">${p.time} · 阅读 ${p.reads}</div>
                    </div>
                </div>
                <span style="background:var(--primary-bg);color:var(--primary);padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">${categoryLabel[p.category]}</span>
            </div>
        </div>
        <div class="post-detail-body">
            <p>大家好！今天来分享一篇关于应援的帖子。作为一名忠实的星邱粉丝，我想记录下这些美好的瞬间。</p>
            <img src="${p.cover}" alt="帖子配图" style="width:100%;border-radius:12px;margin:16px 0">
            <p>应援是粉丝对偶像最真挚的表达方式。每一次挥舞荧光棒，每一首合唱的歌曲，都是我们对星邱最深沉的爱。在这里，我们不只是粉丝，更是一个温暖的大家庭。</p>
            <p>希望大家也能分享自己的应援故事，让我们一起为星邱创造更多美好的回忆！⭐</p>
        </div>
        <div class="post-detail-actions">
            <button class="action-btn" onclick="this.classList.toggle('active'); this.querySelector('i').classList.toggle('fas'); this.querySelector('i').classList.toggle('far')">
                <i class="far fa-heart"></i> <span>${p.likes}</span>
            </button>
            <button class="action-btn"><i class="far fa-comment"></i> <span>${p.comments}</span></button>
            <button class="action-btn" onclick="this.classList.toggle('active')"><i class="far fa-bookmark"></i> <span>收藏</span></button>
            <button class="action-btn" onclick="showToast('链接已复制','success')"><i class="fas fa-share-alt"></i> <span>分享</span></button>
        </div>
        <div class="comments-section">
            <h3>评论区 (${p.comments})</h3>
            <div class="comment-input-box">
                <div class="input-avatar"><img src="${IMG('avatar-default.svg')}" alt="我"></div>
                <div class="comment-input-wrap">
                    <textarea placeholder="写下你的评论..." id="commentInput" oninput="document.querySelector('.comment-send').classList.toggle('active', this.value.length>0)"></textarea>
                    <button class="comment-send" onclick="submitComment()">发送</button>
                </div>
            </div>
            <div id="commentList">
                <div class="comment-item">
                    <div class="comment-avatar"><img src="${IMG('avatar-1.svg')}" alt="星邱小迷妹"></div>
                    <div class="comment-body">
                        <div class="comment-header"><span class="name">星邱小迷妹</span><span class="time">2小时前</span></div>
                        <div class="comment-text">太棒了！我也在现场，真的很感动！星邱的每一首歌都能唱到心里 💜</div>
                        <div class="comment-actions">
                            <button onclick="this.classList.toggle('active')"><i class="far fa-heart"></i> 23</button>
                            <button><i class="fas fa-reply"></i> 回复</button>
                            <button><i class="fas fa-flag"></i> 举报</button>
                        </div>
                    </div>
                </div>
                <div class="comment-item">
                    <div class="comment-avatar"><img src="${IMG('avatar-2.svg')}" alt="设计大佬"></div>
                    <div class="comment-body">
                        <div class="comment-header"><span class="name">设计大佬</span><span class="time">5小时前</span></div>
                        <div class="comment-text">拍得太好了！这张图的光影效果绝了，可以用来做壁纸吗？</div>
                        <div class="comment-actions">
                            <button><i class="far fa-heart"></i> 15</button>
                            <button><i class="fas fa-reply"></i> 回复</button>
                            <button><i class="fas fa-flag"></i> 举报</button>
                        </div>
                        <div class="reply-block">
                            <div class="reply-item">
                                <div class="comment-avatar"><img src="${IMG('avatar-1.svg')}" alt="星邱小迷妹"></div>
                                <div class="comment-body">
                                    <div class="comment-header"><span class="name">星邱小迷妹</span><span class="time">4小时前</span></div>
                                    <div class="comment-text"><span style="color:var(--primary)">@设计大佬</span> 当然可以！随便用~ ⭐</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    navigateTo('post-detail');
}

/* ===== NAVIGATION ===== */
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-'+page);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === page);
    });
    window.scrollTo({top:0, behavior:'smooth'});
    closeMobileMenu();
    document.getElementById('searchDropdown').classList.remove('show');
    document.getElementById('userDropdown').classList.remove('show');
}

/* ===== BANNER ===== */
let currentSlide = 0, bannerTimer;
function startBanner() { bannerTimer = setInterval(nextSlide, 5000); }
function nextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}
function prevSlide() { goToSlide((currentSlide - 1 + 3) % 3); }
function goToSlide(n) {
    clearInterval(bannerTimer);
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    startBanner();
}

/* ===== SCROLL ===== */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    document.getElementById('backToTop').classList.toggle('hidden', window.scrollY < 400);
});
function scrollToTop() { window.scrollTo({top:0, behavior:'smooth'}); }

/* ===== SEARCH ===== */
function handleSearch(val) {
    const dd = document.getElementById('searchDropdown');
    if (!val.trim()) { dd.classList.remove('show'); return; }
    dd.innerHTML = [
        {icon:'fas fa-comments', text:'搜索社区帖子: '+val},
        {icon:'fas fa-music', text:'搜索应援歌曲: '+val},
        {icon:'fas fa-palette', text:'搜索物料资源: '+val},
        {icon:'fas fa-user', text:'搜索用户: '+val},
    ].map(r => `<div class="search-result-item"><i class="${r.icon}"></i> ${r.text}</div>`).join('');
    dd.classList.add('show');
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) document.getElementById('searchDropdown').classList.remove('show');
    if (!e.target.closest('.nav-user')) document.getElementById('userDropdown').classList.remove('show');
});

/* ===== MENUS ===== */
function toggleUserMenu() { document.getElementById('userDropdown').classList.toggle('show'); }
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('show'); }
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('show'); }

/* ===== MODALS ===== */
function showModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function showPostModal() { showModal('postModal'); }
function showLoginPrompt() { showModal('loginPrompt'); }

/* ===== LOGIN ===== */
function switchLoginTab(tab) {
    document.getElementById('loginForm').classList.toggle('hidden', tab!=='login');
    document.getElementById('registerForm').classList.toggle('hidden', tab!=='register');
    document.getElementById('forgotForm').classList.toggle('hidden', tab!=='forgot');
    document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
    if (tab==='forgot') tab='login';
    document.querySelectorAll('.login-tab')[tab==='login'?0:1].classList.add('active');
}
function handleLogin(e) { e.preventDefault(); showToast('登录成功！欢迎回来 ⭐','success'); closeModal('loginModal'); }
function handleRegister(e) { e.preventDefault(); showToast('注册成功！欢迎加入 ⭐','success'); closeModal('loginModal'); }
function handleForgot(e) { e.preventDefault(); showToast('密码重置成功','success'); switchLoginTab('login'); }
function logout() { showToast('已退出登录','info'); }
function togglePwd(inputId) {
    const inp = document.getElementById(inputId);
    inp.type = inp.type==='password'?'text':'password';
}

/* ===== POST ===== */
function handlePost(e) {
    e.preventDefault();
    showToast('发布成功！帖子已上线 🎉','success');
    closeModal('postModal');
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('titleCount').textContent = '0';
}
function submitComment() {
    const inp = document.getElementById('commentInput');
    if (!inp.value.trim()) return;
    const cl = document.getElementById('commentList');
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.style.animation = 'fadeInUp 0.3s ease';
    div.innerHTML = `
        <div class="comment-avatar"><img src="${IMG('avatar-default.svg')}" alt="我"></div>
        <div class="comment-body">
            <div class="comment-header"><span class="name">星邱粉丝</span><span class="time">刚刚</span></div>
            <div class="comment-text">${inp.value}</div>
            <div class="comment-actions">
                <button><i class="far fa-heart"></i> 0</button>
                <button><i class="fas fa-reply"></i> 回复</button>
                <button><i class="fas fa-trash"></i> 删除</button>
            </div>
        </div>
    `;
    cl.insertBefore(div, cl.firstChild);
    inp.value = '';
    document.querySelector('.comment-send').classList.remove('active');
    showToast('评论成功','success');
}

/* ===== FILTERS ===== */
function filterCategory(btn) {
    btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    renderPostList();
}
function filterMusic(btn) {
    btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
}
function filterMaterials(btn) {
    btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
}
function filterMessages(btn) {
    btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
}
function filterProfile(btn, tab) {
    btn.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    const el = document.getElementById('profileContent');
    const texts = {
        posts:'暂无发布帖子，快去发布你的应援内容吧',
        comments:'暂无评论记录',
        favorites:'暂无收藏内容，快去收藏你喜欢的应援内容吧',
        playlists:'暂无创建歌单，快去创建你的专属应援歌单吧'
    };
    const icons = {posts:'fa-file-alt',comments:'fa-comment',favorites:'fa-bookmark',playlists:'fa-music'};
    el.innerHTML = `<div class="empty-state"><i class="fas ${icons[tab]}"></i><p>${texts[tab]}</p></div>`;
}
function markAllRead() {
    messages.forEach(m => m.unread = false);
    document.getElementById('unreadBadge').textContent = '0';
    renderMessages();
    showToast('已全部标记为已读','success');
}

/* ===== PLAYER ===== */
let isPlaying = false, currentSongIdx = 0;
function togglePlay() {
    isPlaying = !isPlaying;
    document.getElementById('playBtn').innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    document.getElementById('coverDisc').classList.toggle('spinning', isPlaying);
    document.getElementById('fabIcon').className = isPlaying ? 'fas fa-pause' : 'fas fa-music';
}
function playSong(idx) {
    currentSongIdx = idx;
    const s = songs[idx];
    document.getElementById('playerSongName').textContent = s.name;
    document.getElementById('playerSongArtist').textContent = s.artist;
    document.getElementById('totalTime').textContent = s.duration;
    document.getElementById('playerCoverImg').src = s.cover;
    document.querySelectorAll('.song-item').forEach((el,i) => el.classList.toggle('playing', i===idx));
    if (!isPlaying) togglePlay();
}
function nextSong() { playSong((currentSongIdx+1) % songs.length); }
function prevSong() { playSong((currentSongIdx-1+songs.length) % songs.length); }
function toggleMute() {
    const icon = document.getElementById('volumeIcon');
    icon.classList.toggle('fa-volume-up');
    icon.classList.toggle('fa-volume-mute');
}
function togglePlayMode() { showToast('切换播放模式','info'); }
function toggleFavSong() {
    const btn = document.getElementById('favSongBtn');
    btn.classList.toggle('active');
    btn.innerHTML = btn.classList.contains('active') ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    showToast(btn.classList.contains('active') ? '已收藏' : '已取消收藏', 'success');
}
function seekTo(e) {
    const bar = document.getElementById('progressBar');
    const pct = (e.offsetX / bar.offsetWidth) * 100;
    document.getElementById('progressFill').style.width = pct+'%';
    document.getElementById('progressDot').style.left = pct+'%';
}
setInterval(() => {
    if (!isPlaying) return;
    const fill = document.getElementById('progressFill');
    let w = parseFloat(fill.style.width) || 0;
    w = (w + 0.3) % 100;
    fill.style.width = w+'%';
    document.getElementById('progressDot').style.left = w+'%';
    const cur = Math.floor(225 * w / 100);
    document.getElementById('currentTime').textContent = Math.floor(cur/60)+':'+String(cur%60).padStart(2,'0');
}, 300);

/* ===== TOAST ===== */
function showToast(msg, type='info') {
    const container = document.getElementById('toastContainer');
    const icons = {success:'fas fa-check-circle', error:'fas fa-exclamation-circle', info:'fas fa-info-circle'};
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="${icons[type]}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, 2500);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    renderHotPosts();
    renderFeaturedMaterials();
    renderOfficialDynamics();
    renderPostList();
    renderPlaylistGrid();
    renderSongList();
    renderMaterialsGrid();
    renderMessages();
    startBanner();
});
