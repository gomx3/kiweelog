import '../styles/sticker.css'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import fly from '../assets/fly.png'
import kiwi from '../assets/kiwi.png'
import paint from '../assets/paint.png'

export default function Sticker() {
    gsap.registerPlugin(Draggable)

    const container = useRef(null)

    useGSAP(
        () => {
            const droppables = document.querySelectorAll('.box')
            const dropArea = document.getElementById('dropArea')
            const overlapThreshold = '99%'

            function addClass(el: HTMLElement, className: string) {
                el.classList.add(className)
            }

            function removeClass(el: HTMLElement, className: string) {
                el.classList.remove(className)
            }

            function hasClass(el: HTMLElement, className: string) {
                return el.classList.contains(className)
            }

            Draggable.create(droppables, {
                bounds: window,
                onDrag: function () {
                    if (this.hitTest(dropArea, overlapThreshold)) {
                        addClass(this.target, 'highlight')
                    } else {
                        removeClass(this.target, 'highlight')
                    }
                },
                onDragEnd: function () {
                    if (!hasClass(this.target, 'highlight')) {
                        gsap.to(this.target, {
                            duration: 0.2,
                            x: 0,
                            y: 0,
                        })
                    }
                },
            })
        },
        { scope: container }
    )

    return (
        <section ref={container}>
            <h1>Draggable: Drop on target only</h1>
            <div className="boxes">
                <div id="container">
                    <img id="box1" className="box" src={kiwi.src} />
                    <img id="box2" className="box" src={fly.src} />
                    <img id="box3" className="box" src={paint.src} />
                </div>

                <div id="dropArea">Drop Area</div>
            </div>
        </section>
    )
}
