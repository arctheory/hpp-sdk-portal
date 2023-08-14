import { PropsWithChildren } from 'react';
import { PiWarningCircleBold } from 'react-icons/pi';

function Note({ children }: PropsWithChildren) {
    return (
        <div className="border border-yellow-300 bg-yellow-50 p-3 flex flex-col gap-1.5 rounded">
            <div className="flex gap-1 items-center text-yellow-500">
                <PiWarningCircleBold className="text-yellow-500" />
                <strong className="text-xs">Important</strong>
            </div>
            <div className="text-yellow-500 text-sm">{ children }</div>
        </div>
    )
}

export default Note;
