import { hppSession } from '../utils/sourceCodes';
import CodePreviewLayout from '../components/layouts/CodePreviewLayout';
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';
import classNames from 'classnames';
import { Overview } from '../components/chapters';

const chapters = [
    'Overview',
    'Set up the server',
    'Set up the client',
    'Initilise payment session',
    'Complete the payment',
    'Payment Status enquiry',
    'Payment Refund'
] as const;
const languages = ['Javascript'] as const;

const chaptersMap: Record<typeof chapters[number], React.ReactElement> = {
    'Overview': <Overview />,
    'Set up the server': <></>,
    'Set up the client': <></>,
    'Initilise payment session': <></>,
    'Complete the payment': <></>,
    'Payment Status enquiry': <></>,
    'Payment Refund': <></>
} as const;

const sourceCodeMap: Record<string, React.ReactElement> = {
    'Set up the server': (
        <CodePreviewLayout 
            style={{ height: '100%' }} 
            fileName="server.js"
            description="File in your Node js backend"
            codeString={hppSession}
        />        
    ),
    'Set up the client': <></>,
    'Initilise payment session': <></>,
    'Complete the payment': <></>,
    'Payment Status enquiry': <></>,
    'Payment Refund': <></>
};

function SetupPayment() {
    const [activeChapter, setActiveChapter] = useState<typeof chapters[number]>('Overview');
    const [language, setLanguage] = useState<typeof languages[number]>('Javascript');

    const activeChapterContents = chaptersMap[activeChapter];
    const activeChapterSourceCode = sourceCodeMap[activeChapter as string] ?? <></>;

    return (
        <div className="h-screen flex">
            <header>

            </header>
            <main className="flex flex-1 divide-x">
                <nav className="w-72 divide-y">
                    <div className="space-y-3 px-6 py-6">
                        <div className="font-bold text-red-500">Language</div>
                        <DropDown
                            className="text-sm font-semibold"
                            options={['Javascript']} 
                            value={language} 
                            onChange={option => setLanguage(option.value as typeof languages[number])}
                        />
                    </div>                    
                    <div className="space-y-3 px-6 py-6">
                        <div className="font-bold text-red-500">SDK</div>
                        <ul className="space-y-2.5 text-sm text-gray-600">
                            {chapters.map(chapter => 
                                <li 
                                    key={chapter} 
                                    className={classNames("cursor-pointer", { "font-bold text-black": activeChapter === chapter })}
                                    onClick={() =>  setActiveChapter(chapter)}
                                >
                                    { chapter }
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                
                <section className="flex flex-1">
                    <div className="w-1/2 py-4">
                        { activeChapterContents }
                    </div>
                    <div className="flex-1 bg-gray-50">
                        { activeChapterSourceCode }
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SetupPayment;
