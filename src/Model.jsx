import React from 'react';
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import { useRef } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';

const Background = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,.7);
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
`

const ModelWrapper = styled.div`
    width: 600px;
    height: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 4px;
    background-color: white;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`

const CloseBtn = styled(MdClose)`
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    font-size: 1.2rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2rem;
    justify-content: space-around;
`

const Model = ({setShowModel, showModel}) => {
    const animation = useSpring({
        config: {
            duration:  500
        },
        opacity: showModel ? 1 : 0,
        transform: showModel ? `translateY(0%)` : `translateY(-100%)`
    })

    const overlayRef = useRef()
    const overlayCloseOption = e => {
        if(overlayRef.current === e.target){
            setShowModel(false)
        }
    }

    const keyPress = useCallback(e => {
        if(showModel && e.key == 'Escape'){
            setShowModel(false)
        }
    }, [showModel, setShowModel])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)

        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

  return (
    showModel && <Background ref={overlayRef} onClick={overlayCloseOption}>
        <animated.div style={animation}>
            <ModelWrapper>
                <Img src="data:image/jpeg;base64,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" />
                <Content>
                    <h1>Hello! What's up</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque similique non hic voluptatum at nihil ut nisi, blanditiis mollitia facere.
                    </p>
                    <CloseBtn onClick={() => setShowModel(prev => false)} />
                </Content>
            </ModelWrapper>
        </animated.div>
    </Background>
  )
}

export default Model
