import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title?: string;
    icon?: string;
    variant: string;
    full?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}


const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
    return (
        <div>
            <button
                type={type}
                className={`flex-center rounded-full cursor-pointer ${variant} ${full ? "w-full" : ""} ${title && icon ? "gap-2" : ""}`}

                onClick={onClick}
            >
                {icon && <Image src={icon} alt={title || 'button'} width={24} height={24} />}
                {title && <span className="bold-20 whitespace-nowrap"> {title} </span>}
            </button>
        </div>
    )
}

export default Button;