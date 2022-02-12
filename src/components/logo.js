/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/logo.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {
    const containerRef = useRef()
    const containerFlexRef = useRef()
    const titleRef = useRef([])
    useEffect(() => {
        gsap.from(containerRef.current, {
            x: "-100vw",
            ease: "power3.easeOut"
        })
        gsap.from(titleRef.current, {
            x: "-100vw",
            duration: 1,
            stagger: 0.5,
            ease: "power2.inOut"
        })
    }, [])

    


    return (
        <>
            <div 
            className={styles.container}
            ref={containerRef}
            >
               <h1 
                className={styles.title}
                ref={(el) => titleRef.current.push(el)}
               >
                   GSAP
               </h1>
               <h2
                className={styles.title}
                ref={(el) => titleRef.current.push(el)}
               >
                     Animations
               </h2>
            </div>
        </>
    )
}

export default Logo