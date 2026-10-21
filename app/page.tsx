 "use client";
import { useMemo, useState } from "react";

const services = [
  ["🧹","Home Cleaning","Regular, deep, kitchen, bathroom, move-in and post-renovation cleaning."],
  ["👕","Laundry & Fabric Care","Wash, fold, ironing, duvets, curtains, rugs and stain treatment."],
  ["🌿","Compound & Outdoor","Yards, compounds, parking areas, pressure washing and event cleanup."],
  ["🚗","Car Care","Exterior wash, interior cleaning and full detailing."],
  ["📦","Home Organization","Wardrobes, kitchens, decluttering, packing and unpacking."],
  ["🔧","Home Services","Plumbing, electrical, AC, generator, pest control and tank cleaning."]
];

export default function Home() {
  const [service,setService]=useState("Home Cleaning");
  const [city,setCity]=useState("Lagos");
  const [urgent,setUrgent]=useState(false);
  const [rooms,setRooms]=useState(2);
  const [baths,setBaths]=useState(1);
  const [size,setSize]=useState("Standard");
  const [date,setDate]=useState("");
  const [sent,setSent]=useState(false);

  const estimate=useMemo(()=>{
    if(service==="Home Cleaning"){
      const base=size==="Large"?18000:size==="Small"?9000:13000;
      return base+(rooms*2500)+(baths*1200)+(urgent?4000:0);
    }
    if(service==="Laundry & Fabric Care") return 7000+(urgent?3000:0);
    if(service==="Compound & Outdoor") return 14000+(size==="Large"?7000:0);
    if(service==="Car Care") return 8000+(size==="Large"?7000:0);
    if(service==="Home Organization") return 12000;
    return 10000;
  },[service,city,urgent,rooms,baths,size]);

  const whatsapp = "https://wa.me/2340000000000";
  return <main>
    <header className="nav">
      <a className="brand" href="#"><span className="mark">E</span><span>ENOCH’s <b>HOME CLEANUP</b></span></a>
      <nav><a href="#services">Services</a><a href="#how">How it works</a><a href="#estimate">Get estimate</a></nav>
      <a className="navCta" href="#estimate">Book a service</a>
    </header>

    <section className="hero">
      <div className="heroText">
        <div className="eyebrow">HOME SERVICES • LAGOS • IBADAN • ABUJA</div>
        <h1>A cleaner home.<br/><em>A better day.</em></h1>
        <p>Professional home cleaning, laundry, outdoor care, car care and everyday home services — arranged around you.</p>
        <div className="actions"><a className="primary" href="#estimate">Get my estimate →</a><a className="secondary" href={whatsapp}>WhatsApp us</a></div>
        <div className="trust"><span>✓ Real service requests</span><span>✓ Flexible scheduling</span><span>✓ Trusted workers</span></div>
      </div>
      <div className="heroCard">
        <div className="cardTop"><span>QUICK BOOKING</span><strong>01</strong></div>
        <div className="miniIcon">✦</div>
        <h3>Tell us what you need.</h3>
        <p>Answer a few questions and get a starting estimate before you book.</p>
        <a href="#estimate" className="cardButton">Start in 60 seconds →</a>
      </div>
    </section>

    <section className="ticker"><span>ONE TEAM FOR THE HOME</span><span>•</span><span>CLEAN</span><span>•</span><span>CARE</span><span>•</span><span>ORGANIZE</span><span>•</span><span>MAINTAIN</span></section>

    <section id="services" className="section">
      <div className="sectionHead"><div><div className="eyebrow">WHAT WE DO</div><h2>More than cleaning.</h2></div><p>From a quick tidy-up to a full home reset, choose the service that fits your day.</p></div>
      <div className="serviceGrid">{services.map(([icon,title,desc])=><button key={title} onClick={()=>{setService(title);document.getElementById("estimate")?.scrollIntoView({behavior:"smooth"})}} className="service">
        <span className="serviceIcon">{icon}</span><h3>{title}</h3><p>{desc}</p><span className="arrow">Explore →</span>
      </button>)}</div>
    </section>

    <section id="how" className="darkSection">
      <div className="sectionHead light"><div><div className="eyebrow">HOW IT WORKS</div><h2>Simple from start to finish.</h2></div></div>
      <div className="steps"><div><b>01</b><h3>Choose a service</h3><p>Pick what you need and tell us a little about the job.</p></div><div><b>02</b><h3>Get an estimate</h3><p>Your answers help us calculate a useful starting price.</p></div><div><b>03</b><h3>Pick your time</h3><p>Choose your city, preferred date and whether it is urgent.</p></div><div><b>04</b><h3>We arrange the service</h3><p>A worker is assigned and your booking is confirmed.</p></div></div>
    </section>

    <section id="estimate" className="estimateWrap">
      <div className="estimateInfo"><div className="eyebrow">START A REQUEST</div><h2>Tell us what your home needs.</h2><p>No confusing price list. Answer the questions and we’ll give you a starting estimate.</p><div className="promise"><span>✓</span><div><b>Need someone now?</b><br/>Call or WhatsApp for immediate service requests.</div></div></div>
      <div className="formCard">
        {sent ? <div className="success"><div className="successIcon">✓</div><h3>Request received.</h3><p>Your request is prepared. For a real booking, contact us directly while online payments and worker assignment are being connected.</p><a className="primary full" href={whatsapp}>Continue on WhatsApp →</a><button className="reset" onClick={()=>setSent(false)}>Make another request</button></div> :
        <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}><label>What do you need?<select value={service} onChange={e=>setService(e.target.value)}>{services.map(x=><option key={x[1]}>{x[1]}</option>)}</select></label>
        <div className="two"><label>City<select value={city} onChange={e=>setCity(e.target.value)}><option>Lagos</option><option>Ibadan</option><option>Abuja</option></select></label><label>Home / job size<select value={size} onChange={e=>setSize(e.target.value)}><option>Small</option><option>Standard</option><option>Large</option></select></label></div>
        {service==="Home Cleaning"&&<div className="two"><label>Bedrooms<input type="number" min="0" max="20" value={rooms} onChange={e=>setRooms(+e.target.value)}/></label><label>Bathrooms<input type="number" min="0" max="20" value={baths} onChange={e=>setBaths(+e.target.value)}/></label></div>}
        <label>Preferred date<input type="date" value={date} onChange={e=>setDate(e.target.value)} required/></label>
        <label className="urgent"><input type="checkbox" checked={urgent} onChange={e=>setUrgent(e.target.checked)}/><span><b>I need someone urgently</b><small>We’ll prioritize your request where availability allows.</small></span></label>
        <div className="estimate"><span>Starting estimate</span><strong>₦{estimate.toLocaleString()}</strong><small>Final price may change after job details are confirmed.</small></div>
        <button className="primary full" type="submit">Request this service →</button></form>}
      </div>
    </section>

    <section className="urgentBand"><div><div className="eyebrow">CAN’T WAIT?</div><h2>Need someone now?</h2><p>For urgent requests, contact the team directly.</p></div><div className="actions"><a className="primary" href="tel:+2340000000000">Call now</a><a className="secondary lightBtn" href={whatsapp}>WhatsApp now</a></div></section>

    <footer><div><a className="brand" href="#"><span className="mark">E</span><span>ENOCH’s <b>HOME CLEANUP</b></span></a><p>Home services made simpler.</p></div><div className="footLinks"><a href="#services">Services</a><a href="#how">How it works</a><a href="#estimate">Book</a></div><small>© 2026 ENOCH’s HOME CLEANUP</small></footer>
  </main>
}