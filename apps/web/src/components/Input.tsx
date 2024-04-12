export function Input({
    className,
    type,
    id,
    label,
    placeholder,
    value,
    onChange,
}: {
    className?: string
    type?: string
    id?: string
    label?: string
    value: string
    placeholder?: string
    onChange?: (event) => void
}) {
    return (
        <div className="form-floating">
            <input
                type={type}
                className={className}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
