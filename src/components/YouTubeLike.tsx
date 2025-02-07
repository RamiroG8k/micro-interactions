'use client';

import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite';
import { useState } from 'react';

const STATE_MACHINE = 'State Machine 1';

export default function YouTubeLike() {
    const [liked, setLiked] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: '/rive/like_button.riv',
        stateMachines: STATE_MACHINE,
        autoplay: true
    });

    const hoverInput = useStateMachineInput(rive, STATE_MACHINE, 'Hover');
    const pressedInput = useStateMachineInput(rive, STATE_MACHINE, 'Pressed', false);

    const handleHover = (isHovering: boolean) => {
        if (hoverInput) {
            hoverInput.value = isHovering;
        }
    };

    const handleClick = () => {
        if (!pressedInput) {
            return;
        }

        if (liked) {
            pressedInput.value = false;
            setLiked(false);
        } else {
            pressedInput.value = true;
            setLiked(true);
        }
    };

    return (
        <button
            className="bg-zinc-800 rounded-full text-white flex center flex-row w-28 transition-all duration-300 hover:scale-105"
            onClick={handleClick}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >
            <RiveComponent is="svg" className="size-12 -translate-x-2 pointer-events-none" />

            <span className="text-xl font-medium">{8 + (liked ? 1 : 0)}</span>
        </button>
    );
}
