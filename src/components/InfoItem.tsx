export const InfoItem = ({ Icon, title, subtitle }: { Icon: React.ElementType, title: string, subtitle?: string }) => (
    <div className="flex items-center gap-2">
        <div className="bg-blue-100 rounded-md p-2">
            <Icon />
        </div>
        <div>
            <p className="text-sm font-medium">{title}</p>
            {subtitle && <p className="text-xs">{subtitle}</p>}
        </div>
    </div>
);