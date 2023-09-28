import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../../globalStyles/Devices.util";

const Text = styled(motion.div)`
    color: #646464;
    
    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.myMobile}{
        font-size: 22px;
    }

    @media ${device.tablet}{
        font-size: 16px;
    }
`

export default Text;