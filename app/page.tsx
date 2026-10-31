const features=[
  ["⚡","Tezkor","Xabarlar, guruhlar va media bilan qulay Android tajribasi."],
  ["🔒","Xavfsizlik","Maxfiylik va xavfsizlikni birinchi o‘ringa qo‘yadigan yondashuv."],
  ["☁","Media","Rasm, video, fayl va boshqa kontentlarni suhbatlarda ulashing."],
  ["👥","Guruhlar","Do‘stlar, jamoalar va kanallar bilan bog‘laning."],
  ["🔔","Bildirishnomalar","Muhim xabarlarni vaqtida ko‘rish uchun bildirishnomalar."],
  ["🎨","Uchoq uslubi","Sodda, toza va Uchoq brendiga mos interfeys."]
];
const steps=[
  ["01","Yuklab oling","GitHub Releases sahifasidan so‘nggi Android APKni oling."],
  ["02","O‘rnating","APKni Android qurilmangizga o‘rnating."],
  ["03","Uchoqdan foydalaning","Hisobingizga kiring va suhbatlaringizni davom ettiring."]
];
export default function Home(){
return <main className="page">
  <nav className="nav">
    <a className="brand" href="#"><img className="brandIcon" src="/uchoq-icon.svg" alt="Uchoq"/><span>Uchoq</span><span className="beta">BETA</span></a>
    <div className="navlinks"><a href="#features">Imkoniyatlar</a><a href="#how">Qanday ishlaydi</a><a href="#download">Yuklab olish</a><a href="https://github.com/javaoff364-cloud/Uchoq" target="_blank" rel="noreferrer">GitHub ↗</a></div>
    <a className="navDownload" href="https://github.com/javaoff364-cloud/Uchoq/releases" target="_blank" rel="noreferrer">Yuklab olish</a>
  </nav>

  <section className="hero">
    <div className="heroCopy">
      <div className="eyebrow"><span className="pulse"></span> Android uchun yangi avlod messenjer</div>
      <h1>Ulaning.<br/><span>Uchuing.</span></h1>
      <p>Uchoq — suhbatlar, guruhlar, kanallar va media uchun yaratilayotgan zamonaviy Android messenjer.</p>
      <div className="actions"><a className="btn primary" href="#download">Uchoqni yuklab olish <span>↓</span></a><a className="btn ghost" href="https://github.com/javaoff364-cloud/Uchoq" target="_blank" rel="noreferrer">Open source <span>↗</span></a></div>
      <div className="heroMeta"><span>✓ Android</span><span>✓ Bepul</span><span>✓ Ochiq manba</span></div>
    </div>
    <div className="visual">
      <div className="glow"></div><div className="orbit orbit1"></div><div className="orbit orbit2"></div>
      <div className="phone"><div className="notch"></div><div className="screen">
        <div className="screenTop"><img src="/uchoq-icon.svg" alt=""/><div><b>Uchoq</b><small>online</small></div><span>⋮</span></div>
        <div className="chat"><div className="avatar">U</div><div><b>Uchoq Team</b><p>Uchoqqa xush kelibsiz! 👋</p><small>14:32</small></div></div>
        <div className="chat"><div className="avatar second">D</div><div><b>Do‘stlar</b><p>Bugun Uchoqni sinab ko‘rdingmi?</p><small>14:28</small></div></div>
        <div className="chat"><div className="avatar third">N</div><div><b>News</b><p>Yangi yangilanishlar tez orada...</p><small>13:51</small></div></div>
        <div className="composer">Xabar yozing... <span>➤</span></div>
      </div></div>
      <div className="floatCard"><img src="/uchoq-icon.svg" alt=""/><div><b>Uchoq</b><small>Simple. Fast. Yours.</small></div></div>
    </div>
  </section>

  <section className="trust"><div><strong>01</strong><span>Oddiy interfeys</span></div><div><strong>02</strong><span>Android uchun</span></div><div><strong>03</strong><span>Doim rivojlanadi</span></div><div><strong>04</strong><span>Ochiq manba</span></div></section>

  <section className="section" id="features">
    <div className="sectionHead"><div><div className="eyebrow">IMKONIYATLAR</div><h2>Kerakli narsalar.<br/><span>Bir joyda.</span></h2></div><p>Uchoq kundalik yozishmalardan katta jamoalargacha bo‘lgan suhbatlar uchun yaratilmoqda.</p></div>
    <div className="cards">{features.map(([i,t,d],n)=><div className="card" key={t}><div className="cardTop"><span className="icon">{i}</span><small>0{n+1}</small></div><h3>{t}</h3><p>{d}</p><span className="arrow">↗</span></div>)}</div>
  </section>

  <section className="how section" id="how">
    <div className="eyebrow">BOSHLASH</div><h2>Uchoq bilan boshlash<br/><span>juda oson.</span></h2>
    <div className="steps">{steps.map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
  </section>

  <section className="update section">
    <div className="updateVisual"><img src="/uchoq-icon.svg" alt="Uchoq"/><div className="ring"></div></div>
    <div><div className="eyebrow">DOIM YANGILANADI</div><h2>Uchoq o‘sishda<br/><span>davom etadi.</span></h2><p className="muted">Yangi imkoniyatlar, dizayn yaxshilanishlari va tuzatishlar GitHub loyihasida e’lon qilinadi.</p><a className="textLink" href="https://github.com/javaoff364-cloud/Uchoq/commits" target="_blank" rel="noreferrer">Yangilanishlarni ko‘rish ↗</a></div>
  </section>

  <section className="downloadSection section" id="download">
    <div className="downloadBox"><div className="downloadIcon"><img src="/uchoq-icon.svg" alt=""/></div><div className="downloadCopy"><div className="eyebrow">ANDROID</div><h2>Uchoqni hozir<br/>sinab ko‘ring.</h2><p>So‘nggi APK GitHub Releases sahifasida mavjud.</p></div><a className="btn primary big" href="https://github.com/javaoff364-cloud/Uchoq/releases" target="_blank" rel="noreferrer">APK yuklab olish <span>↓</span></a></div>
  </section>

  <footer className="footer"><div className="footerBrand"><img src="/uchoq-icon.svg" alt="Uchoq"/><div><b>Uchoq</b><small>Erkin va zamonaviy messenjer.</small></div></div><div className="footerLinks"><a href="#features">Imkoniyatlar</a><a href="https://github.com/javaoff364-cloud/Uchoq" target="_blank" rel="noreferrer">GitHub</a><a href="https://github.com/javaoff364-cloud/Uchoq/releases" target="_blank" rel="noreferrer">Releases</a></div><p>© 2026 Uchoq. Mustaqil loyiha.</p></footer>
</main>}