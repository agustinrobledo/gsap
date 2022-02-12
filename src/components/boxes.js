import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from '../../styles/boxes.module.css'
gsap.registerPlugin(ScrollTrigger)

const Boxes = () => {
    const containerRef = useRef()
    const boxRef = useRef([])
    const boxesContainerRef = useRef()
    useEffect(() => {
        gsap.from(containerRef.current, {
            x: "-100vw",
            ease: "power3",
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 0.5,
                pin: true
            }
        })

        gsap.from(boxesContainerRef.current, {
            x: "-100vw",
            ease: "power3",
        })
        
        gsap.to(boxesContainerRef.current, {
            rotate: 360,
            duration: 1,
            ease: "none",
            repeat: -1
        })

        gsap.to(boxRef.current, {
            rotate: 360,
            duration: 2,
            ease: "power3",
            borderRadius: "50%",
            repeat: -1,
        })
    }, []);


  return (
    <div
    ref={containerRef}
    className={styles.container}
    >
    <div className={styles.flexContainer}>
        <div className={styles.hero}>
            <h1>
                Boxes with GSAP
            </h1>
            <h2>
                Animation boxes
            </h2>
        </div>
        <div 
        ref={boxesContainerRef}
        className={styles.boxes}>
                <div
                ref={(el) => boxRef.current.push(el)}
                className={styles.box}
                />
                <div 
                ref={(el) => boxRef.current.push(el)}
                className={styles.box}
                />
        </div>
    </div>
    </div>
  )
}

export default Boxes

