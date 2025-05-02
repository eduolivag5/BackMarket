interface SectionTitleProps {
    title?: string
    subtitle?: string
}

export default function SectionTitle({ title, subtitle } : SectionTitleProps) {
    return (
        <div className='mx-auto text-center space-y-2 md:space-y-4'>
            <p className='font-bold font-dm-serif text-4xl md:text-5xl'>{title}</p>
            <p className='font-medium mx-auto text-lg md:text-xl max-w-2xl'>{subtitle}</p>
        </div>
    )
}
