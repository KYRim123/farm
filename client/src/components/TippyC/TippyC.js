import './tippyCStyle.scss'
import Tippy from '@tippyjs/react/headless'

function TippyC({ render, children }) {
    return (
        <Tippy
            interactive
            delay={[0, 300]}
            render={(attrs) => (
                <div className="tippy" tabIndex="-1" {...attrs}>
                    {render}
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default TippyC
