import { useState } from 'react';
import { Pause, Play, FastForward, Volume2, VolumeX } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle"
import { Slider } from '../ui/slider';


export default function QuickControls(){
    let [isPaused, setIsPaused] = useState(false);
    let [isMuted, setIsMuted] = useState(false);
    let [volumePercent, setVolumePercent] = useState(100);

    return(
        <>
            <Card className='flex flex-row items-center space-x-2 px-2'>
                <Toggle aria-label="Pause" onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? <Play /> : <Pause />}
                </Toggle>
                <Toggle aria-label="Fast Forward">
                    <FastForward />
                </Toggle>
                <Toggle aria-label="Mute" 
                pressed={isMuted}
                onPressedChange={(val) => setIsMuted(val)}>
                    {isMuted ? <VolumeX /> : <Volume2 />}
                </Toggle>
                <Slider aria-label="Volume"
                value={[volumePercent]} 
                onValueChange={(e) => setVolumePercent(e[0])} 
                disabled={isMuted}/>
                <p className="text-center content-center">{volumePercent}%</p>
            </Card>
        </>
    )
}