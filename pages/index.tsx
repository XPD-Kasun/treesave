import Image from "next/image";

function Index() {
    return (
        <div className="container">
            <Image src="/images/background.jpg" alt="test" fill={true} style={{zIndex: -1}}/>
        </div>
    )
}

export default Index;