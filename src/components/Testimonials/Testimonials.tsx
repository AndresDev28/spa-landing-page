"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonials() {
  return (
    <div className="relative p-8 md:p-64" id="testimonios">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl gap-8 mx-auto py-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold mb-5">
            Qué dicen los clientes de nosotros
          </h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-primaryDark">Todo lo que necesitas para aceptar pagos con tarjetas y hacer crecer tu negocio en cualquier parte del planeta</p>
          </div>
        </Reveal>
      </div>

      <Slide />
    </div>
  )
}