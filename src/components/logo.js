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
    const heroTitleRef = useRef([])
    useEffect(() => {
        gsap.from(containerRef.current, {
            x: "-100vw",
            ease: "power3.easeOut",
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 0.5,
                pin: true,
            }
        })
        gsap.from(titleRef.current, {
            x: "-100vw",
            duration: 1,
            stagger: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 0.5,
                pin: true,
            }
        })
        gsap.from(containerFlexRef.current, {
            x: "-100vw",
            ease: "power3.easeOut",
            scrollTrigger: {
                trigger: containerFlexRef.current,
                start: "bottom bottom",
                scrub: 0.5,
                pin: true
            }
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
                   Transition
               </h1>
               <h2
                className={styles.title}
                ref={(el) => titleRef.current.push(el)}
               >
                     Animation
               </h2>
            </div>
            <div
            ref={containerFlexRef}
            className={styles.flexContainer}>
                <div
                className={styles.leftHero}>
                    <h1
                    ref={(el) => heroTitleRef.current.push(el)}
                    className={styles.heroTitle}
                    >
                    Improve your front-end coding skills by building real projects
                    </h1>
                    <h2
                    ref={(el) => heroTitleRef.current.push(el)}
                    >
                    Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 302.655 developers 
                    building projects, reviewing code, and helping each other get better.
                    </h2>
                    <button 
                    ref={(el) => heroTitleRef.current.push(el)}
                    className={styles.heroButton}
                    >
                        Login with Github
                    </button>
                </div>
                <img
                ref={(el) => heroTitleRef.current.push(el)}
                src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhomepage-hero.jpg&w=640&q=75" alt="frontendmentor"/>
            </div>
        </>
    )
}

export default Logo