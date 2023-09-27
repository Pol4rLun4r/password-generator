import GlitchedWriter from "glitched-writer"

interface IPassword {
    Password: string
}

const Glitch = ({ Password }: IPassword) => {
    setTimeout(() => {
        const Writer = new GlitchedWriter("#glitch", { letterize: true });
        (async () => {
            await Writer.write(Password);
        })()
    }, 100);

    return (
        <div id="glitch">
            
        </div>
    )
}

export default Glitch