import { motion } from 'framer-motion'
export function Projects(){
  const cards = [
    {title:'CMS Strapi', link:'https://github.com/YasserSeryas/Strapi'},
    {title:'Plateforme Formation', link:'https://github.com/YasserSeryas/FormationYoutube'},
    {title:'DevCloud Platform', link:'https://github.com/YasserSeryas/DevCloud'},
  ]
  return (
    <section style={{padding:'96px 16px'}} id="projects">
      <h2 style={{textAlign:'center'}}>Projets</h2>
      <div style={{maxWidth:1024, margin:'24px auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16}}>
        {cards.map((c,i)=> (
          <motion.a key={c.title} href={c.link} target="_blank" rel="noreferrer" initial={{opacity:0, scale:.97}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:.5, delay:i*0.06}} style={{background:'#fff', borderRadius:12, padding:20, boxShadow:'0 10px 24px rgba(0,0,0,.08)', color:'inherit', textDecoration:'none'}}>
            <h4>{c.title}</h4>
            <p style={{opacity:.8}}>Voir sur GitHub →</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
