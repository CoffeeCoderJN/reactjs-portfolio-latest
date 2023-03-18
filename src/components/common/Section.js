import React from 'react'

const Section = ({id, title, subtitle, children}) => {
  return (
    <section id={id} className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
        <h3 className="py-3 text-2xl lg:text-4xl font-semibold text-orange-500 uppercase tracking-[15px]">{title}</h3>
        <p className="max-w-xl font-light text-violet-500 font-semibold mb-10 text-sm md:text-base uppercase">{subtitle}</p>
        {children}
    </section>
  )
}

export default Section