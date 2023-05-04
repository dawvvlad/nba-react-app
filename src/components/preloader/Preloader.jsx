import "./preloader.css"
export function Preloader() {
    return (
        <>
            <div className="preloader">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>

    )
}