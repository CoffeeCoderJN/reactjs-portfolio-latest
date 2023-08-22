import React from 'react'

const Section = ({id, title, subtitle, children}) => {
  return (
    <section id={id} className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
        <h3 className="py-3 text-4xl lg:text-5xl font-bold text-amber-500 uppercase tracking-[1px]">{title}</h3>
        <p className="max-w-xl font-semibold text-gray-400 mb-10 text-sm md:text-base">{subtitle}</p>
        {children}
    </section>
  )
}

export default Section