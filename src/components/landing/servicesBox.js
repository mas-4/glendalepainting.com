import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { breakpoints } from '../../styles/breakpoints'

export const ServicesBox = () => {
    const Boxes = styled.div`
        display: flex;
    `
    const Box = styled.div`
        width: 50%;
        background: ${props => props.color};
        display: flex;
        flex-direction: column;
        align-items: flex-${props => props.align};
        padding: 5%;
        ${breakpoints.vp4_2} {
            padding: 2%;
        }
    `
    const Text = styled.div`
        width: 70%;
        color: white;
        h3{
            line-height: 0.8;
        }
        p{
            font-size: 1.6rem;
            margin-top: 3rem;
        }
        ${breakpoints.vp13} {
            width: 90%;
        }
        ${breakpoints.vp7} {
            width: 100%
        }
        ${breakpoints.vp4_2} {
            h3 {
                font-size: 1.9rem;
                line-height: 1;
            }
            p {
                margin-top: 1rem;
            }
    `
    return (
        <Boxes>
            <Box
                color="rgba(41, 41, 41, 0.78)"
                align="end"
            >
                <Fade left>
                    <Text>
                        <h3>Repaint &amp; Restoration</h3>
                        <p>
                            Whether it's the typical repaint, or a full-out
                            restoration, our rehabilitation division has the
                            knowledge and experience to get the job done.  Our
                            employees know how to work with discerning clientele
                            and make every resident happy with the end-product.
                        </p>
                    </Text>
                </Fade>
            </Box>
            <Box
                color="rgba(241, 14, 14, 0.6)"
                align="start"
            >
                <Fade right>
                    <Text>
                        <h3>New Construction Painting</h3>
                        <p>
                            Our new construction division boasts some of the
                            largest and most complex structures in Florida.  We
                            know how to meet the ever tightening deadlines
                            developers and general contractors require these
                            days.
                        </p>
                    </Text>
                </Fade>
            </Box>
        </Boxes>
    )
}

