/* ==========================================================================
   ecomfixer — i18n
   Two dictionaries with identical key sets, plus the language switcher.

     data-i18n="key"                      element contents (inline HTML allowed)
     data-i18n-attr="alt:key,content:key" attributes, comma-separated pairs

   The English copy also lives inline in index.html so the page is complete
   without JavaScript. Keep the two in sync — see README.md.
   ========================================================================== */
(() => {
  'use strict';

  const STORAGE_KEY = 'ecomfixer_lang';

  const en = {
    'meta.title': `Shopify developer — stores, CRO and checkout recovery | ecomfixer`,
    'common.skip': `Skip to content`,
    'nav.work': `Work`,
    'nav.approach': `Approach`,
    'nav.cro': `CRO`,
    'nav.recovery': `Recovery`,
    'nav.about': `About`,
    'nav.cta': `Start a project`,
    'hero.eyebrow': `Shopify development · CRO · Retention`,
    'hero.title': `Shopify stores built by the person <em>who gets paid to fix conversion.</em>`,
    'hero.sub': `Most developers hand you a store, then someone like me gets paid to fix its conversion rate. I skip the extra step. Speed, checkout friction, and the mobile buying path are handled in version one.`,
    'hero.ctaPrimary': `See the stores`,
    'hero.ctaSecondary': `Get a quote for your build`,
    'hero.proof1': `Shopify stores built`,
    'hero.proof2': `conversion rate, 60 days`,
    'hero.proof3': `recovered in 90 days`,
    'hero.proof4': `years in e-commerce growth`,
    'work.eyebrow': `Selected work`,
    'work.title': `Stores with the optimisation already inside.`,
    'work.intro': `Every store I ship has CRO built in from the first commit: speed, checkout friction, the mobile buying path.`,
    'work.wisdomining.desc': `Mining hardware and parts. Store and repair service in one funnel.`,
    'work.chip.sections': `Custom sections`,
    'work.chip.mobileFirst': `Mobile-first`,
    'work.chip.catalogueRepair': `Catalogue + repair`,
    'work.visit': `Visit live site`,
    'common.newTab': `(opens in a new tab)`,
    'work.toggle': `What I built`,
    'work.brief': `Brief`,
    'work.wisdomining.brief': `Wisdomining sells mining hardware and parts, and it also repairs machines. That puts two very different visitors on the same storefront: one wants to buy a unit, the other has a broken one and wants to know whether it can be fixed and what happens next. The job was to serve both from one store, without splitting the audience across two sites.`,
    'work.built': `What I built`,
    'work.wisdomining.built': `A custom Shopify theme where both intents are visible from the first screen. Equipment and repair sit side by side in the main navigation, so neither visitor has to hunt for their path. Product pages lead with the specifications hardware buyers check before committing. The repair service gets its own pages, with a plain explanation of the process and a direct way to start.`,
    'work.tech': `Technical notes`,
    'work.wisdomining.tech': `Custom Liquid sections instead of a page builder, so new landing pages are assembled from existing blocks. Specifications are stored in metafields and edited in the Shopify admin, not in templates. The catalogue is organised by equipment type, which keeps technical products findable as the range grows. Built mobile-first, with speed and layout stability checked before handover.`,
    'work.aichun.desc': `Beauty brand. Minimal structure, built around conversion.`,
    'work.chip.pdp': `Conversion-first PDP`,
    'work.chip.brandSystem': `Brand system`,
    'work.aichun.brief': `A beauty brand with a range that runs from skincare to hair and oral care, and a wish for a clean, minimal store. The risk with minimal design is that it strips out what people need before they buy: what the product does, how to use it, and why to trust it. The brief was to keep the restraint and still give every product page a structure that sells.`,
    'work.aichun.built': `A product page that answers a buyer's questions in the order they ask them: what it is, what it does, how to use it, what's in it. Product images follow a set sequence, so every page tells the story the same way across the catalogue. A small brand system for type, spacing and colour keeps new pages consistent without a designer on call.`,
    'work.aichun.tech': `Mobile layout came first: price, options and the add-to-cart button were designed for a phone screen before anything else. Gallery images are sized and lazy-loaded so they don't slow the first screen. Express checkout sits next to the main button. Product details are driven by metafields, so the team updates content without touching code.`,
    'work.rabinkov.desc': `Electrical supply. Large catalogue, short path to enquiry.`,
    'work.chip.catalogue': `Catalogue architecture`,
    'work.chip.search': `Filtering &amp; search`,
    'work.chip.quotes': `Quote requests`,
    'work.rabinkov.brief': `An electrical supply business with thousands of SKUs and mostly trade buyers. These buyers usually know what they need. They want to find the right breaker or panel, confirm the specification and get a price, often for a quantity or a project rather than a single retail checkout. The store had to make a big catalogue easy to move through and turn a found product into an enquiry quickly.`,
    'work.rabinkov.built': `A catalogue structure that follows how buyers look for parts: by brand and by product type, both reachable from the main menu. Search sits at the centre of the header, because many visitors arrive knowing exactly what to type. Collection filters narrow a long list down to the attributes that matter. Product pages carry a quote request, so a buyer can ask for pricing without leaving the product.`,
    'work.rabinkov.tech': `Filters run on product attributes held in the store data, so new filter values come from the admin as the range grows, not from theme edits. Collection pages stay light enough to load fast with long product lists. The quote request carries the product with it, so the reply doesn't start with a clarifying question. Mobile-first, for buyers ordering from a job site.`,
    'work.swish.desc': `Dental care. Clean design over a selling structure.`,
    'work.chip.webflow': `Webflow build`,
    'work.chip.landing': `Landing structure`,
    'work.chip.copy': `Conversion copy`,
    'work.swish.brief': `Swish Oral Care runs modern dental clinics across several locations. The website doesn't sell products. Its job is to explain what makes the clinic different, reassure people who don't enjoy seeing a dentist, and get them to book. The brand needed a warm, clean look, with a page structure that moves a visitor from first impression to booking without friction.`,
    'work.swish.built': `A Webflow site built on a landing structure: the offer and a booking button on the first screen, then services, locations and the reasons to choose the clinic, with the call to book repeated where decisions get made. I wrote the conversion copy alongside the layout, so the message and the page were designed together instead of text being poured into a finished template.`,
    'work.swish.tech': `This one is Webflow, not Shopify, and that was deliberate. A clinic books appointments; it doesn't need a product catalogue, a cart or a checkout. Webflow gave full control over the design, and the clinic's team edits pages and posts in the visual editor without a developer. Paying for commerce features they would never use made no sense.`,
    'work.cta': `Need a store that sells from day one? Get in touch`,
    'approach.eyebrow': `What's included`,
    'approach.title': `Every build ships with the parts most developers leave out.`,
    'approach.1.title': `Liquid theme development`,
    'approach.1.body': `Custom sections written in Liquid for your products. No page builder layered on top, no unused code shipped to every visitor.`,
    'approach.2.title': `Metafield-driven content`,
    'approach.2.body': `Specs, FAQs and product details live in metafields. You edit them in the Shopify admin, and the templates stay untouched.`,
    'approach.3.title': `Speed budget`,
    'approach.3.body': `LCP and CLS are measured on real product pages before handover. If a change breaks the budget, it doesn't ship.`,
    'approach.4.title': `Mobile-first product pages`,
    'approach.4.body': `Most of the buying happens on a phone, so product pages are designed at phone width first. Desktop is the adaptation.`,
    'approach.5.title': `Express checkout`,
    'approach.5.body': `Shop Pay, Apple Pay and Google Pay, configured and tested on real devices. Fewer fields between the product and the payment.`,
    'approach.6.title': `A deliberate app stack`,
    'approach.6.body': `Every app has to earn its place. Anything that duplicates the theme or slows it down is replaced or removed before launch.`,
    'approach.7.title': `Analytics and events`,
    'approach.7.body': `GA4 and conversion tracking are set up and checked with test orders, so your dashboard matches what actually happened.`,
    'approach.8.title': `Handover documentation`,
    'approach.8.body': `A written guide to the theme, the sections and the apps. You own all of it, and any developer can pick it up after me.`,
    'cro.eyebrow': `Conversion rate optimisation`,
    'cro.title': `<span class="mono">0.33% → 1.05%</span> in 60 days. Sales <span class="mono">×4</span>.`,
    'cro.p1': `An ultra-niche Shopify store, badly under-optimised, which made it the perfect demonstration. Targeted changes to product pages and checkout: friction out, speed up, the store's actual selling point put where visitors look. No redesign theatre, no A/B-testing subscription. Sixty days later, conversion had tripled.`,
    'cro.p2': `Straight talk: this is a small store, so the raw numbers are small. 4 orders became 18 in a month. I show the conversion rate because it's the metric that doesn't care about store size. Tripling it means the same thing at 1,000 sessions or 1,000,000: every point of conversion is pure margin on traffic you already paid for.`,
    'cro.before.label': `March 2024 — before`,
    'cro.before.caption': `1,198 sessions · 4 orders · 0.33% conversion`,
    'cro.after.label': `May 2024 — after`,
    'cro.after.caption': `1,717 sessions · 18 orders · 1.05% conversion`,
    'cro.changes.title': `What I actually change`,
    'cro.changes.1': `<strong>Product page structure:</strong> the selling point where visitors actually look.`,
    'cro.changes.2': `<strong>Checkout friction:</strong> fewer fields, fewer surprises, fewer exits.`,
    'cro.changes.3': `<strong>Page speed:</strong> the images, apps and scripts slowing the first screen.`,
    'cro.changes.4': `<strong>Mobile layout:</strong> price, options and the buy button within thumb reach.`,
    'cro.changes.5': `<strong>Proof placement:</strong> reviews and guarantees next to the decision, not in the footer.`,
    'cro.changes.6': `<strong>Offer clarity:</strong> what it is, what it costs and when it arrives, on the first screen.`,
    'recovery.eyebrow': `Retention`,
    'recovery.title': `<span class="mono">$52,191</span> recovered in 90 days, without extra ad spend.`,
    'recovery.client': `Client: <strong>Meamo</strong>, a Korean beauty brand selling internationally. Published with permission.`,
    'recovery.before': `<strong>Before.</strong> Checkout abandoners got what most stores send: one email, hours later, into a crowded inbox. High-intent buyers, near-zero recovery.`,
    'recovery.built': `<strong>What I built.</strong> Klaviyo SMS and WhatsApp flows: 2–3 short messages per abandoner, timed to intent, each with a secure link straight back to their waiting order. Approved templates, clean opt-out, fully compliant. Built async and switched on.`,
    'recovery.bigLabel': `Recovered · 90 days · SMS + WhatsApp`,
    'recovery.opened': `opened`,
    'recovery.clicked': `clicked`,
    'recovery.ordered': `placed an order`,
    'recovery.perRecipient': `per recipient at a $267 average order`,
    'recovery.footnote': `Measurement: Klaviyo placed-order attribution, flow revenue only.`,
    'recovery.flows.caption': `Klaviyo flows · $52,191 in 90 days`,
    'recovery.phone.caption': `What lands on the customer's phone`,
    'recovery.wa.caption': `WhatsApp flow · stats and message`,
    'recovery.stats.caption': `SMS flow · performance`,
    'recovery.offer': `Already have a store and just want this? Send me the link and I'll run a free abandoned-cart test on it — I place an order, abandon it, and send you a short video of what your store does next.`,
    'recovery.offerCta': `Request the free test`,
    'more.eyebrow': `Beyond the storefront`,
    'more.title': `Also in the toolkit`,
    'more.bots.title': `Telegram bots for stores`,
    'more.bots.body': `Catalogue, cart and cart recovery inside the messenger, for stores whose customers live in Telegram. Two short demos:`,
    'more.video1.caption': `How cart recovery works in Telegram`,
    'more.video2.caption': `Store bot: catalogue, cart, order`,
    'more.woo.title': `Custom WooCommerce plugins`,
    'more.woo.body': `Purpose-built plugins for a high-volume store, including a payment-error assistant that turns failed transactions into orders. In production, accepted by the client's in-house developers.`,
    'more.ai.title': `AI support agents`,
    'more.ai.body': `Self-hosted Chatwoot with an AI agent on the first line. Support efficiency and lead retention up 135%, with no per-seat fees.`,
    'about.eyebrow': `About`,
    'about.title': `Who you'd be working with`,
    'about.lede': `I'm Artem Matveev. I build stores and fix the revenue side of e-commerce around them: conversion, checkout and the buyers who leave.`,
    'about.b1': `<strong>7+ years in e-commerce growth.</strong> Conversion, direct-response copy and automation in one head, where agencies split them across three people.`,
    'about.b2': `<strong>Platforms:</strong> Shopify, WooCommerce, WordPress, Webflow · Klaviyo, WhatsApp &amp; Telegram APIs, Chatwoot · Google Analytics, Hotjar.`,
    'about.b3': `<strong>Started in direct-response copywriting</strong> (200+ projects) before going technical, which is why my pages sell rather than just function.`,
    'about.b4': `<strong>Working languages:</strong> English, German, Russian. I run funnels across Western and Eastern markets.`,
    'about.how': `<strong>How I work:</strong> fully async. You message, I ship, you see results in your own dashboards. No discovery calls, no weekly syncs, no invoices for meetings.`,
    'process.eyebrow': `How a build works`,
    'process.title': `From first message to a store that sells.`,
    'process.1.title': `Tell me what you're selling.`,
    'process.1.body': `A link to your current store, a brand deck, or a paragraph describing the product. That's enough for me to scope the work.`,
    'process.2.title': `Fixed scope, fixed price.`,
    'process.2.body': `Within two business days you get it in writing: what gets built, what it costs, how long it takes. No hourly billing, no scope drift.`,
    'process.3.title': `Built, launched, handed over.`,
    'process.3.body': `Most stores go live in two to four weeks. You approve by message, I ship. You get the theme, the documentation, and full ownership of everything.`,
    'contact.eyebrow': `New projects`,
    'contact.title': `Need a Shopify store that actually sells?`,
    'contact.body1': `Send me a link to your current store, or just tell me what you sell. Within two business days you get a written scope: what I'd build, what it costs, and how long it takes.`,
    'contact.body2': `If what you need is conversion work or checkout recovery on a store you already have, say so — I do that too.`,
    'contact.telegram': `Start a project on Telegram`,
    'contact.emailLead': `or email`,
    'footer.line': `Shopify development · CRO · checkout recovery`,
    'footer.more': `Toolkit`,
    'footer.process': `Process`,
    'footer.contact': `Contact`,
    'meta.description': `Shopify store development with conversion built in from version one: speed, checkout and the mobile buying path. Plus CRO for existing stores and abandoned checkout recovery.`,
    'meta.url': `https://ecomfixer.github.io/`,
    'meta.ogLocale': `en_US`,
    'meta.ogLocaleAlt': `ru_RU`,
    'meta.ogTitle': `Shopify developer — stores, CRO and checkout recovery`,
    'meta.ogDescription': `Shopify stores built to sell from day one: 20+ stores shipped. Plus CRO that took one store from 0.33% to 1.05% conversion, and checkout recovery flows that brought back $52,191 in 90 days.`,
    'nav.home': `ecomfixer — back to top`,
    'nav.label': `Sections`,
    'lang.aria': `Switch to Russian`,
    'nav.menu': `Menu`,
    'hero.proofLabel': `Track record`,
    'work.wisdomining.aria': `Visit Wisdomining, opens in a new tab`,
    'work.wisdomining.alt': `Wisdomining homepage: navigation for mining equipment, hosting, repair and firmware above a dark hero banner reading “WisdoMining: Repair Center & Mining Equipment”.`,
    'work.scope': `Scope`,
    'work.aichun.aria': `Visit Aichun Beauty, opens in a new tab`,
    'work.aichun.alt': `Aichun Beauty homepage: category menu for skincare, body, sunscreen, makeup and hair above a spa-style hero banner for the Moisturizing Collection.`,
    'work.rabinkov.aria': `Visit Rabinkov Electric Supply, opens in a new tab`,
    'work.rabinkov.alt': `Rabinkov Electric Supply homepage: a full-width product search, a menu of brands and categories such as Siemens, Eaton, Square D, breakers and switchgear, and a hero banner reading “Siemens, Eaton, Square D and more”.`,
    'work.swish.aria': `Visit Swish Oral Care, opens in a new tab`,
    'work.swish.alt': `Swish Oral Care homepage: the headline “Where oral care meets self-care”, a Book Now button and a photo of the clinic interior.`,
    'cro.before.alt': `Shopify analytics for March 1–31, 2024: 1,198 online store sessions, $8,159.53 total sales, 4 total orders, 0.33% conversion rate.`,
    'cro.after.alt': `Shopify analytics for May 1–31, 2024: 1,717 online store sessions, $32,274.78 total sales, 18 total orders, 1.05% conversion rate.`,
    'recovery.flows.alt': `Klaviyo Flows Conversion dashboard showing $52,191.31 total across Abandoned Checkout SMS ($28,264.16) and Abandoned Checkout WhatsApp ($23,927.15) for April 26 to July 25.`,
    'recovery.phone.alt': `Phone mockup of the recovery text message saying the order is still waiting and can be finished in a few taps, with a secure checkout link and a STOP opt-out line.`,
    'recovery.wa.alt': `Klaviyo WhatsApp flow details: 71.4% open rate, 41.7% click rate, 13.1% placed order, plus a preview of the approved message template sent to customers.`,
    'recovery.stats.alt': `Klaviyo SMS flow statistics: 25.18% click rate, 9.01% placed order rate, $13,645.13 revenue, $267.55 average order value, $25.08 per recipient.`,
    'more.video1.aria': `Play video: how cart recovery works in Telegram`,
    'more.video2.aria': `Play video: a store bot with catalogue, cart and checkout`,
    'about.alt': `Portrait of Artem Matveev.`,
    'footer.navLabel': `Footer`,
  };

  const ru = {
    'meta.title': `Shopify-разработчик — магазины, CRO и возврат брошенных корзин | ecomfixer`,
    'meta.description': `Разработка магазинов на Shopify с конверсией, заложенной с первой версии: скорость, чекаут и мобильный сценарий покупки. Плюс CRO для работающих магазинов и возврат брошенных корзин.`,
    'meta.url': `https://ecomfixer.github.io/?lang=ru`,
    'meta.ogLocale': `ru_RU`,
    'meta.ogLocaleAlt': `en_US`,
    'meta.ogTitle': `Shopify-разработчик — магазины, CRO и возврат брошенных корзин`,
    'meta.ogDescription': `Shopify-магазины, которые продают с первого дня: 20+ собранных магазинов. Плюс CRO, поднявший конверсию магазина с 0.33% до 1.05%, и возврат брошенных корзин: $52,191 за 90 дней.`,

    'common.skip': `Перейти к содержимому`,
    'common.newTab': `(откроется в новой вкладке)`,

    'nav.home': `ecomfixer — наверх`,
    'nav.label': `Разделы`,
    'nav.work': `Кейсы`,
    'nav.approach': `Подход`,
    'nav.cro': `CRO`,
    'nav.recovery': `Возврат`,
    'nav.about': `Обо мне`,
    'nav.cta': `Обсудить проект`,
    'nav.menu': `Меню`,
    'lang.aria': `Переключить на английский`,

    'hero.eyebrow': `Разработка на Shopify · CRO · Удержание`,
    'hero.title': `Shopify-магазины от того, <em>кому платят за фиксы конверсии.</em>`,
    'hero.sub': `Обычно разработчик сдает магазин, а потом кто-то вроде меня получает деньги за то, чтобы пофиксить его конверсию. Я убираю лишний шаг: скорость, трение на чекауте и мобильный сценарий покупки закрыты уже в первой версии.`,
    'hero.ctaPrimary': `Смотреть магазины`,
    'hero.ctaSecondary': `Получить оценку проекта`,
    'hero.proofLabel': `Результаты`,
    'hero.proof1': `Shopify-магазинов собрано`,
    'hero.proof2': `конверсия за 60 дней`,
    'hero.proof3': `возвращено за 90 дней`,
    'hero.proof4': `лет в e-commerce`,

    'work.eyebrow': `Избранные работы`,
    'work.title': `Магазины, в которых оптимизация уже внутри.`,
    'work.intro': `В каждом магазине, который я сдаю, CRO заложена изначально: скорость, трение на чекауте, мобильный сценарий покупки.`,
    'work.visit': `Открыть сайт`,
    'work.toggle': `Что я сделал`,
    'work.brief': `Задача`,
    'work.built': `Что я сделал`,
    'work.tech': `Технические детали`,
    'work.scope': `Объем работ`,
    'work.chip.sections': `Кастомные секции`,
    'work.chip.mobileFirst': `Mobile-first`,
    'work.chip.catalogueRepair': `Каталог и ремонт`,
    'work.chip.pdp': `Карточка под конверсию`,
    'work.chip.brandSystem': `Бренд-система`,
    'work.chip.catalogue': `Архитектура каталога`,
    'work.chip.search': `Фильтры и поиск`,
    'work.chip.quotes': `Запрос цены`,
    'work.chip.webflow': `Webflow`,
    'work.chip.landing': `Структура лендинга`,
    'work.chip.copy': `Продающий текст`,

    'work.wisdomining.aria': `Открыть Wisdomining в новой вкладке`,
    'work.wisdomining.alt': `Главная страница Wisdomining: меню с разделами оборудования для майнинга, хостинга, ремонта и прошивок над темным баннером «WisdoMining: Repair Center & Mining Equipment».`,
    'work.wisdomining.desc': `Оборудование и комплектующие для майнинга. Магазин и ремонт в одной воронке.`,
    'work.wisdomining.brief': `Wisdomining продает оборудование и комплектующие для майнинга, а еще ремонтирует технику. Значит, на одну витрину приходят два очень разных посетителя: один хочет купить устройство, у другого оно сломалось, и ему важно понять, починят ли его и что будет дальше. Задача — обслужить обоих в одном магазине и не разводить аудиторию по двум сайтам.`,
    'work.wisdomining.built': `Кастомная тема Shopify, в которой оба сценария видны с первого экрана. Оборудование и ремонт стоят рядом в главном меню, так что никому не приходится искать свой путь. Карточки товара начинаются с характеристик, которые покупатель железа проверяет перед решением. У ремонта свои страницы: понятное описание процесса и прямой способ оставить заявку.`,
    'work.wisdomining.tech': `Кастомные секции на Liquid вместо конструктора: новые лендинги собираются из готовых блоков. Характеристики хранятся в метаполях и редактируются в админке Shopify, а не в шаблонах. Каталог разбит по типам оборудования, чтобы технические товары было легко найти по мере роста ассортимента. Верстка mobile-first, скорость и стабильность макета проверены до сдачи.`,

    'work.aichun.aria': `Открыть Aichun Beauty в новой вкладке`,
    'work.aichun.alt': `Главная страница Aichun Beauty: меню категорий — уход за кожей, тело, солнцезащита, макияж, волосы — над баннером в спа-стилистике для коллекции Moisturizing Collection.`,
    'work.aichun.desc': `Бьюти-бренд. Минималистичная структура, построенная вокруг конверсии.`,
    'work.aichun.brief': `Бьюти-бренд с ассортиментом от ухода за кожей до волос и полости рта и желанием получить чистый минималистичный магазин. Риск минимализма в том, что он вырезает все, что нужно человеку перед покупкой: что делает продукт, как им пользоваться и почему ему можно доверять. Задача — сохранить сдержанность и при этом дать каждой карточке товара продающую структуру.`,
    'work.aichun.built': `Карточка товара, которая отвечает на вопросы покупателя в том порядке, в каком он их задает: что это, что делает, как применять, что в составе. Фото идут в заданной последовательности, поэтому каждая карточка рассказывает историю одинаково по всему каталогу. Небольшая бренд-система — шрифты, отступы, цвета — держит новые страницы в одном стиле без дизайнера на связи.`,
    'work.aichun.tech': `Сначала мобильная верстка: цена, варианты и кнопка «В корзину» проектировались под экран телефона раньше всего остального. Изображения галереи подобраны по размеру и грузятся лениво, чтобы не тормозить первый экран. Экспресс-оплата стоит рядом с основной кнопкой. Детали товара вынесены в метаполя, так что команда обновляет контент без правки кода.`,

    'work.rabinkov.aria': `Открыть Rabinkov Electric Supply в новой вкладке`,
    'work.rabinkov.alt': `Главная страница Rabinkov Electric Supply: широкая строка поиска, меню брендов и категорий — Siemens, Eaton, Square D, автоматы, распределительные устройства — и баннер «Siemens, Eaton, Square D and more».`,
    'work.rabinkov.desc': `Электрооборудование. Большой каталог, короткий путь до заявки.`,
    'work.rabinkov.brief': `Поставщик электрооборудования: тысячи SKU, покупатели в основном профессионалы. Они обычно знают, что им нужно: найти нужный автомат или щит, сверить характеристики и получить цену — часто на партию или под проект, а не на одну розничную покупку. Магазин должен был сделать большой каталог удобным и быстро превращать найденный товар в заявку.`,
    'work.rabinkov.built': `Структура каталога повторяет то, как покупатели ищут товар: по бренду и по типу продукции, и оба пути доступны из главного меню. Поиск стоит в центре шапки — многие приходят, уже зная, что вбить. Фильтры в коллекциях сужают длинный список до значимых характеристик. На карточке товара есть запрос цены, так что покупатель узнает стоимость, не уходя со страницы.`,
    'work.rabinkov.tech': `Фильтры построены на атрибутах товаров из данных магазина, поэтому новые значения появляются из админки по мере роста ассортимента, без правок темы. Страницы коллекций остаются легкими и быстрыми даже с длинными списками. Запрос цены уходит вместе с товаром, так что ответ не начинается с уточняющего вопроса. Верстка mobile-first — для тех, кто заказывает прямо с объекта.`,

    'work.swish.aria': `Открыть Swish Oral Care в новой вкладке`,
    'work.swish.alt': `Главная страница Swish Oral Care: заголовок «Where oral care meets self-care», кнопка записи Book Now и фото интерьера клиники.`,
    'work.swish.desc': `Стоматология. Чистый дизайн поверх продающей структуры.`,
    'work.swish.brief': `Swish Oral Care — современные стоматологические клиники в нескольких районах. Сайт не продает товары. Его задача — объяснить, чем клиника отличается, успокоить тех, кто не любит ходить к стоматологу, и довести до записи. Бренду был нужен теплый чистый вид и структура страниц, которая без трения ведет посетителя от первого впечатления к записи.`,
    'work.swish.built': `Сайт на Webflow со структурой лендинга: оффер и кнопка записи на первом экране, дальше услуги, адреса клиник и причины выбрать именно эту клинику, а призыв записаться повторяется там, где принимается решение. Продающие тексты я писал вместе с версткой, поэтому сообщение и страница проектировались вместе, а не текст заливался в готовый шаблон.`,
    'work.swish.tech': `Этот проект на Webflow, а не на Shopify, и это осознанный выбор. Клиника записывает на прием — ей не нужны каталог, корзина и чекаут. Webflow дал полный контроль над дизайном, а команда клиники сама правит страницы и публикации в визуальном редакторе, без разработчика. Платить за функции e-commerce, которыми никто не будет пользоваться, не было смысла.`,
    'work.cta': `Нужен магазин, который продает с первого дня? Напишите`,

    'approach.eyebrow': `Что входит`,
    'approach.title': `В каждом проекте есть то, что большинство разработчиков пропускает.`,
    'approach.1.title': `Тема на Liquid`,
    'approach.1.body': `Кастомные секции на Liquid под ваш ассортимент. Без конструктора страниц поверх темы и без лишнего кода, который грузится у каждого посетителя.`,
    'approach.2.title': `Контент на метаполях`,
    'approach.2.body': `Характеристики, FAQ и детали товара хранятся в метаполях. Вы правите их в админке Shopify, шаблоны остаются нетронутыми.`,
    'approach.3.title': `Бюджет скорости`,
    'approach.3.body': `LCP и CLS замеряются на реальных карточках товара до сдачи. Если изменение выходит за бюджет, оно не выкатывается.`,
    'approach.4.title': `Карточки товара под мобильные`,
    'approach.4.body': `Большая часть покупок происходит с телефона, поэтому карточка товара сначала проектируется под узкий экран. Десктоп — это адаптация.`,
    'approach.5.title': `Экспресс-оплата`,
    'approach.5.body': `Shop Pay, Apple Pay и Google Pay настроены и проверены на реальных устройствах. Меньше полей между товаром и оплатой.`,
    'approach.6.title': `Продуманный набор приложений`,
    'approach.6.body': `Каждое приложение должно оправдать свое место. Все, что дублирует тему или тормозит ее, заменяется или убирается до запуска.`,
    'approach.7.title': `Аналитика и события`,
    'approach.7.body': `GA4 и отслеживание конверсий настроены и проверены на тестовых заказах, так что цифры в дашборде совпадают с реальностью.`,
    'approach.8.title': `Документация при сдаче`,
    'approach.8.body': `Письменное описание темы, секций и приложений. Все принадлежит вам, и любой разработчик сможет продолжить после меня.`,

    'cro.eyebrow': `Оптимизация конверсии`,
    'cro.title': `<span class="mono">0.33% → 1.05%</span> за 60 дней. Продажи <span class="mono">×4</span>.`,
    'cro.p1': `Узконишевый Shopify-магазин, сильно недооптимизированный — идеальная демонстрация. Точечные изменения в карточках товара и чекауте: убрать трение, ускорить, поставить реальное преимущество магазина туда, куда смотрит посетитель. Без «редизайна ради редизайна» и подписок на A/B-сервисы. Через шестьдесят дней конверсия утроилась.`,
    'cro.p2': `Прямым текстом: магазин маленький, поэтому абсолютные цифры маленькие — 4 заказа стали 18 за месяц. Я показываю конверсию, потому что этой метрике все равно, какого размера магазин. Утроить ее — значит одно и то же при 1,000 сессий и при 1,000,000: каждая доля процента конверсии — чистая маржа с трафика, за который вы уже заплатили.`,
    'cro.before.label': `Март 2024 — до`,
    'cro.before.alt': `Аналитика Shopify за 1–31 марта 2024: 1,198 сессий магазина, продажи $8,159.53, 4 заказа, конверсия 0.33%.`,
    'cro.before.caption': `1,198 сессий · 4 заказа · конверсия 0.33%`,
    'cro.after.label': `Май 2024 — после`,
    'cro.after.alt': `Аналитика Shopify за 1–31 мая 2024: 1,717 сессий магазина, продажи $32,274.78, 18 заказов, конверсия 1.05%.`,
    'cro.after.caption': `1,717 сессий · 18 заказов · конверсия 1.05%`,
    'cro.changes.title': `Что я на самом деле меняю`,
    'cro.changes.1': `<strong>Структура карточки товара:</strong> главное преимущество там, куда смотрит посетитель.`,
    'cro.changes.2': `<strong>Трение на чекауте:</strong> меньше полей, меньше сюрпризов, меньше уходов.`,
    'cro.changes.3': `<strong>Скорость:</strong> изображения, приложения и скрипты, которые тормозят первый экран.`,
    'cro.changes.4': `<strong>Мобильная верстка:</strong> цена, варианты и кнопка покупки под большим пальцем.`,
    'cro.changes.5': `<strong>Доказательства:</strong> отзывы и гарантии рядом с решением о покупке, а не в подвале.`,
    'cro.changes.6': `<strong>Ясность оффера:</strong> что это, сколько стоит и когда приедет — на первом экране.`,

    'recovery.eyebrow': `Удержание`,
    'recovery.title': `<span class="mono">$52,191</span> возвращено за 90 дней без дополнительного рекламного бюджета.`,
    'recovery.client': `Клиент: <strong>Meamo</strong> — корейский бьюти-бренд с продажами по всему миру. Публикуется с разрешения.`,
    'recovery.before': `<strong>Что было.</strong> Бросившие чекаут получали то, что шлют почти все магазины: одно письмо, через несколько часов, в переполненный ящик. Самые горячие покупатели — почти нулевой возврат.`,
    'recovery.built': `<strong>Что я внедрил.</strong> Цепочки SMS и WhatsApp на базе Klaviyo: 2–3 коротких сообщения на каждого бросившего, тайминг под уровень интента, в каждом — защищенная ссылка прямо в его заказ. Согласованные шаблоны, чистый opt-out, все в рамках правил каналов. Собрал асинхронно и включил.`,
    'recovery.bigLabel': `Возвращено · 90 дней · SMS + WhatsApp`,
    'recovery.opened': `открыли`,
    'recovery.clicked': `перешли`,
    'recovery.ordered': `оформили заказ`,
    'recovery.perRecipient': `на получателя при среднем чеке $267`,
    'recovery.footnote': `Измерение: атрибуция Klaviyo по оформленным заказам, только выручка цепочек.`,
    'recovery.flows.alt': `Дашборд Klaviyo Flows Conversion: $52,191.31 суммарно по цепочкам Abandoned Checkout SMS ($28,264.16) и Abandoned Checkout WhatsApp ($23,927.15) за период с 26 апреля по 25 июля.`,
    'recovery.flows.caption': `Цепочки Klaviyo · $52,191 за 90 дней`,
    'recovery.phone.alt': `Макет телефона с сообщением о брошенной корзине: заказ все еще ждет и его можно оформить в пару касаний, защищенная ссылка на оформление и строка отписки STOP.`,
    'recovery.phone.caption': `Что приходит клиенту на телефон`,
    'recovery.wa.alt': `Показатели WhatsApp-цепочки в Klaviyo: 71.4% открытий, 41.7% переходов, 13.1% оформленных заказов, плюс превью согласованного шаблона сообщения.`,
    'recovery.stats.alt': `Показатели SMS-цепочки в Klaviyo: 25.18% переходов, 9.01% оформленных заказов, выручка $13,645.13, средний чек $267.55, $25.08 на получателя.`,
    'recovery.wa.caption': `WhatsApp-цепочка · показатели и сообщение`,
    'recovery.stats.caption': `SMS-цепочка · показатели`,
    'recovery.offer': `Магазин уже есть и нужно только это? Пришлите ссылку — я бесплатно проведу тест брошенной корзины: сделаю заказ, брошу его и пришлю короткое видео о том, что ваш магазин делает дальше.`,
    'recovery.offerCta': `Запросить бесплатный тест`,

    'more.eyebrow': `За пределами витрины`,
    'more.title': `Еще в арсенале`,
    'more.bots.title': `Telegram-боты для магазинов`,
    'more.bots.body': `Каталог, корзина и возврат брошенных корзин прямо в мессенджере — для магазинов, чьи клиенты живут в Telegram. Два коротких демо:`,
    'more.video1.caption': `Как работает возврат брошенных корзин через Telegram`,
    'more.video1.aria': `Смотреть видео: как работает возврат брошенных корзин через Telegram`,
    'more.video2.caption': `Бот магазина: каталог, корзина, заказ`,
    'more.video2.aria': `Смотреть видео: бот магазина с каталогом, корзиной и оформлением заказа`,
    'more.woo.title': `Кастомные плагины WooCommerce`,
    'more.woo.body': `Плагины под задачи магазина с большим оборотом — включая помощник при ошибках оплаты, который превращает упавшие транзакции в заказы. Работают в проде, приняты штатными разработчиками клиента.`,
    'more.ai.title': `AI-агенты поддержки`,
    'more.ai.body': `Self-hosted Chatwoot с AI-агентом на первой линии. Эффективность поддержки и удержание лидов выросли на 135%, без оплаты за каждого оператора.`,

    'about.eyebrow': `Обо мне`,
    'about.title': `С кем вы будете работать`,
    'about.alt': `Портрет Артёма Матвеева.`,
    'about.lede': `Я Артём Матвеев. Я собираю магазины и чиню выручку e-commerce вокруг них: конверсию, чекаут и покупателей, которые уходят.`,
    'about.b1': `<strong>7+ лет в росте e-commerce.</strong> Конверсия, продающий копирайтинг и автоматизации в одной голове — в агентствах это три разных человека.`,
    'about.b2': `<strong>Платформы:</strong> Shopify, WooCommerce, WordPress, Webflow · Klaviyo, WhatsApp и Telegram API, Chatwoot · Google Analytics, Hotjar.`,
    'about.b3': `<strong>Начинал с продающего копирайтинга</strong> (200+ проектов) и только потом ушел в техническую часть — поэтому мои страницы продают, а не просто работают.`,
    'about.b4': `<strong>Языки:</strong> русский, английский (C2), немецкий (B2) — веду проекты и на западных рынках.`,
    'about.how': `<strong>Как я работаю:</strong> полностью асинхронно. Вы пишете — я выкатываю, результат видите в собственных дашбордах. Без созвонов, без еженедельных статусов, без счетов за встречи.`,

    'process.eyebrow': `Как идет работа`,
    'process.title': `От первого сообщения до магазина, который продает.`,
    'process.1.title': `Расскажите, что продаете.`,
    'process.1.body': `Ссылка на текущий магазин, бренд-презентация или просто абзац про продукт. Этого хватит, чтобы оценить работу.`,
    'process.2.title': `Фиксированный скоуп, фиксированная цена.`,
    'process.2.body': `В течение двух рабочих дней получаете письменно: что собираю, сколько стоит, сколько займет. Без почасовки и без расползания скоупа.`,
    'process.3.title': `Собрал, запустил, передал.`,
    'process.3.body': `Большинство магазинов выходят в бой за две-четыре недели. Вы согласовываете сообщением, я выкатываю. Тема, документация и полные права — ваши.`,

    'contact.eyebrow': `Новые проекты`,
    'contact.title': `Нужен Shopify-магазин, который продает?`,
    'contact.body1': `Пришлите ссылку на текущий магазин или просто расскажите, что продаете. В течение двух рабочих дней получите письменный скоуп: что я собираю, сколько это стоит и сколько займет.`,
    'contact.body2': `Если нужна работа с конверсией или возврат брошенных корзин в уже работающем магазине — тоже ко мне, просто напишите.`,
    'contact.telegram': `Обсудить проект в Telegram`,
    'contact.emailLead': `или на почту`,

    'footer.line': `Разработка на Shopify · CRO · возврат брошенных корзин`,
    'footer.navLabel': `Подвал`,
    'footer.more': `Арсенал`,
    'footer.process': `Процесс`,
    'footer.contact': `Контакт`,
  };

  const dictionaries = { en, ru };
  const root = document.documentElement;
  let current = 'en'; // index.html ships in English

  function readInitial() {
    // URL wins, then the stored choice, then English. Browser language is
    // deliberately never consulted.
    try {
      const fromUrl = new URLSearchParams(window.location.search).get('lang');
      if (fromUrl && dictionaries[fromUrl]) return { lang: fromUrl, fromUrl: true };
    } catch (e) { /* no URL API */ }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && dictionaries[stored]) return { lang: stored, fromUrl: false };
    } catch (e) { /* storage blocked */ }
    return { lang: 'en', fromUrl: false };
  }

  function translate(dict) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
        const split = pair.indexOf(':');
        if (split < 1) return;
        const attr = pair.slice(0, split).trim();
        const value = dict[pair.slice(split + 1).trim()];
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });
  }

  function syncToggles(lang) {
    document.querySelectorAll('.js-lang').forEach((button) => {
      button.setAttribute('aria-pressed', String(lang === 'ru'));
      button.querySelectorAll('[data-lang]').forEach((option) => {
        option.classList.toggle('is-active', option.getAttribute('data-lang') === lang);
      });
    });
  }

  function persist(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
    try {
      const url = new URL(window.location.href);
      if (lang === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', lang);
      window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    } catch (e) { /* some file:// contexts refuse replaceState */ }
  }

  function setLanguage(lang, { save = true } = {}) {
    if (!dictionaries[lang]) lang = 'en';
    if (lang !== current) translate(dictionaries[lang]);
    current = lang;
    root.lang = lang;
    syncToggles(lang);
    if (save) persist(lang);
    root.classList.remove('i18n-wait');
    document.dispatchEvent(new CustomEvent('ecomfixer:langchange', { detail: { lang } }));
  }

  document.querySelectorAll('.js-lang').forEach((button) => {
    button.addEventListener('click', () => setLanguage(current === 'en' ? 'ru' : 'en'));
  });

  const initial = readInitial();
  // Save only when the URL asked for a language, so ?lang=ru links stick and
  // ?lang=en is cleaned out of the address bar.
  setLanguage(initial.lang, { save: initial.fromUrl });

  window.ecomfixerI18n = {
    dictionaries,
    setLanguage,
    get lang() { return current; },
  };
})();
