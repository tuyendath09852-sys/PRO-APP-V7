import { useState } from 'react'
import {
  ArrowLeft, ArrowRight, Smartphone, Apple, Search, Shield,
  Zap, SlidersHorizontal, CheckCircle2, AlertCircle, RotateCcw
} from 'lucide-react'

const DEFAULT_SENSITIVITY = [
  { id: 'look', label: 'Nhìn xung quanh', value: 190 },
  { id: 'red-dot', label: 'Ống ngắm hồng tâm', value: 180 },
  { id: 'scope-2x', label: 'Ống ngắm 2x', value: 175 },
  { id: 'scope-4x', label: 'Ống ngắm 4x', value: 184 },
  { id: 'sniper', label: 'Ống ngắm súng ngắm', value: 159 },
  { id: 'free-camera', label: 'Nút camera tự do', value: 140 },
]

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const randomSensitivity = () => DEFAULT_SENSITIVITY.map(item => ({ ...item, value: randomInt(0, 200) }))

function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand-compact' : ''}`}>
      <div className="brand-mark"><Zap size={19} strokeWidth={2.6} /></div>
      <div className="brand-copy">
        <span>PRO<span className="accent"> APP</span></span>
        {!compact && <small>BOOST YOUR PERFORMANCE</small>}
      </div>
    </div>
  )
}

