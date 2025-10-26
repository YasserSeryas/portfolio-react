import { motion } from 'framer-motion'
export function About(){
  return (
    <section style={{padding:'96px 16px', background:'#F8FAFC'}} id="about">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} style={{textAlign:'center'}}>À propos</motion.h2>
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}} style={{maxWidth:760, margin:'12px auto 0',textAlign:'center'}}>
        Développeur web full‑stack, passionné par React et Node.js, à la recherche d'un CDI.
      </motion.p>
    </section>
  )
}
