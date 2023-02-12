
export default function Modal({children}: any) {
    return (
        <>
            <div className="sticky top-0 flex flex-col bg-red-400 z-50">
                
                {children}
            </div>
        </>
    );
}