function CyberFigure() {
  return (
    <div className="hero-art" aria-label="Minh họa chiến binh cyberpunk" role="img">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-glow" />
      <svg className="cyber-figure" viewBox="0 0 360 480" aria-hidden="true">
        <defs>
          <linearGradient id="armor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1e8ff" />
            <stop offset=".28" stopColor="#9d67ff" />
            <stop offset=".66" stopColor="#39206d" />
            <stop offset="1" stopColor="#10101d" />
          </linearGradient>
          <linearGradient id="violet" x1="0" y1="0" x2="0.9" y2="1">
            <stop stopColor="#f4dfff" />
            <stop offset=".45" stopColor="#a855f7" />
            <stop offset="1" stopColor="#5b21b6" />
          </linearGradient>
          <filter id="neon"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M104 444 L124 350 L102 282 L126 210 L160 178 L218 182 L252 218 L271 300 L246 356 L267 444Z" fill="#11101f" stroke="#6d28d9" strokeWidth="3"/>
        <path d="M127 242 L93 272 L71 355 L91 366 L132 302Z" fill="url(#armor)" stroke="#bd8bff" strokeWidth="2"/>
        <path d="M231 239 L271 266 L302 338 L283 351 L247 302Z" fill="url(#armor)" stroke="#bd8bff" strokeWidth="2"/>
        <path d="M125 353 L111 444 L147 444 L170 356Z" fill="url(#armor)" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M190 357 L215 444 L251 444 L235 346Z" fill="url(#armor)" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M129 215 L149 185 L211 183 L238 214 L224 278 L180 306 L138 276Z" fill="url(#armor)" stroke="#d8b4fe" strokeWidth="2.5"/>
        <path d="M139 224 L165 211 L180 235 L165 267 L143 257Z" fill="#171126" stroke="#c084fc" strokeWidth="2"/>
        <path d="M220 222 L196 211 L181 235 L197 267 L218 255Z" fill="#171126" stroke="#c084fc" strokeWidth="2"/>
        <path d="M165 236 L195 236 L189 255 L171 255Z" fill="#d8b4fe" filter="url(#neon)"/>
        <path d="M144 174 L134 130 L154 81 L185 58 L223 79 L241 125 L224 177 L207 196 L161 194Z" fill="url(#armor)" stroke="#d8b4fe" strokeWidth="2.5"/>
        <path d="M134 130 L105 111 L122 75 L153 54 L177 67 L155 93 L151 128Z" fill="#2b174b" stroke="#a855f7" strokeWidth="2"/>
        <path d="M220 129 L241 95 L226 59 L203 46 L180 66 L207 95 L204 128Z" fill="#25133f" stroke="#a855f7" strokeWidth="2"/>
        <path d="M151 119 L177 108 L205 117 L211 144 L190 162 L163 155Z" fill="#090914" stroke="#c084fc" strokeWidth="2"/>
        <path d="M155 128 L176 124 L170 135 L156 137Z M204 128 L184 124 L190 135 L204 137Z" fill="#c4b5fd" filter="url(#neon)"/>
        <path d="M151 177 L179 194 L208 176 L220 206 L180 226 L139 204Z" fill="#201238" stroke="#a855f7" strokeWidth="2"/>
        <path d="M126 281 L151 299 L180 306 L210 296 L239 280 L232 321 L204 348 L157 348 L133 321Z" fill="#191126" stroke="#7c3aed" strokeWidth="2"/>
        <path d="M145 312 L177 326 L211 311 L204 338 L157 338Z" fill="#7e22ce" opacity=".8" filter="url(#neon)"/>
        <path d="M109 447 L145 447 L154 461 L99 461Z M216 447 L251 447 L267 461 L224 461Z" fill="#090914" stroke="#a855f7" strokeWidth="2"/>
        <path d="M111 283 L84 346 M246 281 L282 337 M150 188 L118 217 M211 189 L242 214" stroke="#e9d5ff" strokeWidth="2" opacity=".85"/>
        <path d="M84 358 L99 366 M282 350 L299 344 M137 300 L153 307 M207 307 L229 297" stroke="#22d3ee" strokeWidth="3" filter="url(#neon)"/>
      </svg>
      <div className="art-label"><span className="live-dot" /> SYSTEM ONLINE <span>•</span> V. 2.6</div>
    </div>
  )
}

function DeviceSelector({ onSelect }) {
  return (
    <div className="device-grid">
      <button className="device-card android-card" onClick={() => onSelect('android')}>
        <span className="device-icon"><Smartphone size={31} /></span>
        <span className="device-code">ADR <span className="card-arrow"><ArrowRight size={18}/></span></span>
        <span className="device-title">Android Device</span>
        <span className="device-desc">Tùy chỉnh thông số cho thiết bị Android</span>
        <span className="device-line" />
      </button>
      <button className="device-card ios-card" onClick={() => onSelect('ios')}>
        <span className="device-icon"><Apple size={31} /></span>
        <span className="device-code">IOS <span className="card-arrow"><ArrowRight size={18}/></span></span>
        <span className="device-title">iOS Device</span>
        <span className="device-desc">Thiết lập thông số cho iPhone và iPad</span>
        <span className="device-line" />
      </button>
    </div>
  )
}

function Home({ onSelect }) {
  return (
    <main className="home-layout">
      <section className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> NEXT-GEN CONFIGURATION</div>
        <h1>BOOST YOUR<br /><span>PERFORMANCE.</span></h1>
        <p className="hero-description">Tối ưu trải nghiệm của bạn. Tạo bộ thông số tham khảo theo thiết bị với giao diện điều khiển thế hệ mới.</p>
        <div className="hero-stats">
          <div><strong>02</strong><span>DEVICE MODES</span></div>
          <div><strong>06</strong><span>SENSITIVITY SLIDERS</span></div>
          <div><strong>100%</strong><span>YOUR CONTROL</span></div>
        </div>
        <div className="selector-heading"><span>01 / SELECT PLATFORM</span><span className="heading-rule" /></div>
        <DeviceSelector onSelect={onSelect} />
        <p className="fine-print"><Shield size={13}/> Thông số chỉ mang tính tham khảo, không tự thay đổi cài đặt trong trò chơi.</p>
      </section>
      <aside className="hero-visual">
        <div className="visual-topline"><span>PROTOCOL // P-06</span><span>SECURE INTERFACE</span></div>
        <CyberFigure />
        <div className="visual-bottom">
          <span className="visual-index">FIG. 01</span>
          <div><strong>CYBER SYSTEM</strong><small>PRECISION / CONTROL / SPEED</small></div>
          <div className="visual-bars"><i/><i/><i/><i/><i/></div>
        </div>
      </aside>
    </main>
  )
}

function SensitivityPanel({ values, onChange }) {
  const update = (id, value) => onChange(current => current.map(item => item.id === id ? { ...item, value: Math.max(0, Math.min(200, Number(value))) } : item))
  return (
    <section className="panel glass-panel">
      <div className="panel-heading">
        <div><span className="section-kicker">CONFIGURATION / 01</span><h2>Độ nhạy <span className="accent">Sensitivity</span></h2></div>
        <div className="panel-badge"><SlidersHorizontal size={15}/> 6 PARAMETERS</div>
      </div>
      <div className="sensitivity-list">
        {values.map((item, index) => (
          <div className="sensitivity-row" key={item.id}>
            <div className="sensitivity-label"><span className="row-index">0{index + 1}</span><label htmlFor={`range-${item.id}`}>{item.label}</label></div>
            <div className="sensitivity-control">
              <input id={`range-${item.id}`} aria-label={item.label} type="range" min="0" max="200" value={item.value} style={{ '--progress': `${item.value / 2}%` }} onChange={e => update(item.id, e.target.value)} />
              <div className="range-scale"><span>0</span><span>100</span><span>200</span></div>
            </div>
            <div className="value-control">
              <output>{item.value}</output>
              <button className="mini-button" aria-label={`Giảm ${item.label}`} onClick={() => update(item.id, item.value - 1)}>−</button>
              <button className="mini-button" aria-label={`Tăng ${item.label}`} onClick={() => update(item.id, item.value + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="panel-footer"><span><span className="live-dot"/> LIVE PREVIEW</span><span>RANGE: 0 — 200</span></div>
    </section>
  )
}

function Stepper({ label, value, min, max, onChange, suffix = '' }) {
  return (
    <div className="stepper-card">
      <div className="stepper-label">{label}</div>
      <div className="stepper-controls">
        <button className="step-button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Giảm ${label}`}>−</button>
        <div className="step-value"><strong>{value}</strong><span>{suffix || `MIN ${min} / MAX ${max}`}</span></div>
        <button className="step-button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`Tăng ${label}`}>+</button>
      </div>
      <div className="step-track"><span style={{ width: `${((value - min) / (max - min)) * 100}%` }} /></div>
    </div>
  )
}

function DeviceSearch({ platform, onSearch, busy, deviceName, setDeviceName, message }) {
  const isIOS = platform === 'ios'
  return (
    <section className="search-panel glass-panel">
      <div className="search-intro">
        <div className={`search-icon ${isIOS ? 'ios-color' : ''}`}>{isIOS ? <Apple size={22}/> : <Smartphone size={22}/>}</div>
        <div><span className="section-kicker">DEVICE SCANNER / 0{isIOS ? '3' : '2'}</span><h2>{isIOS ? 'iPhone / iPad' : 'Android Device'}</h2><p>Nhập tên thiết bị để tạo bộ thông số tham khảo.</p></div>
      </div>
      <form className="device-search-form" onSubmit={onSearch}>
        <label className="sr-only" htmlFor={`${platform}-device-name`}>Tên thiết bị</label>
        <div className="search-input-wrap"><Search size={18}/><input id={`${platform}-device-name`} value={deviceName} onChange={e => setDeviceName(e.target.value)} placeholder={isIOS ? 'Ví dụ: iPhone 15 Pro Max' : 'Ví dụ: Samsung Galaxy S24'} maxLength={70} /></div>
        <button className="primary-button" type="submit" disabled={busy}>{busy ? <><span className="spinner"/> ĐANG TÌM...</> : <><Search size={16}/> TÌM KIẾM THIẾT BỊ</>}</button>
      </form>
      {message && <div className={`status-message ${message.type}`} role="status">{message.type === 'success' ? <CheckCircle2 size={16}/> : <AlertCircle size={16}/>} {message.text}</div>}
      <div className="search-note"><Shield size={14}/> Tìm kiếm mô phỏng tại giao diện — không đọc dữ liệu thiết bị thật.</div>
    </section>
  )
}

function AndroidPanel({ onBack }) {
  const [deviceName, setDeviceName] = useState('')
  const [values, setValues] = useState(DEFAULT_SENSITIVITY)
  const [dpi, setDpi] = useState(420)
  const [pen, setPen] = useState(42)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(null)

  const search = (event) => {
    event.preventDefault()
    if (!deviceName.trim()) {
      setMessage({ type: 'error', text: 'Vui lòng nhập tên thiết bị trước khi tìm kiếm.' })
      return
    }
    setBusy(true)
    setMessage(null)
    window.setTimeout(() => {
      setValues(randomSensitivity())
      setDpi(randomInt(150, 550))
      setPen(randomInt(30, 55))
      setBusy(false)
      setMessage({ type: 'success', text: `Đã tạo bộ thông số tham khảo cho ${deviceName.trim()}.` })
    }, 850)
  }

  return (
    <main className="config-page">
      <div className="page-heading">
        <button className="back-button" onClick={onBack}><ArrowLeft size={17}/> QUAY LẠI</button>
        <div className="page-title"><span className="platform-pill android-pill"><Smartphone size={14}/> ADR / ANDROID</span><h1>DEVICE <span className="accent">CONFIG</span></h1><p>Bảng điều khiển thông số Android</p></div>
        <div className="connection-status"><span className="live-dot"/> SYSTEM READY</div>
      </div>
      <DeviceSearch platform="android" onSearch={search} busy={busy} deviceName={deviceName} setDeviceName={setDeviceName} message={message}/>
      <div className="config-grid">
        <SensitivityPanel values={values} onChange={setValues}/>
        <section className="extra-settings">
          <div className="extra-heading"><span className="section-kicker">ADVANCED / 02</span><h2>Thông số bổ sung</h2><p>Điều chỉnh thủ công trong giới hạn cho phép.</p></div>
          <Stepper label="DPI" value={dpi} min={150} max={550} onChange={setDpi}/>
          <Stepper label="BÚT" value={pen} min={30} max={55} onChange={setPen}/>
          <button className="reset-button" onClick={() => { setValues(DEFAULT_SENSITIVITY); setDpi(420); setPen(42); setMessage({ type: 'success', text: 'Đã khôi phục các giá trị mặc định.' }) }}><RotateCcw size={15}/> KHÔI PHỤC MẶC ĐỊNH</button>
        </section>
      </div>
      <p className="disclaimer">PRO APP tạo giá trị mô phỏng để bạn tham khảo. Website không truy cập hoặc thay đổi cài đặt Android hay Free Fire.</p>
    </main>
  )
}

function IOSPanel({ onBack }) {
  const [deviceName, setDeviceName] = useState('')
  const [values, setValues] = useState(DEFAULT_SENSITIVITY)
  const [pen, setPen] = useState(42)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(null)

  const search = (event) => {
    event.preventDefault()
    if (!deviceName.trim()) {
      setMessage({ type: 'error', text: 'Vui lòng nhập tên iPhone hoặc iPad trước khi tìm kiếm.' })
      return
    }
    setBusy(true)
    setMessage(null)
    window.setTimeout(() => {
      setValues(randomSensitivity())
      setPen(randomInt(30, 55))
      setBusy(false)
      setMessage({ type: 'success', text: `Đã tạo bộ thông số tham khảo cho ${deviceName.trim()}.` })
    }, 850)
  }

  return (
    <main className="config-page ios-page">
      <div className="page-heading">
        <button className="back-button" onClick={onBack}><ArrowLeft size={17}/> QUAY LẠI</button>
        <div className="page-title"><span className="platform-pill ios-pill"><Apple size={14}/> IOS / IPHONE + IPAD</span><h1>IOS <span className="ios-accent">CONFIG</span></h1><p>Bảng điều khiển thông số iOS</p></div>
        <div className="connection-status"><span className="live-dot ios-dot"/> SYSTEM READY</div>
      </div>
      <DeviceSearch platform="ios" onSearch={search} busy={busy} deviceName={deviceName} setDeviceName={setDeviceName} message={message}/>
      <div className="config-grid ios-config-grid">
        <SensitivityPanel values={values} onChange={setValues}/>
        <section className="extra-settings">
          <div className="extra-heading"><span className="section-kicker">ADVANCED / 03</span><h2>Thông số bổ sung</h2><p>Điều chỉnh BÚT trong giới hạn cho phép.</p></div>
          <Stepper label="BÚT" value={pen} min={30} max={55} onChange={setPen}/>
          <div className="ios-info-card"><Apple size={22}/><div><strong>iOS MODE</strong><span>Giao diện riêng cho iPhone và iPad.</span></div></div>
          <button className="reset-button" onClick={() => { setValues(DEFAULT_SENSITIVITY); setPen(42); setMessage({ type: 'success', text: 'Đã khôi phục các giá trị mặc định.' }) }}><RotateCcw size={15}/> KHÔI PHỤC MẶC ĐỊNH</button>
        </section>
      </div>
      <p className="disclaimer">PRO APP tạo giá trị mô phỏng để bạn tham khảo. Website không truy cập hoặc thay đổi cài đặt iOS hay Free Fire.</p>
    </main>
  )
}

export default function App() {
  const [screen, setScreen] = useState('home')
  const [transitioning, setTransitioning] = useState(false)
  const navigate = (next) => {
    setTransitioning(true)
    window.setTimeout(() => {
      setScreen(next)
      setTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 160)
  }

  return (
    <div className={`app-shell ${screen === 'ios' ? 'theme-ios' : ''} ${transitioning ? 'screen-transition' : ''}`}>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="topbar"><Brand/><div className="topbar-right"><span className="topbar-status"><span className="live-dot"/> ALL SYSTEMS NORMAL</span><span className="topbar-version">PRO / 2.6.0</span></div></header>
      {screen === 'home' && <Home onSelect={navigate}/>}
      {screen === 'android' && <AndroidPanel onBack={() => navigate('home')}/>}
      {screen === 'ios' && <IOSPanel onBack={() => navigate('home')}/>}
      <footer className="site-footer"><Brand compact/><span>© 2026 PRO APP <i/> BUILT FOR PRECISION</span><a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>BACK TO TOP ↑</a></footer>
    </div>
  )
}