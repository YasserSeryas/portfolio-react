import { motion } from 'framer-motion'
export function Experience(){
  const rows = [
    {date:'Déc 2023 – Présent', titre:'Développeur Front - Alternance', org:'Elab Fluxod'},
    {date:'2023', titre:'Stage Développement Web', org:'AKA Logistique et Transport'},
    {date:'2022', titre:'Stage Développement Web', org:'Accoord Nantes'},
  ]
  return (
    <section style={{padding:'96px 16px', background:'#F8FAFC'}} id="experience">
      <h2 style={{textAlign:'center'}}>Expérience</h2>
      <div style={{maxWidth:960, margin:'24px auto', display:'grid', gap:16}}>
        {rows.map((r,i)=> (
          <motion.div key={r.titre} initial={{opacity:0, y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:i*0.05}} style={{background:'#fff', borderRadius:12, padding:16, boxShadow:'0 6px 16px rgba(0,0,0,.08)'}}>
            <span style={{fontSize:12, opacity:.7}}>{r.date}</span>
            <h4 style={{margin:'4px 0 0'}}>{r.titre}</h4>
            <div style={{opacity:.8}}>{r.org}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
