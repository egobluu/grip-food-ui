/* Grip Food UI. All data and payment/authentication responses are local simulations. */
const shopsSeed = [
  { id: 1, name: 'ครัวบ้านสวน', type: 'อาหารไทย', phone: '02-123-4567', address: 'สุขุมวิท 24 กรุงเทพฯ', bank: 'พร้อมเพย์ 081-234-5678', hours: '09:00–21:00', status: 'เปิดให้บริการ', approval: 'อนุมัติแล้ว', color: 'apricot', photo: 0, avatar: 'cooking' },
  { id: 2, name: 'ราเมงโคจิ', type: 'อาหารญี่ปุ่น', phone: '02-234-5678', address: 'ทองหล่อ กรุงเทพฯ', bank: 'ธนาคาร •••• 4567', hours: '11:00–22:00', status: 'เปิดให้บริการ', approval: 'รออนุมัติ', color: 'lavender', photo: 2, avatar: 'driving' },
  { id: 3, name: 'Green Bowl', type: 'สุขภาพ', phone: '02-345-6789', address: 'สีลม กรุงเทพฯ', bank: 'พร้อมเพย์ 089-345-6789', hours: '08:00–20:00', status: 'เปิดให้บริการ', approval: 'อนุมัติแล้ว', color: 'mint', avatar: 'delivered' }
];
const menuSeed = [
  { id: 101, shopId: 1, name: 'ข้าวกะเพราไก่ไข่ดาว', category: 'อาหารไทย', price: 89, available: true, photo: 0, color: 'apricot', description: 'กะเพราหอม ๆ เสิร์ฟพร้อมไข่ดาวกรอบ' },
  { id: 102, shopId: 1, name: 'ข้าวผัดกุ้ง', category: 'อาหารไทย', price: 109, available: true, photo: 1, color: 'peach', description: 'ข้าวผัดหอมกระทะ กุ้งเต็มคำ' },
  { id: 103, shopId: 2, name: 'โชยุราเมง', category: 'อาหารญี่ปุ่น', price: 159, available: true, photo: 2, color: 'lavender', description: 'น้ำซุปโชยุเข้มข้น เส้นเหนียวนุ่ม' },
  { id: 104, shopId: 2, name: 'เกี๊ยวซ่าทอด', category: 'อาหารญี่ปุ่น', price: 79, available: false, photo: 3, color: 'butter', description: 'เกี๊ยวซ่ากรอบนอกนุ่มใน' },
  { id: 105, shopId: 3, name: 'สลัดอะโวคาโด', category: 'สุขภาพ', price: 129, available: true, photo: 4, color: 'mint', description: 'ผักสด อะโวคาโด และน้ำสลัดงา' },
  { id: 106, shopId: 3, name: 'สมูทตี้เบอร์รี', category: 'เครื่องดื่ม', price: 95, available: true, photo: 5, color: 'sky', description: 'เบอร์รีรวมปั่นสดชื่น ไม่เติมน้ำตาล' },
  { id: 107, shopId: 1, name: 'ข้าวกะเพราหมูสับไข่ดาว', category: 'อาหารไทย', price: 89, available: true, photo: 0, color: 'apricot', description: 'หมูสับผัดกะเพรา เสิร์ฟพร้อมไข่ดาว เลือกความเผ็ดได้' },
  { id: 108, shopId: 1, name: 'ข้าวผัดกุ้งจานใหญ่', category: 'อาหารไทย', price: 139, available: true, photo: 1, color: 'peach', description: 'ข้าวผัดกุ้งเพิ่มปริมาณ อิ่มเต็มจาน พร้อมมะนาวและแตงกวา' },
  { id: 109, shopId: 1, name: 'กะเพราไก่ไข่ดาวเผ็ดน้อย', category: 'อาหารไทย', price: 89, available: true, photo: 0, color: 'butter', description: 'กะเพราไก่รสอ่อนสำหรับคนไม่กินเผ็ด พร้อมไข่ดาว' },
  { id: 110, shopId: 1, name: 'ข้าวผัดกุ้งไม่ใส่ต้นหอม', category: 'อาหารไทย', price: 109, available: true, photo: 1, color: 'peach', description: 'ข้าวผัดกุ้งหอมกระทะ ไม่ใส่ต้นหอม ปรุงสดต่อจาน' },
  { id: 111, shopId: 2, name: 'โชยุราเมงไข่เพิ่ม', category: 'อาหารญี่ปุ่น', price: 179, available: true, photo: 2, color: 'lavender', description: 'ราเมงซุปโชยุ เพิ่มไข่ต้มยางมะตูมสำหรับคนรักไข่' },
  { id: 112, shopId: 2, name: 'ราเมงซุปเผ็ด', category: 'อาหารญี่ปุ่น', price: 179, available: true, photo: 2, color: 'apricot', description: 'ซุปเข้มข้นปรุงพริกญี่ปุ่น เส้นเหนียวนุ่ม' },
  { id: 113, shopId: 2, name: 'เกี๊ยวซ่าผัก', category: 'อาหารญี่ปุ่น', price: 79, available: true, photo: 3, color: 'mint', description: 'เกี๊ยวซ่าไส้ผักรวม ทอดกรอบ เสิร์ฟพร้อมซอสโชยุ' },
  { id: 114, shopId: 2, name: 'เกี๊ยวซ่าทอดชุดใหญ่', category: 'อาหารญี่ปุ่น', price: 129, available: true, photo: 3, color: 'butter', description: 'เกี๊ยวซ่าชุดใหญ่สำหรับแบ่งกันกิน กรอบนอกนุ่มใน' },
  { id: 115, shopId: 3, name: 'สลัดอะโวคาโดน้ำสลัดงา', category: 'สุขภาพ', price: 149, available: true, photo: 4, color: 'mint', description: 'ผักสดและอะโวคาโด เพิ่มน้ำสลัดงาคั่วหอม ๆ แยกถ้วย' },
  { id: 116, shopId: 3, name: 'สลัดผักรวม', category: 'สุขภาพ', price: 99, available: true, photo: 4, color: 'mint', description: 'ผักสดหลายชนิดกับมะเขือเทศ น้ำสลัดแยกเพื่อความสด' },
  { id: 117, shopId: 3, name: 'สมูทตี้เบอร์รีโยเกิร์ต', category: 'เครื่องดื่ม', price: 109, available: true, photo: 5, color: 'lavender', description: 'เบอร์รีรวมปั่นกับโยเกิร์ต เปรี้ยวหวานสดชื่น' },
  { id: 118, shopId: 3, name: 'สมูทตี้เบอร์รีหวานน้อย', category: 'เครื่องดื่ม', price: 95, available: true, photo: 5, color: 'sky', description: 'เบอร์รีรวมปั่น ลดความหวาน ดื่มคู่มื้อสุขภาพได้ลงตัว' }
];
const customersSeed = [
  { id: 'C001', name: 'มินตรา ใจดี', phone: '081-234-5678', email: 'mintra@example.com', avatar: 'delivered' },
  { id: 'C002', name: 'ธันวา ศรีสุข', phone: '089-111-2345', email: 'thanwa@example.com', avatar: 'driving' },
  { id: 'C003', name: 'พิมพ์ชนก วัฒนา', phone: '086-555-9080', email: 'pim@example.com', avatar: 'waiting' }
];
const now = new Date();
const ordersSeed = [
  { id: 'GF-240901', customerId: 'C001', shopId: 1, items: [{ id: 101, qty: 2 }], subtotal: 178, delivery: 25, discount: 0, total: 203, address: 'คอนโดลุมพินี สุขุมวิท 24 กรุงเทพฯ', payment: 'พร้อมเพย์', paymentStatus: 'ชำระเงินสำเร็จ', status: 'กำลังเตรียมอาหาร', created: new Date(now.getTime()-35*60000).toISOString() },
  { id: 'GF-240900', customerId: 'C002', shopId: 3, items: [{ id: 105, qty: 1 }, { id: 106, qty: 1 }], subtotal: 224, delivery: 25, discount: 0, total: 249, address: 'อาคารสีลมคอมเพล็กซ์ กรุงเทพฯ', payment: 'บัตรเครดิต/เดบิต', paymentStatus: 'ชำระเงินสำเร็จ', status: 'กำลังจัดส่ง', created: new Date(now.getTime()-86400000).toISOString() }
];
const state = {
  role: 'customer', page: 'explore', query: '', category: 'ทั้งหมด', cart: {}, cartOpen: false,
  address: 'คอนโดลุมพินี สุขุมวิท 24 กรุงเทพฯ', payment: 'พร้อมเพย์',
  shops: structuredClone(shopsSeed), menus: structuredClone(menuSeed), customers: structuredClone(customersSeed), orders: structuredClone(ordersSeed),
  merchantId: 1, customerId: 'C001', search: '', orderDate: '', modal: '', editId: null, notice: '', addresses: ['คอนโดลุมพินี สุขุมวิท 24 กรุงเทพฯ','อาคารสีลมคอมเพล็กซ์ กรุงเทพฯ'], otp: null, animateMascots: true, previewStatus: null, previewStartedAt: 0, timelinePlaying: false, routePaused: null
};
const accountEmail = () => ({customer:'mintra@example.com',merchant:'merchant@grip.test',admin:'admin@grip.test'}[state.role]);
const roles = { customer: 'ลูกค้า', merchant: 'ร้านอาหาร', admin: 'ผู้ดูแลระบบ' };
const cartGlyph = '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>';
const navs = {
  customer: [['explore','สำรวจอาหาร','⌕'],['cart','ตะกร้าสินค้า',cartGlyph],['orders','คำสั่งซื้อ','▤'],['account','บัญชีของฉัน','◉']],
  merchant: [['dashboard','ภาพรวม','▦'],['menu','จัดการเมนู','☷'],['orders','คำสั่งซื้อ','▤'],['store','ข้อมูลร้าน','⌂']],
  admin: [['dashboard','ภาพรวม','▦'],['approvals','อนุมัติร้าน','✓'],['customers','ลูกค้า','♙'],['shops','ร้านอาหาร','⌂'],['orders','คำสั่งซื้อ','▤']]
};
const $ = s => document.querySelector(s);
const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => `฿${Number(n || 0).toLocaleString('th-TH',{maximumFractionDigits:2})}`;
const cartCount = cart => Object.values(cart).reduce((a,b) => a+b, 0);
const cartSubtotal = (cart, menus) => Math.round(Object.entries(cart).reduce((sum,[id,qty]) => sum + (menus.find(m => m.id === Number(id))?.price || 0)*qty, 0)*100)/100;
function cartGroups(cart,menus){const groups=new Map();for(const [id,qty] of Object.entries(cart)){const m=menus.find(x=>x.id===Number(id));if(!m||qty<=0)continue;if(!groups.has(m.shopId))groups.set(m.shopId,{shopId:m.shopId,items:[],cart:{}});const g=groups.get(m.shopId);g.cart[id]=qty;g.items.push({id:m.id,qty,name:m.name,price:m.price});}return [...groups.values()].map(g=>{const subtotal=cartSubtotal(g.cart,menus);return {...g,subtotal,delivery:25,total:Math.round((subtotal+25)*100)/100};});}
const canCancel = status => !['กำลังจัดส่ง','จัดส่งสำเร็จ','ยกเลิกแล้ว'].includes(status);
const normalizePhone = value => String(value||'').replace(/\D/g,'');
const nextId = (rows,prefix) => `${prefix}${String(Math.max(0,...rows.map(x=>Number(String(x.id).replace(/\D/g,''))||0))+1).padStart(3,'0')}`;
const availableMenu = m => m.available && state.shops.some(s=>s.id===m.shopId&&s.status==='เปิดให้บริการ'&&s.approval==='อนุมัติแล้ว');
const itemName = (o,i) => i.name||state.menus.find(m=>m.id===i.id)?.name||'เมนูที่ลบแล้ว';
const orderShop = o => o.shopName||shopName(o.shopId);
const orderCustomer = o => o.customerName||customerName(o.customerId);
const localDate = value => { const d=new Date(value); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
const photoNames=['ข้าวกะเพรา','ข้าวผัดกุ้ง','ราเมง','เกี๊ยวซ่า','สลัด','สมูทตี้'];
function menuImage(m) {const photo=Number.isInteger(m.photo)?m.photo:0;return m.image?`<img src="${esc(m.image)}" alt="">`:`<span class="food-photo" style="background-position:${(photo%3)*50}% ${Math.floor(photo/3)*100}%" aria-hidden="true"></span>`;}
const mascot = (className='') => `<img class="${className}" src="assets/mascot-courier.png" alt="มาสคอตกบส่งอาหาร Grip Food">`;
const avatarNames={waiting:'กบง่วง',cooking:'กบเชฟ',driving:'กบไรเดอร์',delivered:'กบนักชิม'};
const validAvatar=(value,fallback='delivered')=>Object.hasOwn(avatarNames,value)?value:fallback;
const avatarAsset=value=>`assets/mascot-${validAvatar(value)}${validAvatar(value)==='delivered'?'':'-poster'}.png`;
function frogAvatar(value,className='avatar'){const key=validAvatar(value);return `<span class="frog-avatar frog-${key} ${className}" role="img" aria-label="${avatarNames[key]}" style="background-image:url('${avatarAsset(key)}')"></span>`;}
function avatarPicker(value='delivered'){return `<fieldset class="avatar-picker"><legend>เลือกรูปกบ</legend><div>${Object.entries(avatarNames).map(([key,label])=>`<label><input type="radio" name="avatar" value="${key}" ${key===validAvatar(value)?'checked':''}>${frogAvatar(key,'avatar-choice')}<span>${label}</span></label>`).join('')}</div></fieldset>`;}
function statusMascot(status,animate=true){const key=({'รอชำระเงิน':'waiting','รอร้านยืนยัน':'waiting','กำลังเตรียมอาหาร':'cooking','กำลังจัดส่ง':'driving','จัดส่งสำเร็จ':'delivered','ยกเลิกแล้ว':'waiting'}[status]||'waiting'),moving=animate&&status!=='ยกเลิกแล้ว'&&key!=='delivered';return `<picture class="status-picture"><source media="(prefers-reduced-motion: reduce)" srcset="${avatarAsset(key)}"><img class="tracking-mascot" src="${moving?`assets/mascot-${key}.gif`:avatarAsset(key)}" alt="${({'waiting':'กบนั่งค้ำคางง่วง ๆ รออาหาร zzz','cooking':'กบเชฟกำลังทำอาหาร','driving':'กบไรเดอร์ขับรถส่งอาหาร','delivered':'กบได้รับอาหารแล้ว'}[key])}"></picture>`;}
function orderItems(o) {return `<div class="table-scroll"><table class="item-breakdown" aria-label="รายการอาหาร ${esc(o.id)}"><thead><tr><th>เมนูอาหาร</th><th>ราคา/ชิ้น</th><th>จำนวน</th><th>รวม</th></tr></thead><tbody>${o.items.map(i=>`<tr><td>${esc(itemName(o,i))}</td><td>${money(i.price)}</td><td>${i.qty}</td><td>${money(i.price*i.qty)}</td></tr>`).join('')}</tbody></table></div>`;}
function orderTotals(o) {return `<dl class="order-totals"><div><dt>ค่าอาหารรวม</dt><dd>${money(o.subtotal)}</dd></div><div><dt>ค่าจัดส่ง</dt><dd>${money(o.delivery)}</dd></div><div><dt>ส่วนลด</dt><dd>−${money(o.discount)}</dd></div><div class="grand-total"><dt>ยอดชำระสุทธิ</dt><dd>${money(o.total)}</dd></div></dl>`;}
const trackingSteps=['รอชำระเงิน','รอร้านยืนยัน','กำลังเตรียมอาหาร','กำลังจัดส่ง','จัดส่งสำเร็จ'];
function setOrderStatus(o,status) {if(o.status===status)return;o.status=status;if(status==='กำลังจัดส่ง')o.deliveryStartedAt=Date.now();(o.history||(o.history=[])).push({status,at:new Date().toISOString()});}
const routePoints=[[82,250],[175,250],[175,177],[345,177],[345,82],[525,82],[525,220],[635,220]];
const routeDuration=60000;
function routePoint(progress){let distances=routePoints.slice(1).map((p,i)=>Math.hypot(p[0]-routePoints[i][0],p[1]-routePoints[i][1])),left=Math.max(0,Math.min(1,progress))*distances.reduce((a,b)=>a+b,0);for(let i=0;i<distances.length;i++){if(left<=distances[i]){const t=left/distances[i];return routePoints[i].map((v,j)=>v+(routePoints[i+1][j]-v)*t);}left-=distances[i];}return routePoints.at(-1);}
const routeProgress=(start,now=Date.now())=>Math.max(0,Math.min(1,(now-start)/routeDuration));
function deliveryMap(o,shown){const preview=!!state.previewStatus,start=preview?state.previewStartedAt:(o.deliveryStartedAt||Date.now()),progress=shown==='จัดส่งสำเร็จ'?1:(state.routePaused??routeProgress(start)),point=routePoint(progress);return `<section class="surface gps-card" data-route-start="${start}" data-route-complete="${shown==='จัดส่งสำเร็จ'}"><div class="surface-head"><div><span class="eyebrow">FROG RIDER · TRACKING</span><h2>เส้นทางส่งความอร่อย</h2></div><span class="badge blue">ระหว่างจัดส่ง</span></div><div class="route-meta"><span>จาก <b>${esc(orderShop(o))}</b></span><span>ถึง <b>${esc(o.address)}</b></span></div><div class="map-canvas"><svg viewBox="0 0 720 320" role="img" aria-label="แผนภาพเส้นทางการจัดส่ง"><rect width="720" height="320" fill="#eaf0dd"/><path d="M0 40Q130 120 30 320M430 0Q400 140 470 320" fill="none" stroke="#c7e7ec" stroke-width="43"/><g fill="#d3e1b9"><rect x="210" y="20" width="92" height="112" rx="18"/><rect x="390" y="214" width="92" height="85" rx="18"/><rect x="567" y="31" width="117" height="125" rx="18"/></g><g fill="#e5dcc8" stroke="#d5cdb9" stroke-width="2"><rect x="74" y="67" width="62" height="60" rx="8"/><rect x="215" y="216" width="78" height="68" rx="8"/><rect x="379" y="102" width="98" height="50" rx="8"/><rect x="573" y="257" width="86" height="50" rx="8"/></g><g stroke="#fffaf0" stroke-width="24" fill="none"><path d="M0 177H720M175 0V320M345 0V320M525 0V320M0 250H720M345 82H720M525 220H720"/></g><g fill="#809070" font-size="12" font-family="sans-serif"><text x="220" y="78">สวนใบบัว</text><text x="40" y="165">ถนนสวนอร่อย</text><text x="375" y="69">ถนนกบเดินทาง</text><text x="583" y="110">สวนชุมชน</text></g><polyline points="${routePoints.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#d4ddd0" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${routePoints.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#658e4c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="82" cy="250" r="16" fill="#f48e48" stroke="white" stroke-width="4"/><text x="82" y="255" fill="white" font-size="15" text-anchor="middle">⌂</text><circle cx="635" cy="220" r="16" fill="#176b4d" stroke="white" stroke-width="4"/><text x="635" y="225" fill="white" font-size="15" text-anchor="middle">✓</text><g class="rider-marker" transform="translate(${point[0]},${point[1]})"><circle r="25" fill="#fff9e9" stroke="#f48e48" stroke-width="3"/><image href="assets/mascot-driving-poster.png" x="-27" y="-29" width="54" height="54"/></g></svg><span class="map-label">เส้นทางจากร้านไปยังที่อยู่จัดส่ง</span></div><div class="gps-bottom"><div><b class="route-percent">${Math.round(progress*100)}% ของเส้นทาง</b><p class="route-eta">${progress===1?'ถึงปลายทางแล้ว':`เหลือ ${Math.ceil((1-progress)*60)} วินาที`}</p></div><div class="gps-controls" ${shown==='จัดส่งสำเร็จ'?'hidden':''}><button class="outline" data-action="pause-route">${state.routePaused===null?'หยุดติดตาม':'เดินทางต่อ'}</button><button class="outline" data-action="restart-route">เริ่มติดตามใหม่</button></div></div><div class="route-bar"><span style="width:${progress*100}%"></span></div><p class="tracking-note">ติดตามเส้นทางการจัดส่งอาหาร</p></section>`;}
function tracking(o) {
 if(!o)return `${head('ติดตามคำสั่งซื้อ','ไม่พบคำสั่งซื้อ')}<button class="outline" data-page="orders">กลับไปคำสั่งซื้อ</button>`;
 const active=trackingSteps.indexOf(o.status),cancelled=o.status==='ยกเลิกแล้ว',shown=state.previewStatus||o.status;
 return `${head('ติดตามคำสั่งซื้อ',o.id,`<button class="outline" data-page="orders">กลับไปคำสั่งซื้อ</button>`)}<section class="order-status-scene"><div><span class="eyebrow">${state.previewStatus?'ORDER STATUS':'ORDER TRACKING'}</span><h2>${esc(shown)}</h2><p>${esc(orderShop(o))} · ${orderDate(o.created)}</p>${badge(o.paymentStatus)}<p class="tracking-note">สถานะออเดอร์ปัจจุบัน: <b>${esc(o.status)}</b>${state.previewStatus?' · กำลังดูท่านี้':''}</p><p class="tracking-note">${state.timelinePlaying?'<span class="timeline-countdown"></span>':'กดขั้นตอนด้านล่างเพื่อดูแต่ละท่า'}</p></div><figure class="status-figure">${statusMascot(shown,state.animateMascots)}${shown!=='ยกเลิกแล้ว'&&shown!=='จัดส่งสำเร็จ'?`<button class="animation-toggle" data-action="toggle-animation" aria-pressed="${!state.animateMascots}">${state.animateMascots?'หยุดภาพเคลื่อนไหว':'เล่นภาพเคลื่อนไหว'}</button>`:''}</figure></section><div class="timeline-actions"><span>ลองดูแต่ละช่วงการเดินทาง</span><div><button class="outline" data-action="play-timeline">${state.timelinePlaying?'หยุดไทม์ไลน์':'เล่นตามเวลา'}</button>${state.previewStatus?'<button class="outline" data-action="actual-status">ดูสถานะออเดอร์ปัจจุบัน</button>':''}</div></div><ol class="tracking-steps" aria-label="ขั้นตอนคำสั่งซื้อ">${trackingSteps.map((label,index)=>`<li class="${!cancelled&&index<active?'done':!cancelled&&index===active?'current':''}" ${index===active?'aria-current="step"':''}><button class="step-preview ${state.previewStatus===label?'selected':''}" data-preview-status="${label}" aria-pressed="${state.previewStatus===label}" aria-label="ดูแอนิเมชัน ${label}"><span>${!cancelled&&index<active?'✓':index+1}</span><b>${label}</b><small>${['รอชำระเงิน','รอร้านยืนยัน'].includes(label)?'กบนั่งรอ':label==='กำลังเตรียมอาหาร'?'กบเชฟ':label==='กำลังจัดส่ง'?'กบไรเดอร์':'กบนักชิม'}</small></button></li>`).join('')}</ol>${state.previewStatus?'<div class="info-note preview-note">สถานะออเดอร์ปัจจุบันและประวัติยังคงเดิม</div>':''}${cancelled?'<div class="info-note">คำสั่งซื้อนี้ถูกยกเลิกแล้ว ไม่ดำเนินการจัดส่งต่อ</div>':''}${['กำลังจัดส่ง','จัดส่งสำเร็จ'].includes(shown)?deliveryMap(o,shown):''}<div class="tracking-grid"><section class="surface"><h2>รายการอาหารและยอดรวม</h2>${orderItems(o)}${orderTotals(o)}<div class="info-strip">ส่งที่ ${esc(o.address)}</div><p class="modal-note">${esc(o.payment)} · ${esc(o.paymentStatus)}</p>${canCancel(o.status)?`<button class="text-danger" data-cancel="${o.id}">ยกเลิกคำสั่งซื้อ</button>`:''}</section><section class="surface"><h2>ประวัติสถานะ</h2><ol class="status-history">${(o.history||[]).map(h=>`<li><b>${esc(h.status)}</b><time datetime="${esc(h.at)}">${orderDate(h.at)}</time></li>`).join('')}</ol><button class="outline" data-detail="${o.id}">รายละเอียดการชำระเงิน</button></section></div>`;
}
function resetPreview(){state.previewStatus=null;state.timelinePlaying=false;state.routePaused=null;}
function previewStatus(status){state.previewStatus=status;state.previewStartedAt=Date.now();state.routePaused=null;}
function tickTracking(){
 if(state.role!=='customer'||state.page!=='tracking')return;
 if(state.timelinePlaying){const duration={'รอร้านยืนยัน':8,'กำลังเตรียมอาหาร':12,'กำลังจัดส่ง':60}[state.previewStatus],left=duration-Math.floor((Date.now()-state.previewStartedAt)/1000);if(left<=0){const index=trackingSteps.indexOf(state.previewStatus);previewStatus(trackingSteps[index+1]);if(state.previewStatus==='จัดส่งสำเร็จ')state.timelinePlaying=false;render();}else{const caption=$('.timeline-countdown');if(caption)caption.textContent=`ตามเวลา · เปลี่ยนท่าใน ${left} วินาที`;}}
 const map=$('.gps-card');if(!map)return;const complete=map.dataset.routeComplete==='true',progress=complete?1:(state.routePaused??routeProgress(Number(map.dataset.routeStart))),point=routePoint(progress);
 $('.rider-marker')?.setAttribute('transform',`translate(${point[0]},${point[1]})`);$('.route-percent').textContent=`${Math.round(progress*100)}% ของเส้นทาง`;$('.route-eta').textContent=progress===1?'ถึงปลายทางแล้ว':`เหลือ ${Math.ceil((1-progress)*60)} วินาที`;$('.route-bar span').style.width=`${progress*100}%`;
}
function customerError(data,ignoreId=null) {
  if(!data.id?.match(/^[A-Za-z0-9-]{2,30}$/)) return 'รหัสลูกค้าต้องเป็นตัวอักษรหรือตัวเลข 2–30 ตัว';
  if(!data.name?.trim()||!/^0\d{8,9}$/.test(normalizePhone(data.phone))||!/^\S+@\S+\.\S+$/.test(data.email||'')) return 'กรอกชื่อ เบอร์โทร 9–10 หลัก และอีเมลให้ถูกต้อง';
  if(state.customers.some(c=>c.id!==ignoreId&&(c.id.toLowerCase()===data.id.toLowerCase()||normalizePhone(c.phone)===normalizePhone(data.phone)||c.email.toLowerCase()===data.email.toLowerCase()))) return 'รหัสลูกค้า อีเมล หรือเบอร์โทรศัพท์นี้มีอยู่แล้ว';
  return '';
}
function orderStates(o,role) {
  if(o.status==='ยกเลิกแล้ว') return [o.status];
  if(o.paymentStatus!=='ชำระเงินสำเร็จ') return [o.status,...(role!=='admin'&&canCancel(o.status)?['ยกเลิกแล้ว']:[])];
  if(role==='admin') return [o.status,...['รอร้านยืนยัน','กำลังเตรียมอาหาร','กำลังจัดส่ง','จัดส่งสำเร็จ'].filter(s=>s!==o.status)];
  return [o.status,...({'รอร้านยืนยัน':['กำลังเตรียมอาหาร','ยกเลิกแล้ว'],'กำลังเตรียมอาหาร':['กำลังจัดส่ง','ยกเลิกแล้ว'],'กำลังจัดส่ง':['จัดส่งสำเร็จ']}[o.status]||[])];
}
const shopName = id => state.shops.find(s => s.id === id)?.name || '—';
const customerName = id => state.customers.find(c => c.id === id)?.name || '—';
const orderDate = date => new Date(date).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' });
const statusClass = status => ({'กำลังเตรียมอาหาร':'amber','รอร้านยืนยัน':'amber','กำลังจัดส่ง':'blue','จัดส่งสำเร็จ':'green','ชำระเงินสำเร็จ':'green','อนุมัติแล้ว':'green','เปิดให้บริการ':'green','รออนุมัติ':'amber','ยกเลิกแล้ว':'gray','ระงับ':'red','สินค้าหมด':'gray'}[status] || 'gray');
const badge = (label, tone = statusClass(label)) => `<span class="badge ${tone}">${esc(label)}</span>`;
const empty = (icon,title,description) => `<div class="empty"><span class="empty-icon">${icon}</span><h3>${title}</h3><p>${description}</p></div>`;
const field = (name,label,value='',type='text',required=true) => `<label class="field"><span>${label}</span><input name="${name}" type="${type}" value="${esc(value)}" autocomplete="${name==='password'?(state.modal==='login'?'current-password':'new-password'):name==='email'?'email':name==='phone'?'tel':name==='name'?'name':'off'}" ${name==='password'&&state.modal==='register'?'minlength="8"':''} ${name==='phone'?'pattern="0[0-9]{8,9}" title="กรอกเบอร์โทร 9–10 หลัก" inputmode="numeric"':''} ${type==='number'?'min="0.01" step="0.01"':''} ${required?'required':''}></label>`;
const options = (arr,selected) => arr.map(x => `<option value="${esc(x)}" ${x===selected?'selected':''}>${esc(x)}</option>`).join('');
state.customers.forEach(c=>{c.addresses=c.id==='C001'?[...state.addresses]:[];c.selectedAddress=c.addresses[0]||'';});
state.addresses=state.customers[0].addresses;
function selectCustomer(id) {const c=state.customers.find(x=>x.id===id);state.customerId=id;state.addresses=c?.addresses||(c?c.addresses=[]:[]);state.address=c?.selectedAddress||state.addresses[0]||'';state.cart={};}
// Keep a snapshot so later menu/account edits do not rewrite order history.
state.orders.forEach(o=>{o.deliveryStartedAt=Date.now();o.history=[{status:o.status,at:now.toISOString()}];o.shopName=shopName(o.shopId);o.customerName=customerName(o.customerId);o.paymentId=`PAY-${o.id}`;o.paidAt=o.created;o.items=o.items.map(i=>({...i,name:state.menus.find(m=>m.id===i.id)?.name,price:state.menus.find(m=>m.id===i.id)?.price}));});
function notify(message) {
  state.notice=message;render();
  setTimeout(()=>{if(state.notice===message){state.notice='';document.querySelector('.toast')?.remove();}},3200);
}
function formError(message) { const target=document.querySelector('#form-error'); if(target){target.textContent=message;target.hidden=!message;} }
function showTrackingAnimation(){document.querySelector('.order-status-scene')?.scrollIntoView({block:'center',behavior:'instant'});}
function topOfPage(){if(typeof window!=='undefined')window.scrollTo(0,0);}
function setRole(role) { closeAuth();resetPreview();state.role=role; state.page=role==='customer'?'explore':'dashboard'; state.search=''; state.orderDate=''; state.query=''; state.modal=''; state.cartOpen=false; render();topOfPage(); }
function head(title,subtitle,action='') { return `<div class="page-head"><div><div class="eyebrow">${roles[state.role]} / ${esc(title)}</div><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></div>${action}</div>`; }
function layout() {
  const isCustomer = state.role==='customer';
  return `<header class="topbar"><a class="brand" href="#" data-action="home"><img class="brand-logo" src="assets/gripfood-logo.png" alt="Grip Food"></a><span class="brand-caption">DELIVERY, MADE DELIGHTFUL</span><div class="top-actions">${isCustomer?`<button class="icon-button mobile-cart" data-action="cart" aria-label="เปิดตะกร้า">${cartGlyph} <span class="cart-label">ตะกร้า</span> <small>${cartCount(state.cart)}</small></button>`:""}<button class="user-button" data-action="login">${frogAvatar(isCustomer?state.customers.find(c=>c.id===state.customerId)?.avatar:state.role==='merchant'?state.shops.find(s=>s.id===state.merchantId)?.avatar:'cooking')}<span class="user-text">${isCustomer?esc(customerName(state.customerId)):state.role==='merchant'?esc(shopName(state.merchantId)):'ผู้ดูแลระบบ'}<small>บัญชี</small></span><span class="chevron">⌄</span></button></div></header>
  <div class="role-strip"><span>มุมมอง</span><div class="role-switch">${Object.entries(roles).map(([key,label])=>`<button class="${state.role===key?'active':''}" data-role="${key}">${label}</button>`).join('')}</div></div>
  <div class="shell"><aside class="sidebar"><div class="sidebar-label">เมนูหลัก</div><nav>${navs[state.role].map(([key,label,icon])=>`<button class="nav-link ${(state.page===key||(key==='explore'&&state.page==='restaurant')||(key==='cart'&&['checkout','payment'].includes(state.page)))?'active':''}" data-page="${key}"><span class="nav-icon">${icon}</span>${label}${key==='orders'&&state.role==='merchant'?`<small>${state.orders.filter(o=>o.shopId===state.merchantId&&o.status==='รอร้านยืนยัน').length}</small>`:key==='approvals'?`<small>${state.shops.filter(s=>s.approval==='รออนุมัติ').length}</small>`:''}</button>`).join('')}</nav><div class="sidebar-bottom"><div class="mini-illustration">${mascot()}</div><b>ส่งความอร่อย ทุกวัน</b><p>จัดการทุกขั้นตอนในที่เดียว</p></div></aside><main class="content">${content()}</main></div>
  ${state.cartOpen?cartPanel():''}${state.modal?modal():''}${state.notice?`<div class="toast" role="status">✓ ${esc(state.notice)}</div>`:''}`;
}
function content() {
  if(state.role==='customer') return state.page==='explore'?explore():state.page==='cart'?customerCart():state.page==='checkout'?customerCheckout():state.page==='payment'?customerPayment():state.page==='orders'?customerOrders():state.page==='restaurant'?customerRestaurant():state.page==='tracking'?tracking(state.orders.find(o=>o.id===state.trackId&&o.customerId===state.customerId)):account();
  if(state.role==='merchant') return state.page==='dashboard'?merchantDashboard():state.page==='menu'?merchantMenu():state.page==='orders'?merchantOrders():store();
  return state.page==='dashboard'?adminDashboard():state.page==='approvals'?adminApprovals():state.page==='customers'?adminCustomers():state.page==='shops'?adminShops():adminOrders();
}
function explore() {
  const q=state.query.toLowerCase();
  const menus=state.menus.filter(m => (state.category==='ทั้งหมด'||m.category===state.category) && (!q || [m.name,m.category,shopName(m.shopId)].some(x=>x.toLowerCase().includes(q))));
  return `<div class="customer-hero"><div><div class="eyebrow light">GRIP FOOD DELIVERY</div><h1>วันนี้กินอะไรดี?</h1><p>อาหารอร่อยจากร้านโปรด ส่งตรงถึงคุณ</p><button class="address-pill" data-page="account">⌖ ส่งที่&nbsp; <b>${esc(state.address)}</b> <span>⌄</span></button></div><div class="hero-art">${mascot()}</div></div>
  <div class="search-wrap"><span>⌕</span><input id="menu-search" aria-label="ค้นหาร้านหรือเมนู" placeholder="ค้นหาร้านอาหาร หรือเมนูที่อยากกิน..." value="${esc(state.query)}"><button data-action="clear-query" aria-label="ล้างคำค้นหา">${state.query?'×':''}</button></div>
  <section class="section"><div class="section-title"><div><span class="eyebrow">EXPLORE</span><h2>เลือกความอร่อย</h2></div><span class="muted">${menus.length} เมนู</span></div><div class="chips">${['ทั้งหมด',...new Set(state.menus.map(m=>m.category))].map(c=>`<button data-category="${c}" class="chip ${state.category===c?'selected':''}">${c}</button>`).join('')}</div>
  ${menus.length?`<div class="menu-grid">${menus.map(menuCard).join('')}</div>`:empty('⌕','ไม่พบเมนูที่ค้นหา','ลองเปลี่ยนคำค้นหาหรือหมวดหมู่')}</section>`;
}
function menuCard(m) {
  const shop=state.shops.find(s=>s.id===m.shopId), enabled=availableMenu(m);
  const status=!m.available?'สินค้าหมด':shop?.approval!=='อนุมัติแล้ว'?'ร้านรออนุมัติ':shop?.status!=='เปิดให้บริการ'?'ร้านไม่เปิดให้บริการ':'พร้อมขาย';
  return `<article class="food-card"><button class="food-card-open" data-open-menu="${m.id}" aria-label="ดูร้าน ${esc(shopName(m.shopId))} และรายละเอียด ${esc(m.name)}"><span class="sr-only">ดูร้านและเมนู</span></button><div class="food-art ${m.color}" role="img" aria-label="${esc(m.name)}">${menuImage(m)}${!enabled?`<div class="sold-overlay">${status}</div>`:''}</div><div class="food-body"><div class="food-meta"><span>${esc(shopName(m.shopId))}</span><span class="dot">•</span><span>${esc(m.category)}</span></div><h3>${esc(m.name)}</h3><p>${esc(m.description)}</p>${badge(status,enabled?'green':'gray')}<div class="food-foot"><strong>${money(m.price)}</strong><button class="add-button" data-add="${m.id}" ${!enabled?'disabled':''} aria-label="เพิ่ม ${esc(m.name)} ลงตะกร้า">${enabled?'+ เพิ่มลงตะกร้า':'ไม่พร้อมขาย'}</button></div></div></article>`;
}
function customerRestaurant(){
 const s=state.shops.find(s=>s.id===state.restaurantId),selected=state.menus.find(m=>m.id===state.selectedMenuId&&m.shopId===s?.id);
 if(!s)return `${head('ร้านอาหาร','ไม่พบร้านนี้ปัจจุบัน')}<button class="outline" data-page="explore">กลับไปเลือกอาหาร</button>`;
 const menus=state.menus.filter(m=>m.shopId===s.id),enabled=selected&&availableMenu(selected),status=s.approval!=='อนุมัติแล้ว'?'ร้านรออนุมัติ':s.status;
 return `<button class="outline restaurant-back" data-page="explore">← กลับไปเลือกอาหาร</button><section class="restaurant-profile"><div class="restaurant-identity">${frogAvatar(s.avatar,'restaurant-avatar')}<div><span class="eyebrow">MEET THE RESTAURANT</span><h1>${esc(s.name)}</h1><p>${esc(s.type)} · R00${s.id}</p>${badge(status)}</div></div><div class="restaurant-details"><div><span>เวลาเปิด–ปิด</span><b>${esc(s.hours)}</b></div><div><span>ที่อยู่ร้าน</span><b>${esc(s.address)}</b></div><div><span>เบอร์โทรศัพท์</span><b>${esc(s.phone)}</b></div><div><span>ค่าจัดส่ง</span><b>฿25 ต่อร้าน</b></div></div></section>${selected?`<section class="selected-dish surface" aria-label="รายละเอียด ${esc(selected.name)}"><div class="food-art selected-dish-photo ${selected.color}" role="img" aria-label="${esc(selected.name)}">${menuImage(selected)}</div><div class="selected-dish-info"><span class="eyebrow">YOUR PICK · เมนูที่เลือก</span><h2>${esc(selected.name)}</h2><p>${esc(selected.description)}</p>${badge(enabled?'พร้อมขาย':!selected.available?'สินค้าหมด':status,enabled?'green':'gray')}<div class="selected-dish-action"><strong>${money(selected.price)}</strong><button class="primary" data-add="${selected.id}" ${enabled?'':'disabled'} aria-label="เพิ่ม ${esc(selected.name)} ลงตะกร้า">${enabled?'+ เพิ่มลงตะกร้า':'ไม่พร้อมขาย'}</button></div></div></section>`:''}<section class="section"><div class="section-title"><div><span class="eyebrow">FROM THE SAME KITCHEN</span><h2>เมนูทั้งหมดของร้าน</h2></div><span class="muted">${menus.length} เมนู</span></div>${menus.length?`<div class="menu-grid">${menus.map(menuCard).join('')}</div>`:empty('☷','ร้านนี้ยังไม่มีเมนู','กลับไปเลือกอาหารจากร้านอื่นได้')}</section>`;
}
function cartPanel() {
  const entries=Object.entries(state.cart).filter(([,q])=>q>0);
  const groups=cartGroups(state.cart,state.menus),subtotal=cartSubtotal(state.cart,state.menus),delivery=groups.length*25,total=Math.round((subtotal+delivery)*100)/100;
  return `<div class="scrim" data-action="cart"></div><aside class="cart-panel" role="dialog" aria-modal="true" aria-label="ตะกร้าอาหาร"><div class="panel-head"><div><span class="eyebrow">YOUR ORDER</span><h2>ตะกร้าของคุณ <span class="count-bubble">${cartCount(state.cart)}</span></h2></div><button class="close" data-action="cart" aria-label="ปิดตะกร้า">×</button></div><div class="cart-scroll">${groups.length>1?`<div class="cart-shop-summary"><b>${groups.length} ร้านในตะกร้าเดียว</b><p>แยกออเดอร์และการจัดส่งตามร้าน ชำระรวมในครั้งเดียว</p>${groups.map(g=>`<div><span>${esc(shopName(g.shopId))}</span><span>อาหาร ${money(g.subtotal)} + ส่ง ${money(g.delivery)}</span></div>`).join('')}</div>`:''}${entries.length?entries.map(([id,qty])=>{let m=state.menus.find(x=>x.id===Number(id));return `<div class="cart-item"><div class="cart-thumb ${m.color}">${menuImage(m)}</div><div class="cart-info"><b>${esc(m.name)}</b><small>${esc(shopName(m.shopId))}</small><small>${money(m.price)} / ชิ้น × ${qty}</small><strong>รวม ${money(m.price*qty)}</strong><button class="remove-item" data-remove="${id}" aria-label="ลบ ${esc(m.name)} จากตะกร้า">ลบรายการ</button></div><div class="qty"><button data-qty="${id}" data-delta="-1" aria-label="ลดจำนวน">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="เพิ่มจำนวน">+</button></div></div>`}).join(''):empty('▤','ตะกร้ายังว่าง','เลือกเมนูที่ชอบแล้วเพิ่มลงตะกร้า')}
  </div><div class="cart-bottom"><div class="price-row"><span>ค่าอาหาร</span><b>${money(subtotal)}</b></div><div class="price-row"><span>ค่าจัดส่ง${groups.length?` (${groups.length} ร้าน × ฿25)`: ''}</span><b>${money(delivery)}</b></div><div class="price-row"><span>ส่วนลด</span><b>${money(0)}</b></div><div class="price-total"><span>ยอดชำระสุทธิ</span><strong>${money(total)}</strong></div><button class="primary wide" data-action="checkout" ${!entries.length?'disabled':''}>ไปยืนยันคำสั่งซื้อ <span>→</span></button><button class="outline wide" data-page="cart">ดูตะกร้าสินค้า</button></div></aside>`;
}
function checkoutSteps(active) {return `<ol class="checkout-steps" aria-label="ขั้นตอนสั่งอาหาร">${['ตะกร้าสินค้า','ยืนยันคำสั่งซื้อ','ชำระเงิน'].map((step,i)=>`<li class="${i<active?'done':i===active?'current':''}" ${i===active?'aria-current="step"':''}><span>${i<active?'✓':i+1}</span><b>${step}</b></li>`).join('')}</ol>`;}
function customerCart() {
  const groups=cartGroups(state.cart,state.menus),subtotal=cartSubtotal(state.cart,state.menus),delivery=groups.length*25,total=Math.round((subtotal+delivery)*100)/100;
  if(!groups.length)return `${head('ตะกร้าสินค้า','รายการอาหารที่เลือกไว้')} ${checkoutSteps(0)}<section class="surface cart-empty">${empty('▤','ตะกร้ายังว่าง','เลือกอาหารจากร้านที่พร้อมให้บริการ แล้วกลับมาดำเนินการต่อ')}<button class="primary" data-page="explore">เลือกอาหาร</button></section>`;
  return `${head('ตะกร้าสินค้า','ตรวจสอบรายการอาหารและจำนวนก่อนยืนยัน')} ${checkoutSteps(0)}<div class="cart-page-layout"><section class="surface cart-page-items">${groups.map(g=>`<section class="cart-shop-group"><div class="surface-head"><div><span class="eyebrow">ร้านอาหาร</span><h2>${esc(shopName(g.shopId))}</h2></div><span class="muted">ค่าจัดส่ง ${money(g.delivery)}</span></div>${g.items.map(i=>`<div class="cart-page-item"><div><b>${esc(itemName({items:[i]},i))}</b><small>${money(i.price)} / รายการ</small></div><div class="qty"><button data-qty="${i.id}" data-delta="-1" aria-label="ลดจำนวน ${esc(itemName({items:[i]},i))}">−</button><span>${i.qty}</span><button data-qty="${i.id}" data-delta="1" aria-label="เพิ่มจำนวน ${esc(itemName({items:[i]},i))}">+</button></div><strong>${money(i.price*i.qty)}</strong><button class="remove-item" data-remove="${i.id}">ลบ</button></div>`).join('')}</section>`).join('')}</section><aside class="surface cart-page-summary"><span class="eyebrow">ORDER SUMMARY</span><h2>สรุปคำสั่งซื้อ</h2><div class="price-row"><span>ค่าอาหาร</span><b>${money(subtotal)}</b></div><div class="price-row"><span>ค่าจัดส่ง (${groups.length} ร้าน)</span><b>${money(delivery)}</b></div><div class="price-total"><span>ยอดรวม</span><strong>${money(total)}</strong></div><button class="primary wide" data-action="checkout">ดำเนินการต่อ</button><button class="outline wide" data-page="explore">เลือกอาหารเพิ่ม</button></aside></div>`;
}
function customerCheckout() {
  const groups=cartGroups(state.cart,state.menus),subtotal=cartSubtotal(state.cart,state.menus),delivery=groups.length*25,total=Math.round((subtotal+delivery)*100)/100;
  if(!groups.length)return `${head('ยืนยันคำสั่งซื้อ','ตรวจสอบที่อยู่จัดส่งและวิธีชำระเงิน')} ${checkoutSteps(1)}<section class="surface cart-empty">${empty('▤','ไม่มีรายการให้ยืนยัน','กลับไปเลือกอาหารก่อนดำเนินการต่อ')}<button class="primary" data-page="explore">เลือกอาหาร</button></section>`;
  return `${head('ยืนยันคำสั่งซื้อ','ตรวจสอบรายละเอียดก่อนส่งคำสั่งซื้อ')} ${checkoutSteps(1)}<div class="checkout-page-layout"><section class="checkout-main"><div class="surface"><div class="surface-head"><div><span class="eyebrow">DELIVERY ADDRESS</span><h2>ที่อยู่จัดส่ง</h2></div><button class="outline" data-modal="address">+ เพิ่มที่อยู่</button></div><label class="field"><span>เลือกที่อยู่</span><select id="checkout-address">${options(state.addresses,state.address)}</select></label>${state.address?`<div class="info-strip">⌖ ${esc(state.address)}</div>`:''}</div><div class="surface"><span class="eyebrow">PAYMENT METHOD</span><h2>วิธีชำระเงิน</h2><label class="field"><span>เลือกช่องทางชำระเงิน</span><select id="checkout-payment">${options(['พร้อมเพย์','บัตรเครดิต/เดบิต'],state.payment)}</select></label><p class="modal-note">ระบบจะแสดงสถานะการชำระเงินหลังยืนยันคำสั่งซื้อ</p></div><div class="surface"><span class="eyebrow">YOUR ITEMS</span><h2>รายการอาหาร</h2>${groups.map(g=>`<section class="checkout-shop"><h3>${esc(shopName(g.shopId))}</h3>${g.items.map(i=>`<div class="price-row"><span>${esc(itemName({items:[i]},i))} × ${i.qty}</span><b>${money(i.price*i.qty)}</b></div>`).join('')}</section>`).join('')}</div></section><aside class="surface cart-page-summary"><span class="eyebrow">ORDER SUMMARY</span><h2>ยอดที่ต้องชำระ</h2><div class="price-row"><span>ค่าอาหาร</span><b>${money(subtotal)}</b></div><div class="price-row"><span>ค่าจัดส่ง (${groups.length} ร้าน)</span><b>${money(delivery)}</b></div><div class="price-total"><span>ยอดรวมสุทธิ</span><strong>${money(total)}</strong></div><button class="primary wide" data-action="place-order">ยืนยันคำสั่งซื้อ</button><button class="outline wide" data-page="cart">กลับไปตะกร้า</button></aside></div>`;
}
function customerPayment() {
  const id=state.activePaymentId,orders=state.orders.filter(o=>o.id===id||o.batchId===id),total=Math.round(orders.reduce((sum,o)=>sum+o.total,0)*100)/100;
  if(!orders.length)return `${head('ชำระเงิน','ไม่มีรายการรอชำระเงิน')} ${checkoutSteps(2)}<section class="surface cart-empty">${empty('✓','ไม่พบรายการชำระเงิน','ดูสถานะคำสั่งซื้อของคุณได้ที่หน้าคำสั่งซื้อ')}<button class="primary" data-page="orders">ดูคำสั่งซื้อ</button></section>`;
  const failed=orders.some(o=>o.paymentStatus==='ชำระเงินไม่สำเร็จ');
  return `${head('ชำระเงิน',`คำสั่งซื้อ ${orders.map(o=>esc(o.id)).join(', ')}`)} ${checkoutSteps(2)}<div class="payment-page-layout"><section class="surface payment-instructions"><div class="payment-status">${statusMascot('รอชำระเงิน',false)}<div><span class="eyebrow">PAYMENT</span><h2>${failed?'ทำรายการอีกครั้ง':'รอชำระเงิน'}</h2><p>${esc(state.payment)} · ${orders.length} ร้าน</p></div></div><div class="payment-due"><span>ยอดที่ต้องชำระ</span><strong>${money(total)}</strong></div><p>ตรวจสอบยอดและช่องทางชำระเงินให้ถูกต้อง ก่อนยืนยันสถานะการชำระเงิน</p><div class="payment-actions"><button class="primary wide" data-pay-success="${esc(id)}">${failed?'ลองชำระเงินอีกครั้ง':'ยืนยันการชำระเงิน'}</button><button class="outline wide" data-pay-fail="${esc(id)}">แจ้งว่าชำระเงินไม่สำเร็จ</button><button class="text-danger" data-pay-cancel="${esc(id)}">ยกเลิกคำสั่งซื้อ</button></div></section><aside class="surface payment-order-summary"><span class="eyebrow">ORDER DETAILS</span><h2>รายละเอียดคำสั่งซื้อ</h2>${orders.map(o=>`<section class="checkout-shop"><h3>${esc(orderShop(o))}</h3>${o.items.map(i=>`<div class="price-row"><span>${esc(itemName(o,i))} × ${i.qty}</span><b>${money(i.price*i.qty)}</b></div>`).join('')}<div class="price-row"><span>ค่าจัดส่ง</span><b>${money(o.delivery)}</b></div></section>`).join('')}<div class="price-total"><span>ยอดรวม</span><strong>${money(total)}</strong></div><div class="info-strip">ที่อยู่จัดส่ง: ${esc(orders[0].address)}</div></aside></div>`;
}
function customerOrders() {
  const orders=state.orders.filter(o=>o.customerId===state.customerId&&(!state.search||o.id.toLowerCase().includes(state.search.toLowerCase()))&&(!state.orderDate||localDate(o.created)===state.orderDate));
  return `${head('คำสั่งซื้อของฉัน','ติดตามสถานะและดูประวัติการสั่งอาหาร')}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" aria-label="ค้นหารหัสคำสั่งซื้อ" placeholder="ค้นหารหัสคำสั่งซื้อ" value="${esc(state.search)}"></div><label class="date-filter"><span>วันที่สั่งซื้อ</span><input id="order-date" type="date" value="${state.orderDate}"></label><button class="outline" data-action="clear-orders">ล้างตัวกรอง</button></div>${orders.length?`<div class="order-list">${orders.map(o=>`<article class="order-card"><div class="order-top"><div><span class="eyebrow">${esc(o.id)}</span><h3>${esc(orderShop(o))}</h3><p>${orderDate(o.created)}</p></div>${badge(o.status)}</div><div class="order-items">${orderItems(o)}${orderTotals(o)}</div><div class="order-bottom"><div><small>ยอดชำระ · ${esc(o.payment)} · ${esc(o.paymentStatus)}</small><strong>${money(o.total)}</strong></div><div class="order-buttons"><button class="primary" data-track="${o.id}">ติดตามออเดอร์</button><button class="outline" data-detail="${o.id}">รายละเอียด</button>${['รอชำระเงิน','ชำระเงินไม่สำเร็จ'].includes(o.paymentStatus)&&o.status!=='ยกเลิกแล้ว'?`<button class="primary" data-payment="${o.id}">ชำระเงิน</button>`:''}${canCancel(o.status)?`<button class="text-danger" data-cancel="${o.id}">ยกเลิกคำสั่งซื้อ</button>`:''}</div></div></article>`).join('')}</div>`:empty('▤','ไม่พบคำสั่งซื้อ','ลองค้นหาด้วยรหัสหรือวันที่อื่น')}`;
}
function account() {
  const c=state.customers.find(x=>x.id===state.customerId);
  if(!c) return `${head('บัญชีของฉัน','ยังไม่มีบัญชีลูกค้า')}<button class="primary" data-modal="register">สมัครสมาชิก</button>`;
  return `${head('บัญชีของฉัน','จัดการข้อมูลส่วนตัวและที่อยู่จัดส่ง')}<div class="two-col"><section class="surface"><div class="surface-head"><div><span class="eyebrow">PERSONAL DETAILS</span><h2>ข้อมูลส่วนตัว</h2></div><button class="outline" data-modal="profile">แก้ไขข้อมูล</button></div><div class="profile-row">${frogAvatar(c.avatar,'profile-avatar')}<div><b>${esc(c.name)}</b><small>รหัสลูกค้า ${esc(c.id)}</small></div></div><div class="details"><div><span>เบอร์โทรศัพท์</span><b>${esc(c.phone)}</b></div><div><span>อีเมล</span><b>${esc(c.email)}</b></div></div></section><section class="surface"><div class="surface-head"><div><span class="eyebrow">DELIVERY ADDRESS</span><h2>ที่อยู่จัดส่ง</h2></div><button class="outline" data-modal="address">+ เพิ่มที่อยู่</button></div>${state.addresses.map((a,i)=>`<div class="address-card"><span>⌖</span><div><b>${a===state.address?'ที่อยู่ที่เลือก':'ที่อยู่จัดส่ง'}</b><p>${esc(a)}</p><button class="table-action" data-select-address="${i}">ใช้ที่อยู่นี้</button><button class="table-action" data-edit-address="${i}">แก้ไข</button></div></div>`).join('')}</section></div>`;
}
function metric(label,value,icon,tone) { return `<div class="metric"><span class="metric-icon ${tone}">${icon}</span><span>${label}</span><strong>${value}</strong></div>`; }
function merchantDashboard() {
  const orders=state.orders.filter(o=>o.shopId===state.merchantId&&o.paidAt);
  return `${head('ภาพรวมร้านอาหาร',`ยินดีต้อนรับกลับมา ${shopName(state.merchantId)}`,`<button class="primary" data-page="menu">+ เพิ่มเมนู</button>`)}<div class="metrics">${metric('คำสั่งซื้อทั้งหมด',orders.length,'▤','peach')}${metric('รอดำเนินการ',orders.filter(o=>o.status==='รอร้านยืนยัน'||o.status==='กำลังเตรียมอาหาร').length,'◷','butter')}${metric('เมนูพร้อมขาย',state.menus.filter(m=>m.shopId===state.merchantId&&m.available).length,'☷','mint')}${metric('ยอดขาย',money(orders.filter(o=>o.paymentStatus==='ชำระเงินสำเร็จ').reduce((n,o)=>n+o.total,0)),'฿','lavender')}</div><div class="surface"><div class="surface-head"><div><span class="eyebrow">RECENT ORDERS</span><h2>คำสั่งซื้อล่าสุด</h2></div><button class="outline" data-page="orders">ดูทั้งหมด →</button></div>${orderTable(orders,'merchant')}</div>`;
}
function merchantMenu() {
  const menus=state.menus.filter(m=>m.shopId===state.merchantId && (!state.search||[m.name,m.category,String(m.id)].some(x=>x.toLowerCase().includes(state.search.toLowerCase()))));
  return `${head('จัดการเมนู','เพิ่ม แก้ไข และกำหนดสถานะพร้อมขาย',`<button class="primary" data-modal="menu">+ เพิ่มเมนูใหม่</button>`)}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหาชื่อหรือหมวดหมู่เมนู" value="${esc(state.search)}"></div></div><div class="surface table-surface"><div class="table-scroll"><table><thead><tr><th>เมนู</th><th>หมวดหมู่</th><th>ราคา</th><th>สถานะ</th><th>จัดการ</th></tr></thead><tbody>${menus.map(m=>`<tr><td><div class="table-name"><span class="table-thumb ${m.color}">${menuImage(m)}</span><span><b>${esc(m.name)}</b><small>#${m.id}</small></span></div></td><td>${esc(m.category)}</td><td><b>${money(m.price)}</b></td><td>${badge(m.available?'พร้อมขาย':'สินค้าหมด',m.available?'green':'gray')}</td><td><button class="table-action" data-edit-menu="${m.id}">แก้ไข</button><button class="table-action danger" data-delete-menu="${m.id}">ลบ</button></td></tr>`).join('')}</tbody></table></div>${!menus.length?empty('⌕','ไม่พบเมนู','ลองค้นหาคำอื่น'):''}</div>`;
}
function merchantOrders() {
  const orders=state.orders.filter(o=>o.shopId===state.merchantId&&o.paidAt&&(!state.search||[o.id,orderCustomer(o),o.status].some(x=>x.toLowerCase().includes(state.search.toLowerCase()))));
  return `${head('คำสั่งซื้อ','ตรวจสอบรายการและอัปเดตขั้นตอนการทำอาหาร')}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหารหัส ชื่อลูกค้า หรือสถานะ" value="${esc(state.search)}"></div></div><div class="surface table-surface">${orderTable(orders,'merchant')}</div>`;
}
function orderTable(orders,role) {
  if(!orders.length) return empty('▤','ยังไม่มีคำสั่งซื้อ','ร้านอาหารจะรับรายการหลังชำระเงินสำเร็จเท่านั้น');
  return `<div class="table-scroll"><table><thead><tr><th>รหัสคำสั่งซื้อ</th><th>${role==='admin'?'ลูกค้า / ร้านค้า':'ลูกค้า'}</th><th>รายการ</th><th>ยอดรวม</th><th>สถานะ</th><th>จัดการ</th></tr></thead><tbody>${orders.map(o=>`<tr><td><b>${esc(o.id)}</b><small>${orderDate(o.created)}</small></td><td>${esc(orderCustomer(o))}${role==='admin'?`<small>${esc(orderShop(o))}</small>`:''}</td><td>${o.items.map(i=>`${esc(itemName(o,i))} ×${i.qty}`).join('<br>')}</td><td><b>${money(o.total)}</b><small>${esc(o.paymentStatus)}</small></td><td>${badge(o.status)}</td><td><div class="shop-actions"><button class="table-action" data-detail="${o.id}">รายละเอียด</button><button class="table-action" data-edit-order="${o.id}">ปรับสถานะ</button>${role==='admin'&&canCancel(o.status)?`<button class="table-action danger" data-cancel="${o.id}">ยกเลิกคำสั่งซื้อ</button>`:''}</div></td></tr>`).join('')}</tbody></table></div>`;
}
function store() {
  const s=state.shops.find(x=>x.id===state.merchantId);
  if(!s)return `${head('ข้อมูลร้านอาหาร','ยังไม่มีร้าน')}<button class="primary" data-modal="register">สมัครร้านอาหาร</button>`;
  return `${head('ข้อมูลร้านอาหาร','ข้อมูลการให้บริการและบัญชีรับเงิน',`<button class="primary" data-modal="store">แก้ไขข้อมูลร้าน</button>`)}<div class="surface store-card"><div class="store-cover ${s.color}"><img src="${avatarAsset(s.avatar)}" alt="${avatarNames[validAvatar(s.avatar)]}"></div><div class="store-info"><div class="store-title">${frogAvatar(s.avatar,'profile-avatar')}<div><span class="eyebrow">MERCHANT PROFILE</span><h2>${esc(s.name)}</h2><p>${esc(s.type)} · รหัสร้าน R00${s.id}</p></div>${badge(s.status)}</div><div class="details grid"><div><span>เบอร์โทรศัพท์</span><b>${esc(s.phone)}</b></div><div><span>ที่อยู่ร้าน</span><b>${esc(s.address)}</b></div><div><span>เวลาเปิด–ปิด</span><b>${esc(s.hours)}</b></div><div><span>บัญชีรับเงิน</span><b>${esc(s.bank)}</b></div><div><span>การอนุมัติ</span><b>${esc(s.approval)}</b></div></div></div></div>`;
}
function adminDashboard() {
  const pending=state.shops.filter(s=>s.approval==='รออนุมัติ').length;
  return `${head('ภาพรวมระบบ','ติดตามข้อมูลหลักของแพลตฟอร์ม Grip Food')}<div class="metrics">${metric('ลูกค้าทั้งหมด',state.customers.length,'♙','lavender')}${metric('ร้านอาหาร',state.shops.length,'⌂','peach')}${metric('คำสั่งซื้อ',state.orders.length,'▤','butter')}${metric('ร้านรออนุมัติ',pending,'◷','mint')}</div><div class="dashboard-grid"><section class="surface"><div class="surface-head"><div><span class="eyebrow">PENDING APPROVAL</span><h2>ร้านรออนุมัติ</h2></div><button class="outline" data-page="approvals">ดูคำขอทั้งหมด →</button></div>${pending?`<div class="pending-row"><span class="table-thumb mint">✓</span><div><b>${pending} ร้านรอพิจารณา</b><small>ตรวจสอบข้อมูลและเลือกผลอนุมัติ</small></div></div>`:empty('✓','ไม่มีรายการรออนุมัติ','ร้านค้าทั้งหมดได้รับการตรวจสอบแล้ว')}</section><section class="surface"><div class="surface-head"><div><span class="eyebrow">LATEST ORDERS</span><h2>คำสั่งซื้อล่าสุด</h2></div><button class="outline" data-page="orders">ดูทั้งหมด →</button></div>${state.orders.slice(0,3).map(o=>`<div class="pending-row"><span class="table-thumb butter">▤</span><div><b>${esc(o.id)}</b><small>${esc(orderCustomer(o))} · ${money(o.total)}</small></div>${badge(o.status)}</div>`).join('')}</section></div>`;
}
function adminCustomers() {
  const list=state.customers.filter(c=>!state.search||([c.id,c.name,c.phone].some(x=>x.toLowerCase().includes(state.search.toLowerCase()))||(/^\d+$/.test(state.search)&&normalizePhone(c.phone).includes(state.search))));
  return `${head('จัดการลูกค้า','ค้นหา เพิ่ม และปรับปรุงข้อมูลลูกค้า',`<button class="primary" data-modal="customer">+ เพิ่มลูกค้า</button>`)}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหาชื่อหรือเบอร์โทรศัพท์" value="${esc(state.search)}"></div></div><div class="surface table-surface"><div class="table-scroll"><table><thead><tr><th>รหัสลูกค้า</th><th>ชื่อ–นามสกุล</th><th>เบอร์โทรศัพท์</th><th>อีเมล</th><th>จัดการ</th></tr></thead><tbody>${list.map(c=>`<tr><td><b>${esc(c.id)}</b></td><td><div class="table-name">${frogAvatar(c.avatar,'table-thumb')}<span>${esc(c.name)}</span></div></td><td>${esc(c.phone)}</td><td>${esc(c.email)}</td><td><button class="table-action" data-edit-customer="${c.id}">แก้ไข</button><button class="table-action danger" data-delete-customer="${c.id}">ลบ</button></td></tr>`).join('')}</tbody></table></div>${!list.length?empty('⌕','ไม่พบลูกค้า','ลองค้นหาด้วยชื่อหรือเบอร์โทรศัพท์'):''}</div>`;
}
function adminShops() {
  const list=state.shops.filter(s=>s.approval==='อนุมัติแล้ว'&&(!state.search||([s.name,s.phone].some(x=>x.toLowerCase().includes(state.search.toLowerCase()))||(/^\d+$/.test(state.search)&&normalizePhone(s.phone).includes(state.search)))));
  const pending=state.shops.filter(s=>s.approval!=='อนุมัติแล้ว').length;
  return `${head('จัดการร้านอาหาร','ข้อมูลและสถานะของร้านที่ผ่านการอนุมัติ',`<button class="outline" data-page="approvals">ร้านรอพิจารณา${pending?` (${pending})`:''}</button>`)}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหาชื่อร้านหรือเบอร์โทรศัพท์" value="${esc(state.search)}"></div></div><div class="surface table-surface"><div class="table-scroll"><table><thead><tr><th>ร้านอาหาร</th><th>เบอร์โทรศัพท์</th><th>สถานะร้าน</th><th>จัดการ</th></tr></thead><tbody>${list.map(s=>`<tr><td><div class="table-name">${frogAvatar(s.avatar,'table-thumb')}<span><b>${esc(s.name)}</b><small>R00${s.id} · ${esc(s.type)}</small></span></div></td><td>${esc(s.phone)}</td><td>${badge(s.status)}</td><td><div class="shop-actions"><button class="table-action" data-edit-shop="${s.id}">แก้ไข</button><button class="table-action danger" data-suspend="${s.id}">${s.status==='ระงับ'?'เปิดใช้':'ระงับ'}</button></div></td></tr>`).join('')}</tbody></table></div>${!list.length?empty('⌕','ไม่พบร้านที่ได้รับอนุมัติ','ร้านที่ยังรอพิจารณาจะแสดงในหน้าอนุมัติร้าน'):''}</div>`;
}
function adminApprovals() {
  const list=state.shops.filter(s=>s.approval!=='อนุมัติแล้ว'&&(!state.search||[s.name,s.phone,s.approval].some(x=>x.toLowerCase().includes(state.search.toLowerCase()))));
  const pending=list.filter(s=>s.approval==='รออนุมัติ').length;
  return `${head('อนุมัติร้านค้า',`${pending} ร้านรอพิจารณา · ตรวจสอบข้อมูลก่อนเปิดให้บริการ`)}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหาชื่อร้านหรือเบอร์โทรศัพท์" value="${esc(state.search)}"></div></div><div class="approval-grid">${list.map(s=>`<article class="surface approval-card"><div class="approval-card-head">${frogAvatar(s.avatar,'profile-avatar')}<div><span class="eyebrow">R00${s.id} · ${esc(s.type)}</span><h2>${esc(s.name)}</h2></div>${badge(s.approval)}</div><div class="details"><div><span>เบอร์โทรศัพท์</span><b>${esc(s.phone)}</b></div><div><span>ที่อยู่ร้าน</span><b>${esc(s.address)}</b></div><div><span>เวลาเปิด–ปิด</span><b>${esc(s.hours)}</b></div></div><button class="primary" data-review="${s.id}">ตรวจสอบข้อมูลร้าน</button></article>`).join('')||`<section class="surface approval-empty">${empty('✓','ไม่มีร้านที่รอพิจารณา','คำขอร้านค้าทั้งหมดได้รับการตรวจสอบแล้ว')}</section>`}</div>`;
}
function adminOrders() {
  const orders=state.orders.filter(o=>!state.search||[o.id,o.status].some(x=>x.toLowerCase().includes(state.search.toLowerCase())));
  return `${head('คำสั่งซื้อทั้งหมด','ค้นหา ตรวจสอบ และปรับสถานะคำสั่งซื้อ')}<div class="toolbar"><div class="search-wrap compact"><span>⌕</span><input id="table-search" placeholder="ค้นหารหัสหรือสถานะคำสั่งซื้อ" value="${esc(state.search)}"></div></div><div class="surface table-surface">${orderTable(orders,'admin')}</div>`;
}
function modal(standalone=false) {
  let title='',body='',wide=false;
  const edit=state.editId;
  if(state.modal==='login') { title='เข้าสู่ระบบ'; body=`<div class="login-welcome">${frogAvatar(state.role==='merchant'?'cooking':state.role==='admin'?'driving':'delivered','login-avatar')}<span><b>ยินดีต้อนรับกลับมา</b><small>ลงชื่อเข้าใช้บัญชี Grip Food ของคุณ</small></span></div>${field('email','อีเมล','','email')}<label class="field"><span>รหัสผ่าน</span><input name="password" type="password" autocomplete="current-password" required></label>`; }
  if(state.modal==='register') { title=state.role==='merchant'?'สมัครร้านอาหาร':'สมัครสมาชิก'; body=state.role==='merchant'?`${field('name','ชื่อร้านอาหาร')}${field('phone','เบอร์โทรศัพท์ร้าน','','tel')}${field('address','ที่อยู่ร้าน')}${field('bank','บัญชีธนาคาร / พร้อมเพย์')}${field('hours','เวลาเปิด–ปิด','09:00–21:00')}<label class="field"><span>สถานะร้าน</span><select name="status">${options(['เปิดให้บริการ','ปิดชั่วคราว','ปิดร้าน'],'ปิดชั่วคราว')}</select></label>${field('password','รหัสผ่าน','','password')}`:`<p class="auth-hint">กรอกข้อมูลติดต่อและตั้งรหัสผ่านเพื่อสร้างบัญชี</p>${field('name','ชื่อ–นามสกุล')}${field('phone','เบอร์โทรศัพท์','','tel')}${field('email','อีเมล','','email')}${field('password','รหัสผ่าน (อย่างน้อย 8 ตัวอักษร)','','password')}`; body+=avatarPicker(state.role==='merchant'?'cooking':'delivered'); }
  if(state.modal==='profile') { let c=state.customers.find(x=>x.id===state.customerId); title='แก้ไขข้อมูลส่วนตัว'; body=`${field('id','รหัสลูกค้า',c.id)}${field('name','ชื่อ–นามสกุล',c.name)}${field('phone','เบอร์โทรศัพท์',c.phone,'tel')}${field('email','อีเมล',c.email,'email')}${field('password','รหัสผ่านใหม่ (เว้นว่างหากไม่เปลี่ยน)','','password',false)}`; body+=avatarPicker(c.avatar); }
  if(state.modal==='address') { title=edit===null?'เพิ่มที่อยู่จัดส่ง':'แก้ไขที่อยู่จัดส่ง'; body=`<label class="field"><span>ที่อยู่จัดส่ง</span><textarea name="address" rows="4" required>${esc(edit===null?'':state.addresses[edit])}</textarea></label>`; }
  if(state.modal==='menu') { let m=state.menus.find(x=>x.id===edit); title=m?'แก้ไขเมนู':'เพิ่มเมนูใหม่'; body=`${field('name','ชื่อเมนูอาหาร',m?.name)}<div class="form-grid"><label class="field"><span>หมวดหมู่</span><select name="category">${options(['อาหารไทย','อาหารญี่ปุ่น','สุขภาพ','เครื่องดื่ม','อื่น ๆ'],m?.category||'อาหารไทย')}</select></label>${field('price','ราคา (บาท)',m?.price||'','number')}</div><label class="field"><span>ภาพเมนู</span><select name="photo">${photoNames.map((label,index)=>`<option value="${index}" ${index===(m?.photo||0)?'selected':''}>${label}</option>`).join('')}</select></label><label class="field"><span>รูปภาพเมนู (ถ้ามี)</span><input name="image" type="file" accept="image/*"></label><label class="field"><span>รายละเอียด</span><textarea name="description" rows="3">${esc(m?.description||'')}</textarea></label><label class="check"><input type="checkbox" name="available" ${!m||m.available?'checked':''}> พร้อมขาย</label>`; }
  if(state.modal==='store'||state.modal==='shop') { let s=state.shops.find(x=>x.id===(state.modal==='store'?state.merchantId:edit)); title='แก้ไขข้อมูลร้านอาหาร'; body=`${field('name','ชื่อร้านอาหาร',s.name)}<div class="form-grid">${field('phone','เบอร์โทรศัพท์ร้าน',s.phone,'tel')}${field('hours','เวลาเปิด–ปิด',s.hours)}</div>${field('address','ที่อยู่ร้าน',s.address)}${field('bank','บัญชีธนาคาร / พร้อมเพย์',s.bank)}<label class="field"><span>สถานะร้าน</span><select name="status">${options(state.role==='admin'?['เปิดให้บริการ','ปิดชั่วคราว','ปิดร้าน','ระงับ']:[s.status,...['เปิดให้บริการ','ปิดชั่วคราว','ปิดร้าน'].filter(x=>x!==s.status)],s.status)}</select></label>`; body+=avatarPicker(s.avatar); }
  if(state.modal==='customer') { let c=state.customers.find(x=>x.id===edit); title=c?'แก้ไขข้อมูลลูกค้า':'เพิ่มลูกค้า'; body=`${field('id','รหัสลูกค้า',c?.id||nextId(state.customers,'C'))}${field('name','ชื่อ–นามสกุล',c?.name)}${field('phone','เบอร์โทรศัพท์',c?.phone,'tel')}${field('email','อีเมล',c?.email,'email')}`; body+=avatarPicker(c?.avatar); }
  if(state.modal==='order') { let o=state.orders.find(x=>x.id===edit); title=`ปรับสถานะ ${o.id}`; body=`<div class="info-strip">${esc(orderCustomer(o))} · ${esc(orderShop(o))} · ${money(o.total)}</div><label class="field"><span>สถานะคำสั่งซื้อ</span><select name="status">${options(orderStates(o,state.role),o.status)}</select></label><p class="modal-note">อัปเดตเฉพาะข้อมูลในหน้านี้</p>`; }
  if(state.modal==='cancel') { let o=state.orders.find(x=>x.id===edit); title=state.role==='admin'?'ยืนยันการยกเลิกคำสั่งซื้อ':'ยืนยันการยกเลิก'; body=`<p>ต้องการยกเลิกคำสั่งซื้อ <b>${esc(o.id)}</b> ที่สั่งเมื่อ ${orderDate(o.created)} ใช่หรือไม่?</p>${o.paymentStatus==='ชำระเงินสำเร็จ'?'<div class="info-note">ระบบจะบันทึกสถานะเป็น “รอคืนเงิน” เพื่อให้ดำเนินการคืนเงินต่อ</div>':''}`; }

  if(state.modal==='detail'||state.modal==='payment') {const orders=state.orders.filter(x=>x.id===edit||(state.modal==='payment'&&x.batchId===edit));title=state.modal==='payment'?'ชำระเงิน':`รายละเอียด ${orders[0].id}`;wide=orders.length>1;const combined=Math.round(orders.reduce((sum,o)=>sum+o.total,0)*100)/100;body=(orders.length>1?`<div class="checkout-summary"><b>ชำระรวม ${orders.length} ร้าน · ${money(combined)}</b><p>แยกออเดอร์ต่อร้าน ค่าส่งร้านละ ฿25 รวม ${money(orders.length*25)}</p></div>`:'')+orders.map(o=>`<section class="checkout-shop">${orders.length>1?`<h3>${esc(orderShop(o))}</h3>`:''}${orderDetails(o)}</section>`).join('')+(state.modal==='payment'?`<div class="payment-actions"><button type="button" class="primary" data-pay-success="${edit}">ชำระสำเร็จ</button><button type="button" class="outline" data-pay-fail="${edit}">ชำระไม่สำเร็จ</button><button type="button" class="text-danger" data-pay-cancel="${edit}">ยกเลิกการชำระเงิน</button></div>`:''); }
  if(state.modal==='review') { const s=state.shops.find(x=>x.id===edit);title='ตรวจสอบและอนุมัติร้านอาหาร';body=`<div class="details"><div><span>รหัสร้าน</span><b>R00${s.id}</b></div><div><span>ชื่อร้าน</span><b>${esc(s.name)}</b></div><div><span>เบอร์โทรศัพท์</span><b>${esc(s.phone)}</b></div><div><span>ที่อยู่</span><b>${esc(s.address)}</b></div><div><span>บัญชีรับเงิน</span><b>${esc(s.bank)}</b></div><div><span>เวลาเปิด–ปิด</span><b>${esc(s.hours)}</b></div></div><label class="field"><span>ผลการตรวจสอบ</span><select name="approval">${options(['รออนุมัติ','อนุมัติแล้ว','ไม่อนุมัติ'],s.approval)}</select></label>`; }
  if(state.modal==='delete') { title='ยืนยันการลบข้อมูล';body=`<p>${esc(state.deleteLabel)}</p><div class="info-note">ลบเฉพาะข้อมูล ประวัติคำสั่งซื้อเดิมยังคงอยู่</div>`; }
  const form=`<form id="modal-form" class="modal-body" >${body}<p id="form-error" class="form-error" role="alert" hidden></p><div class="modal-actions"><button type="button" class="outline" data-action="close-modal">กลับ</button>${['detail','payment'].includes(state.modal)?'':`<button type="submit" class="primary">${state.modal==='cancel'?'ยืนยันการยกเลิก':state.modal==='delete'?'ยืนยันการลบ':state.modal==='login'?'เข้าสู่ระบบ':state.modal==='register'?(state.role==='merchant'?'สมัครร้านอาหาร':'สมัครสมาชิก'):'บันทึกข้อมูล'}</button>`}</div></form>`;
  if(standalone)return `<div class="auth-page"><header class="auth-top"><a href="/" data-action="close-modal"><img src="assets/gripfood-logo.png" alt="Grip Food"></a><a href="/" data-action="close-modal">← กลับหน้าหลัก</a></header><main class="auth-layout"><section class="auth-art"><span class="eyebrow">DELIVERY, MADE DELIGHTFUL</span><h2>ความอร่อย<br>ส่งตรงถึงคุณ</h2>${mascot()}<p>อาหารจากร้านโปรด พร้อมส่งทุกวัน</p></section><section class="auth-card" aria-label="${esc(title)}"><span class="eyebrow">GRIP FOOD · ${roles[state.role]}</span><h1>${esc(title)}</h1>${form}<p class="auth-switch">${state.modal==='login'?`ยังไม่มีบัญชี? <a href="/register${state.role==='customer'?'':`?role=${state.role}`}" data-modal="register">สมัครสมาชิก</a>`:`มีบัญชีอยู่แล้ว? <a href="/login${state.role==='customer'?'':`?role=${state.role}`}" data-modal="login">เข้าสู่ระบบ</a>`}</p></section></main></div>`;
  return `<div class="modal-backdrop" data-action="close-modal"></div><div class="modal-dialog ${wide?'wide':''}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="modal-head"><div><span class="eyebrow">GRIP FOOD</span><h2>${esc(title)}</h2></div><button class="close" data-action="close-modal" aria-label="ปิด">×</button></div>${form}</div>`;
}
function authRoute(path){return /^\/(login|register)\/?$/.exec(path)?.[1]||'';}
function closeAuth(){if(state.authPage){state.authPage='';if(typeof window!=='undefined')window.history.pushState({},'', '/');}}
function readAuthRoute(){state.authPage=authRoute(window.location.pathname);state.modal=state.authPage;const role=new URLSearchParams(window.location.search).get('role');if(state.authPage)state.role=Object.hasOwn(roles,role)?role:'customer';render();topOfPage();}
function render() { $('#app').innerHTML=state.authPage?modal(true):layout();if(typeof document!=='undefined')document.title=state.authPage?`${state.authPage==='login'?'เข้าสู่ระบบ':'สมัครสมาชิก'} · Grip Food`:'Grip Food Delivery'; }
function openModal(name,id=null) { if(['login','register'].includes(name)){state.authPage=name;state.cartOpen=false;if(typeof window!=='undefined')window.history.pushState({},'',`/${name}${state.role==='customer'?'':`?role=${state.role}`}`);} state.modal=name;state.editId=id;render();if(state.authPage)topOfPage();document.querySelector('.modal-dialog input,.modal-dialog select,.modal-dialog button')?.focus(); }
function orderDetails(o) {
 return `<div class="details"><div><span>รหัสคำสั่งซื้อ</span><b>${esc(o.id)}</b></div><div><span>ลูกค้า / ร้านอาหาร</span><b>${esc(orderCustomer(o))}<br>${esc(orderShop(o))}</b></div><div><span>สั่งเมื่อ</span><b>${orderDate(o.created)}</b></div></div>${orderItems(o)}${orderTotals(o)}<div class="details"><div><span>ที่อยู่จัดส่ง</span><b>${esc(o.address)}</b></div><div><span>รายการชำระเงิน</span><b>${esc(o.paymentId)}</b></div><div><span>วิธีการชำระเงิน / ผู้รับ</span><b>${esc(o.payment)} / แพลตฟอร์ม Grip Food</b></div><div><span>สถานะการชำระเงิน</span><b>${esc(o.paymentStatus)}</b></div><div><span>วันและเวลาชำระเงิน</span><b>${o.paidAt?orderDate(o.paidAt):'ยังไม่ชำระเงิน'}</b></div><div><span>สถานะคำสั่งซื้อ</span><b>${esc(o.status)}</b></div></div>`;
}
function cancelOrder(o) {
  setOrderStatus(o,'ยกเลิกแล้ว');o.paymentStatus=o.paymentStatus==='ชำระเงินสำเร็จ'?'รอคืนเงิน':'ยกเลิก';o.paymentUpdatedAt=new Date().toISOString();
}
function paymentResult(id,result) {
  const orders=state.orders.filter(x=>(x.id===id||x.batchId===id)&&x.status!=='ยกเลิกแล้ว'&&x.paymentStatus!=='ชำระเงินสำเร็จ');
  if(!orders.length)return;
  orders.forEach(o=>{o.paymentUpdatedAt=new Date().toISOString();if(result==='success'){o.paymentStatus='ชำระเงินสำเร็จ';o.paidAt=o.paymentUpdatedAt;setOrderStatus(o,'รอร้านยืนยัน');}if(result==='fail'){o.paymentStatus='ชำระเงินไม่สำเร็จ';setOrderStatus(o,'รอชำระเงิน');}if(result==='cancel')cancelOrder(o);});
  state.modal='';state.page=result==='fail'?'payment':'orders';state.activePaymentId=result==='fail'?id:null;state.search='';state.orderDate='';notify(`ผลชำระเงิน: ${orders[0].paymentStatus}${orders.length>1?` · ${orders.length} ร้าน`:''}`);topOfPage();
}
function requestDelete(kind,id,label) {state.deleteKind=kind;state.deleteLabel=label;openModal('delete',id);}
function changeCart(id,delta) {
  const menu=state.menus.find(m=>m.id===Number(id));
  if(!menu||!Number.isInteger(delta)) return;
  if(delta>0) {
    if(!availableMenu(menu)) return notify('เมนูหรือร้านอาหารนี้ไม่พร้อมขาย');
  }
  const qty=Math.max(0,(state.cart[id]||0)+delta);
  if(qty) state.cart[id]=qty; else delete state.cart[id];
  if(delta>0) state.cartOpen=true;
  render();
}
async function saveModal(form) {
  const data=Object.fromEntries(new FormData(form)),name=state.modal,id=state.editId;
  ['id','name','phone','email','address','bank','hours'].forEach(k=>{if(typeof data[k]==='string')data[k]=data[k].trim();});
  if(data.email)data.email=data.email.toLowerCase();
  if(name==='login') {
    const email=accountEmail();
    if(data.email!==email||data.password!=='GripFood123')return formError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    closeAuth();state.modal='';return notify('เข้าสู่ระบบสำเร็จ');
  }
  if(name==='register'&&state.role==='merchant') {
    if(!data.name||!/^0\d{8,9}$/.test(normalizePhone(data.phone))||!data.address||!data.bank||!data.hours)return formError('กรอกข้อมูลร้านให้ครบ และเบอร์โทร 9–10 หลัก');
    if(state.shops.some(s=>normalizePhone(s.phone)===normalizePhone(data.phone)))return formError('เบอร์โทรศัพท์ร้านนี้มีอยู่แล้ว');
    const newId=Math.max(0,...state.shops.map(s=>s.id))+1;state.shops.push({id:newId,name:data.name,type:'ร้านใหม่',phone:data.phone,address:data.address,bank:data.bank,hours:data.hours,status:data.status||'ปิดชั่วคราว',approval:'รออนุมัติ',color:'mint',avatar:validAvatar(data.avatar,'cooking')});state.merchantId=newId;state.page='store';
  }
  if(name==='profile'||name==='customer'||(name==='register'&&state.role==='customer')) {
    if(name==='register'){data.id=nextId(state.customers,'C');if(String(data.password||'').length<8)return formError('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร');}
    const original=name==='profile'?state.customerId:id,error=customerError(data,original);
    if(error)return formError(error);
    const c=state.customers.find(x=>x.id===original),values={id:data.id,name:data.name,phone:data.phone,email:data.email,avatar:validAvatar(data.avatar,c?.avatar||'delivered')};
    if(c){Object.assign(c,values);state.orders.forEach(o=>{if(o.customerId===original)o.customerId=data.id;});if(state.customerId===original)state.customerId=data.id;}
    else{state.customers.push(values);if(name==='register'){selectCustomer(data.id);state.page='account';}}
  }
  if(name==='address') {
    if(!data.address)return formError('กรอกที่อยู่จัดส่ง');
    if(state.addresses.some((a,i)=>i!==id&&a===data.address))return formError('ที่อยู่นี้มีอยู่แล้ว');
    if(id===null){state.addresses.push(data.address);state.address=data.address;}else{if(state.address===state.addresses[id])state.address=data.address;state.addresses[id]=data.address;}const c=state.customers.find(x=>x.id===state.customerId);if(c)c.selectedAddress=state.address;
  }
  if(name==='menu') {
    if(!data.name||!Number.isFinite(Number(data.price))||Number(data.price)<=0)return formError('กรอกชื่อเมนูและราคามากกว่า 0');
    const file=form.querySelector('[name=image]')?.files[0];
    if(file?.size){if(!file.type.startsWith('image/')||file.size>2_000_000)return formError('เลือกไฟล์ภาพขนาดไม่เกิน 2 MB');try{data.image=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});}catch{return formError('อ่านไฟล์ภาพไม่สำเร็จ กรุณาเลือกใหม่');}}
    else delete data.image;
    const m=state.menus.find(x=>x.id===id),values={name:data.name,category:data.category,price:Number(data.price),photo:Math.max(0,Math.min(5,Number(data.photo)||0)),description:data.description,available:!!data.available};
    if(m)Object.assign(m,values,{image:data.image||m.image});else state.menus.push({id:Math.max(0,...state.menus.map(x=>x.id))+1,shopId:state.merchantId,...values,color:'butter',image:data.image||null});
  }
  if(name==='store'||name==='shop') {
    const s=state.shops.find(x=>x.id===(name==='store'?state.merchantId:id));
    if(!data.name||!/^0\d{8,9}$/.test(normalizePhone(data.phone))||!data.address||!data.bank||!data.hours)return formError('กรอกข้อมูลร้านให้ครบและเบอร์โทร 9–10 หลัก');
    if(state.role==='merchant'&&s.status==='ระงับ'&&data.status!=='ระงับ')return formError('ร้านถูกระงับ กรุณาติดต่อผู้ดูแลระบบ');
    Object.assign(s,{name:data.name,phone:data.phone,hours:data.hours,address:data.address,bank:data.bank,status:data.status,avatar:validAvatar(data.avatar,s.avatar||'cooking')});
  }
  if(name==='review'){const s=state.shops.find(x=>x.id===id);s.approval=data.approval;if(data.approval!=='อนุมัติแล้ว')s.status='ปิดชั่วคราว';}
  if(name==='order') {const o=state.orders.find(x=>x.id===id);if(!orderStates(o,state.role).includes(data.status))return formError('ไม่สามารถเปลี่ยนสถานะนี้ได้');if(data.status==='ยกเลิกแล้ว')cancelOrder(o);else setOrderStatus(o,data.status);}
  if(name==='cancel'){const o=state.orders.find(x=>x.id===id);if(!o||!canCancel(o.status))return formError('คำสั่งซื้ออยู่ในขั้นตอนจัดส่งแล้ว');cancelOrder(o);}
  if(name==='delete') {
    if(state.deleteKind==='menu'){state.menus=state.menus.filter(x=>x.id!==id);delete state.cart[id];}
    if(state.deleteKind==='customer'){state.customers=state.customers.filter(x=>x.id!==id);if(state.customerId===id)selectCustomer(state.customers[0]?.id||null);}
    if(state.deleteKind==='shop'){state.shops=state.shops.filter(x=>x.id!==id);state.menus.filter(m=>m.shopId===id).forEach(m=>delete state.cart[m.id]);state.menus=state.menus.filter(m=>m.shopId!==id);if(state.merchantId===id)state.merchantId=state.shops[0]?.id||null;}
  }
  if(name==='register')closeAuth();
  state.modal='';state.editId=null;notify(name==='register'?'สมัครสำเร็จ':name==='cancel'?'ยกเลิกคำสั่งซื้อแล้ว':name==='delete'?'ลบข้อมูลแล้ว':name==='profile'&&data.password?'บันทึกข้อมูลแล้ว':'บันทึกข้อมูลเรียบร้อย');
}
function checkout() {
  const entries=Object.entries(state.cart).filter(([,q])=>q>0);
  if(!entries.length)return notify('ตะกร้ายังว่าง');
  if(!state.customerId)return openModal('register');
  const menus=entries.map(([id])=>state.menus.find(m=>m.id===Number(id)));
  if(menus.some(m=>!m||!availableMenu(m)))return notify('มีเมนูหรือร้านที่ไม่พร้อมขาย กรุณาลบออกจากตะกร้า');
  if(!state.address)return notify('เลือกที่อยู่จัดส่งก่อน');
  state.cartOpen=false;state.page='checkout';render();topOfPage();
}
function placeOrder() {
  const entries=Object.entries(state.cart).filter(([,q])=>q>0);
  if(!entries.length)return notify('ตะกร้ายังว่าง');
  const menus=entries.map(([id])=>state.menus.find(m=>m.id===Number(id)));
  if(menus.some(m=>!m||!availableMenu(m)))return notify('มีเมนูหรือร้านที่ไม่พร้อมขาย กรุณากลับไปตรวจตะกร้า');
  if(!state.address)return notify('เลือกที่อยู่จัดส่งก่อน');
  const groups=cartGroups(state.cart,state.menus),created=new Date().toISOString(),idDate=created.slice(2,10).replaceAll('-',''),firstNumber=state.orders.length+1,batchId=`CO-${idDate}-${String(firstNumber).padStart(3,'0')}`;
  const orders=groups.map((g,index)=>{const id=`GF-${idDate}-${String(firstNumber+index).padStart(3,'0')}`;return {id,batchId,customerId:state.customerId,customerName:customerName(state.customerId),shopId:g.shopId,shopName:shopName(g.shopId),items:g.items,subtotal:g.subtotal,delivery:g.delivery,discount:0,total:g.total,address:state.address,payment:state.payment,paymentId:`PAY-${idDate}-${String(firstNumber).padStart(3,'0')}`,paymentStatus:'รอชำระเงิน',paidAt:null,status:'รอชำระเงิน',created,history:[{status:'รอชำระเงิน',at:created}]};});
  state.orders.unshift(...orders);state.cart={};state.cartOpen=false;state.page='payment';state.activePaymentId=batchId;state.search='';state.orderDate='';render();topOfPage();
}
if(typeof document!=='undefined') {
document.addEventListener('click', e => {
  const t=e.target.closest('button,a,[data-action]'); if(!t) return;
  if(t.matches('a')) e.preventDefault();
  if(t.dataset.role) return setRole(t.dataset.role);
  if(t.dataset.page) {resetPreview();state.page=t.dataset.page;state.search='';state.orderDate='';state.cartOpen=false;render();topOfPage();return;}
  if(t.dataset.category) {state.category=t.dataset.category;return render();}
  if(t.dataset.openMenu){const m=state.menus.find(m=>m.id===Number(t.dataset.openMenu));if(!m)return;state.restaurantId=m.shopId;state.selectedMenuId=m.id;state.page='restaurant';state.cartOpen=false;render();topOfPage();return;}
  if(t.dataset.add) return changeCart(t.dataset.add,1);
  if(t.dataset.qty) return changeCart(t.dataset.qty,Number(t.dataset.delta));
  if(t.dataset.remove) return changeCart(t.dataset.remove,-(state.cart[t.dataset.remove]||0));
  if(t.dataset.modal) return openModal(t.dataset.modal);
  if(t.dataset.track){resetPreview();state.trackId=t.dataset.track;state.page='tracking';state.cartOpen=false;render();topOfPage();return;}
  if(t.dataset.detail)return openModal('detail',t.dataset.detail);
  if(t.dataset.payment){state.activePaymentId=t.dataset.payment;state.page='payment';state.modal='';render();topOfPage();return;}
  if(t.dataset.paySuccess)return paymentResult(t.dataset.paySuccess,'success');
  if(t.dataset.payFail)return paymentResult(t.dataset.payFail,'fail');
  if(t.dataset.payCancel)return paymentResult(t.dataset.payCancel,'cancel');
  if(t.dataset.review)return openModal('review',Number(t.dataset.review));
  if(t.dataset.editAddress!==undefined)return openModal('address',Number(t.dataset.editAddress));
  if(t.dataset.selectAddress!==undefined){state.address=state.addresses[Number(t.dataset.selectAddress)];const c=state.customers.find(x=>x.id===state.customerId);if(c)c.selectedAddress=state.address;return notify('เลือกที่อยู่จัดส่งแล้ว');}
  if(t.dataset.deleteShop)return requestDelete('shop',Number(t.dataset.deleteShop),'ต้องการลบร้านอาหารนี้หรือไม่?');
  if(t.dataset.editMenu) return openModal('menu',Number(t.dataset.editMenu));
  if(t.dataset.editCustomer) return openModal('customer',t.dataset.editCustomer);
  if(t.dataset.editShop) return openModal('shop',Number(t.dataset.editShop));
  if(t.dataset.editOrder) return openModal('order',t.dataset.editOrder);
  if(t.dataset.cancel) return openModal('cancel',t.dataset.cancel);
  if(t.dataset.deleteMenu)return requestDelete('menu',Number(t.dataset.deleteMenu),'ต้องการลบเมนูนี้หรือไม่?');
  if(t.dataset.deleteCustomer)return requestDelete('customer',t.dataset.deleteCustomer,'ต้องการลบข้อมูลลูกค้านี้หรือไม่?');
  if(t.dataset.approve)return openModal('review',Number(t.dataset.approve));
  if(t.dataset.suspend) {let s=state.shops.find(x=>x.id===Number(t.dataset.suspend));if(!s||s.approval!=='อนุมัติแล้ว')return;if(s.status==='ระงับ')s.status='เปิดให้บริการ';else s.status='ระงับ';return notify('อัปเดตสถานะร้านแล้ว');}
  if(t.dataset.previewStatus){state.timelinePlaying=false;previewStatus(t.dataset.previewStatus);render();showTrackingAnimation();return;}
  if(t.dataset.action==='actual-status'){resetPreview();render();showTrackingAnimation();return;}
  if(t.dataset.action==='play-timeline'){state.timelinePlaying=!state.timelinePlaying;if(state.timelinePlaying)previewStatus('รอร้านยืนยัน');render();if(state.timelinePlaying)showTrackingAnimation();tickTracking();return;}
  if(t.dataset.action==='pause-route'){const map=$('.gps-card');if(state.routePaused===null){state.routePaused=routeProgress(Number(map.dataset.routeStart));state.timelinePlaying=false;}else{const start=Date.now()-state.routePaused*routeDuration;if(state.previewStatus)state.previewStartedAt=start;else state.orders.find(o=>o.id===state.trackId).deliveryStartedAt=start;state.routePaused=null;}render();tickTracking();return;}
  if(t.dataset.action==='restart-route'){if(state.previewStatus)state.previewStartedAt=Date.now();else state.orders.find(o=>o.id===state.trackId).deliveryStartedAt=Date.now();state.routePaused=null;render();return;}
  if(t.dataset.action==='toggle-animation'){state.animateMascots=!state.animateMascots;return render();}
  if(t.dataset.action==='clear-orders'){state.search='';state.orderDate='';return render();}
  if(t.dataset.action==='cart') {state.cartOpen=!state.cartOpen;return render();}
  if(t.dataset.action==='checkout') return checkout();
  if(t.dataset.action==='place-order') return placeOrder();
  if(t.dataset.action==='close-modal') {closeAuth();state.modal='';return render();}
  if(t.dataset.action==='login') return openModal('login');
  if(t.dataset.action==='home') {state.page=state.role==='customer'?'explore':'dashboard';render();topOfPage();return;}
  if(t.dataset.action==='clear-query') {state.query='';return render();}
});
document.addEventListener('input', e => {
  if(state.modal==='register'&&state.role==='customer'&&e.target.closest?.('#modal-form'))$('#form-error').hidden=true;
  if(e.target.id==='menu-search') { const pos=e.target.selectionStart;state.query=e.target.value;render();const input=$('#menu-search');input.focus();input.setSelectionRange(pos,pos); }
  if(e.target.id==='table-search') { const pos=e.target.selectionStart;state.search=e.target.value;render();const input=$('#table-search');input.focus();input.setSelectionRange(pos,pos); }
});
document.addEventListener('change', e => {if(e.target.id==='order-date'){state.orderDate=e.target.value;return render();}if(e.target.id==='checkout-address'){state.address=e.target.value;const c=state.customers.find(x=>x.id===state.customerId);if(c)c.selectedAddress=state.address;return render();}if(e.target.id==='checkout-payment')state.payment=e.target.value;});
document.addEventListener('submit', e => {if(e.target.getAttribute('id')==='modal-form'){e.preventDefault();saveModal(e.target);}});
document.addEventListener('keydown', e => {if(e.key==='Tab'){const panel=document.querySelector('.modal-dialog,.cart-panel');if(panel){const nodes=[...panel.querySelectorAll('button:not(:disabled),input,select,textarea')];const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}if(e.key==='Escape'&&(state.modal||state.cartOpen)){closeAuth();state.modal='';state.cartOpen=false;render();}});
if(typeof window!=='undefined'){window.addEventListener('popstate',readAuthRoute);readAuthRoute();}
if(typeof document!=='undefined'){render();setInterval(tickTracking,1000);}
}
if(typeof module!=='undefined') module.exports={authRoute,cartCount,cartSubtotal,cartGroups,canCancel,customerError,orderStates,normalizePhone,nextId,tracking,orderItems,orderTotals,setOrderStatus,routePoint,routeProgress,statusMascot,validAvatar,frogAvatar};


