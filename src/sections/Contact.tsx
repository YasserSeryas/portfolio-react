import { motion } from 'framer-motion'
export function Contact(){
  return (
    <section style={{padding:'96px 16px', background:'#0B1220', color:'#fff'}} id="contact">
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} style={{textAlign:'center'}}>Me contacter</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.1}} style={{textAlign:'center', opacity:.9}}>yasseryoussoufm@gmail.com</motion.p>
      </div>
    </section>
  )
}
