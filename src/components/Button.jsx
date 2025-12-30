import {navLinks} from "../constants/index.js";

const Button = ({name, isBeam = false, containerClass, href = navLinks[3].href}) => {
    const className = `btn ${containerClass ?? ''}`;
    const content = (
        <>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
            )}
            {name}
        </>
    );

    if (href) {
        return (
            <a href={href} className={className}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" className={className}>
            {content}
        </button>
    );
}
export default Button
