import GlitchedWriter from "glitched-writer"
import TextGlitch from "./style/TextGlitch"

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
        <TextGlitch>
            <span id="glitch"></span>
        </TextGlitch>
    )
}

export default Glitch