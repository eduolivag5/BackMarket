interface SectionTitleProps {
    title: string | undefined;
}

export default function SectionTitle({title} : SectionTitleProps) {
    return (
        <span className="font-semibold text-xl">{title}</span>
    )
}
