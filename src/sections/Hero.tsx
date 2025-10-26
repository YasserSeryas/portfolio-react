import { motion } from 'framer-motion'
import { palette } from '../theme'

export function Hero(){
  return (
    <section style={styles.wrapper}>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
        <h1 style={styles.title}>Yasser Youssouf Mohamed</h1>
        <p style={styles.role}>Développeur Web Full-Stack</p>
        <p style={styles.pitch}>Spécialisé en écosystème JavaScript moderne. React, Node.js et TypeScript. En recherche de CDI.</p>
        <motion.div style={styles.cta} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          <a href="#projects" style={styles.btnPrimary}>Voir mes projets</a>
          <a href="#contact" style={styles.btnSuccess}>Me contacter</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

const styles: {[k:string]: React.CSSProperties} = {
  wrapper:{
    minHeight:'100vh',display:'grid',placeItems:'center',
    background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.accent} 50%, ${palette.success} 100%)`,
    color: palette.white, textAlign:'center', padding:'64px 16px'
  },
  title:{fontSize:48, fontWeight:800, marginBottom:8},
  role:{fontSize:22, fontWeight:600, opacity:.95, marginBottom:12},
  pitch:{maxWidth:720, margin:'0 auto 16px', opacity:.9},
  cta:{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'},
  btnPrimary:{background:palette.primary, color:'#fff', padding:'12px 20px', borderRadius:12, textDecoration:'none', boxShadow:'0 10px 30px rgba(0,0,0,.2)'},
  btnSuccess:{background: `linear-gradient(135deg, ${palette.success}, #A3E635)`, color:'#0b1220', padding:'12px 20px', borderRadius:12, textDecoration:'none', boxShadow:'0 10px 30px rgba(0,0,0,.2)'}
}
