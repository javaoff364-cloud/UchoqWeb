<script setup>
import { ref } from 'vue'
const features=[
['⚡','Tezkor','Xabarlar, guruhlar va media bilan qulay Android tajribasi.'],
['🔒','Xavfsizlik','Maxfiylik va xavfsizlikni birinchi o‘ringa qo‘yadigan yondashuv.'],
['☁','Media','Rasm, video, fayl va boshqa kontentlarni suhbatlarda ulashing.'],
['👥','Guruhlar','Do‘stlar, jamoalar va kanallar bilan bog‘laning.'],
['🔔','Bildirishnomalar','Muhim xabarlarni vaqtida ko‘rish uchun bildirishnomalar.'],
['🎨','Uchoq uslubi','Sodda, toza va Uchoq brendiga mos interfeys.']
]
const steps=[
['01','Yuklab oling','So‘nggi Android APKni to‘g‘ridan-to‘g‘ri yuklab oling.'],
['02','O‘rnating','APKni Android qurilmangizga o‘rnating.'],
['03','Uchoqdan foydalaning','Hisobingizga kiring va suhbatlaringizni davom ettiring.']
]
const menu=ref(false)
const DOWNLOAD='https://github.com/javaoff364-cloud/Uchoq/releases/download/v0.1.0/app.apk'
</script>
<template>
<main class="page">
<nav class="nav"><a class="brand" href="#"><img src="/uchoq-icon.svg" alt="Uchoq"><span>Uchoq</span><b>BETA</b></a>
<button class="hamb" @click="menu=!menu">☰</button>
<div class="navlinks" :class="{open:menu}"><a href="#features" @click="menu=false">Imkoniyatlar</a><a href="#how" @click="menu=false">Qanday ishlaydi</a><a href="#download" @click="menu=false">Yuklab olish</a><a href="#contact" @click="menu=false">Aloqa</a><a href="https://github.com/javaoff364-cloud/Uchoq" target="_blank">GitHub ↗</a></div>
<a class="navDownload" :href="DOWNLOAD">APK ↓</a></nav>
<section class="hero"><div class="heroCopy"><div class="eyebrow"><i></i> Android uchun yangi avlod messenjer</div><h1>Ulaning.<br><span>Uchuing.</span></h1><p>Uchoq — suhbatlar, guruhlar, kanallar va media uchun yaratilayotgan zamonaviy Android messenjer.</p><div class="actions"><a class="btn primary" :href="DOWNLOAD">To‘g‘ridan-to‘g‘ri yuklab olish <span>↓</span></a><a class="btn ghost" href="https://github.com/javaoff364-cloud/Uchoq/releases" target="_blank">Releases <span>↗</span></a></div><div class="meta"><span>✓ Android</span><span>✓ Bepul</span><span>✓ Ochiq manba</span></div></div>
<div class="visual"><div class="glow"></div><div class="phone"><div class="notch"></div><div class="screen"><div class="screenTop"><img src="/uchoq-icon.svg"><div><b>Uchoq</b><small>online</small></div><span>⋮</span></div><div v-for="(c,i) in ['Uchoq Team','Do‘stlar','News']" :key="c" class="chat"><div class="avatar" :class="'a'+i">{{c[0]}}</div><div><b>{{c}}</b><p>{{i===0?'Uchoqqa xush kelibsiz! 👋':i===1?'Bugun Uchoqni sinab ko‘rdingmi?':'Yangi yangilanishlar tez orada...'}}</p><small>14:32</small></div></div><div class="composer">Xabar yozing... <span>➤</span></div></div></div><div class="floatCard"><img src="/uchoq-icon.svg"><div><b>Uchoq</b><small>Simple. Fast. Yours.</small></div></div></div></section>
<section class="trust"><div v-for="(x,i) in ['Oddiy interfeys','Android uchun','Doim rivojlanadi','Ochiq manba']" :key="x"><strong>0{{i+1}}</strong><span>{{x}}</span></div></section>
<section class="section" id="features"><div class="sectionHead"><div><div class="eyebrow">IMKONIYATLAR</div><h2>Kerakli narsalar.<br><span>Bir joyda.</span></h2></div><p>Uchoq kundalik yozishmalardan katta jamoalargacha bo‘lgan suhbatlar uchun yaratilmoqda.</p></div><div class="cards"><article v-for="(f,i) in features" :key="f[1]" class="card"><div class="cardTop"><span>{{f[0]}}</span><small>0{{i+1}}</small></div><h3>{{f[1]}}</h3><p>{{f[2]}}</p><b>↗</b></article></div></section>
<section class="section how" id="how"><div class="eyebrow">BOSHLASH</div><h2>Uchoq bilan boshlash<br><span>juda oson.</span></h2><div class="steps"><article v-for="s in steps" :key="s[0]"><strong>{{s[0]}}</strong><div><h3>{{s[1]}}</h3><p>{{s[2]}}</p></div></article></div></section>
<section class="section update"><div class="updateVisual"><img src="/uchoq-icon.svg"><div></div></div><div><div class="eyebrow">DOIM YANGILANADI</div><h2>Uchoq o‘sishda<br><span>davom etadi.</span></h2><p>Yangi imkoniyatlar, dizayn yaxshilanishlari va tuzatishlar GitHub loyihasida e’lon qilinadi.</p><a class="textLink" href="https://github.com/javaoff364-cloud/Uchoq/commits" target="_blank">Yangilanishlarni ko‘rish ↗</a></div></section>
<section class="section" id="download"><div class="downloadBox"><div class="downloadIcon"><img src="/uchoq-icon.svg"></div><div class="downloadCopy"><div class="eyebrow">ANDROID APK</div><h2>Uchoqni hozir<br>sinab ko‘ring.</h2><p>APKni bir tugma bilan to‘g‘ridan-to‘g‘ri yuklab oling.</p></div><a class="btn primary big" :href="DOWNLOAD">APK yuklab olish <span>↓</span></a></div></section>
<section class="section contact" id="contact"><div><div class="eyebrow">ALOQA</div><h2>Yordam kerakmi?<br><span>Biz bilan bog‘laning.</span></h2><p>Muammo, taklif yoki savolingiz bo‘lsa, GitHub orqali adminlarga yozishingiz yoki Uchoq kanaliga o‘tishingiz mumkin.</p></div><div class="contactActions"><a class="btn primary" href="https://github.com/javaoff364-cloud/Uchoq/issues/new" target="_blank">Admin bilan aloqa ↗</a><a class="btn ghost" href="https://t.me/uchoqmsg" target="_blank">Uchoq Telegram ↗</a></div></section>
<footer class="footer"><div class="footerBrand"><img src="/uchoq-icon.svg"><div><b>Uchoq</b><small>Erkin va zamonaviy messenjer.</small></div></div><div class="footerLinks"><a href="#features">Imkoniyatlar</a><a href="https://github.com/javaoff364-cloud/Uchoq/releases" target="_blank">Releases</a><a href="#contact">Aloqa</a></div><p>© 2026 Uchoq. Mustaqil loyiha.</p></footer>
</main></template>