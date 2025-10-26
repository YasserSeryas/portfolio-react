import { motion } from 'framer-motion'
export function Skills(){
  const items = [
    {label:'JavaScript ES6+', p:90},
    {label:'React / React Native', p:85},
    {label:'TypeScript', p:80},
    {label:'Node.js / Express', p:85},
  ]
  return (
    <section style={{padding:'96px 16px'}} id="skills">
      <h2 style={{textAlign:'center'}}>Compétences</h2>
      <div style={{maxWidth:900, margin:'24px auto', display:'grid', gap:16}}>
        {items.map((it,i)=> (
          <motion.div key={it.label} initial={{opacity:0, x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5, delay:i*0.05}} style={{background:'#fff', borderRadius:12, padding:16, boxShadow:'0 6px 16px rgba(0,0,0,.08)'}}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:8}}>
              <strong>{it.label}</strong>
              <span>{it.p}%</span>
            </div>
            <div style={{height:8, background:'rgba(0,0,0,.08)', borderRadius:999}}>
              <motion.div initial={{width:0}} whileInView={{width:`${it.p}%`}} viewport={{once:true}} transition={{duration:.8}} style={{height:'100%', background:'linear-gradient(90deg,#2563EB,#06B6D4)', borderRadius:999}} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
